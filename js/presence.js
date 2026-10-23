// js/presence.js - Student Profiles & Real-time Live Classroom Presence
(function() {
  const PROFILE_KEY = 'hsk3_student_profile_v2';
  const TOPIC = 'hsk3_master_classroom_v1';
  const BROKER_URLS = [
    'wss://broker.hivemq.com:8884/mqtt',
    'wss://broker.emqx.io:8084/mqtt'
  ];

  const AVATARS = ['🦁', '🐼', '🐱', '🦊', '🐰', '🐯', '🐻', '🐨', '🦄', '🚀', '🌟', '🎮', '🍉', '⚽', '🎨'];

  // Helper: UUID
  function getUUID() {
    return 'user_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now().toString(36);
  }

  // --- PROFILE MANAGER ---
  const PresenceManager = {
    peers: {},
    mqttClient: null,
    heartbeatTimer: null,
    pruneTimer: null,

    getProfile() {
      try {
        const raw = localStorage.getItem(PROFILE_KEY);
        if (raw) return JSON.parse(raw);
      } catch (e) {
        console.warn('Profile read error:', e);
      }

      const isParentPortal = document.body && document.body.dataset.portal === 'parent';
      const defaultProfile = {
        id: getUUID(),
        name: isParentPortal ? 'คุณพ่อ' : 'นักเรียนคนเก่ง',
        avatar: isParentPortal ? '👨‍🏫' : '🦁',
        role: isParentPortal ? 'parent' : 'student',
        isNew: true
      };
      this.saveProfile(defaultProfile);
      return defaultProfile;
    },

    saveProfile(profile) {
      try {
        localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
      } catch (e) {
        console.warn('Profile write error:', e);
      }
      this.updateProfileUI();
      if (this.mqttClient && this.mqttClient.connected) {
        this.broadcastHeartbeat();
      }
    },

    updateProfileUI() {
      const profile = this.getProfile();
      const avatarEl = document.getElementById('user-avatar-display');
      const nameEl = document.getElementById('user-name-display');
      if (avatarEl) avatarEl.textContent = profile.avatar || '🦁';
      if (nameEl) nameEl.textContent = profile.name || 'นักเรียน';
    },

    // --- PROMPT FIRST TIME OR EDIT MODAL ---
    showProfileModal(forcePrompt = false) {
      let modal = document.getElementById('profile-edit-modal');
      const profile = this.getProfile();

      if (!modal) {
        modal = document.createElement('div');
        modal.id = 'profile-edit-modal';
        modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in';
        document.body.appendChild(modal);
      }

      let selectedAvatar = profile.avatar || '🦁';

      modal.innerHTML = `
        <div class="bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl border border-gray-100 text-center space-y-4">
          <div class="w-16 h-16 rounded-full bg-indigo-50 border-2 border-indigo-200 text-3xl flex items-center justify-center mx-auto shadow-inner" id="profile-modal-preview-avatar">
            ${selectedAvatar}
          </div>
          <div>
            <h3 class="text-xl font-extrabold text-gray-900">${profile.isNew ? '👋 ยินดีต้อนรับสู่ HSK 3 Master!' : '✏️ ตั้งค่าโปรไฟล์ของคุณ'}</h3>
            <p class="text-xs text-gray-500 mt-1">ใส่ชื่อเล่นเพื่อให้คุณพ่อและเพื่อนๆ ในห้องเห็นว่าใครกำลังฝึกอยู่</p>
          </div>

          <div class="space-y-1.5 text-left">
            <label class="text-xs font-bold text-gray-700">ชื่อเล่นของคุณ:</label>
            <input type="text" id="profile-name-input" value="${profile.name || ''}" placeholder="เช่น น้องมังกร, น้องโฟกัส..." class="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 focus:border-indigo-500 text-base font-bold text-gray-800 outline-none transition" autofocus />
          </div>

          <div class="space-y-1.5 text-left">
            <label class="text-xs font-bold text-gray-700">เลือกไอคอนการ์ตูนประจำตัว:</label>
            <div class="grid grid-cols-5 gap-2 p-2 bg-slate-50 rounded-2xl border border-gray-200" id="avatar-pick-grid">
              ${AVATARS.map(a => `
                <button type="button" class="avatar-option-btn w-10 h-10 rounded-xl text-xl flex items-center justify-center hover:bg-white transition ${a === selectedAvatar ? 'bg-white border-2 border-indigo-500 shadow-sm scale-105' : 'border border-transparent'}" data-avatar="${a}">
                  ${a}
                </button>
              `).join('')}
            </div>
          </div>

          <div class="flex gap-2 pt-2">
            ${!profile.isNew && !forcePrompt ? `
              <button id="profile-cancel-btn" class="flex-1 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-sm transition">
                ยกเลิก
              </button>
            ` : ''}
            <button id="profile-save-btn" class="flex-1 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow transition">
              บันทึกและเริ่มใช้งาน ➔
            </button>
          </div>
        </div>
      `;

      modal.classList.remove('hidden');

      // Bind Avatar Pickers
      modal.querySelectorAll('.avatar-option-btn').forEach(btn => {
        btn.onclick = () => {
          modal.querySelectorAll('.avatar-option-btn').forEach(b => {
            b.classList.remove('bg-white', 'border-2', 'border-indigo-500', 'shadow-sm', 'scale-105');
            b.classList.add('border-transparent');
          });
          btn.classList.add('bg-white', 'border-2', 'border-indigo-500', 'shadow-sm', 'scale-105');
          btn.classList.remove('border-transparent');
          selectedAvatar = btn.dataset.avatar;
          document.getElementById('profile-modal-preview-avatar').textContent = selectedAvatar;
        };
      });

      // Save Button
      const saveBtn = document.getElementById('profile-save-btn');
      const nameInput = document.getElementById('profile-name-input');

      const doSave = () => {
        const nameVal = nameInput.value.trim() || 'เพื่อนร่วมชั้น';
        profile.name = nameVal;
        profile.avatar = selectedAvatar;
        profile.isNew = false;
        this.saveProfile(profile);
        modal.classList.add('hidden');
      };

      saveBtn.onclick = doSave;
      nameInput.onkeypress = (e) => {
        if (e.key === 'Enter') doSave();
      };

      const cancelBtn = document.getElementById('profile-cancel-btn');
      if (cancelBtn) {
        cancelBtn.onclick = () => modal.classList.add('hidden');
      }
    },

    // --- REALTIME PRESENCE (MQTT WebSockets) ---
    initMQTT() {
      if (typeof mqtt === 'undefined') {
        console.warn('MQTT library not loaded. Running in local presence mode.');
        this.updateOnlineBadge(1);
        return;
      }

      const profile = this.getProfile();
      const brokerUrl = BROKER_URLS[0];
      const clientId = 'hsk3_' + profile.id + '_' + Math.random().toString(36).substr(2, 6);

      try {
        const client = mqtt.connect(brokerUrl, {
          clientId: clientId,
          clean: true,
          connectTimeout: 5000,
          reconnectPeriod: 6000
        });

        this.mqttClient = client;

        client.on('connect', () => {
          client.subscribe(TOPIC, (err) => {
            if (!err) {
              this.broadcastHeartbeat();
            }
          });
        });

        client.on('message', (topic, payload) => {
          if (topic === TOPIC) {
            try {
              const msg = JSON.parse(payload.toString());
              this.handlePeerMessage(msg);
            } catch (e) {
              // ignore invalid message
            }
          }
        });

        client.on('error', (err) => {
          console.warn('Presence MQTT connection issue:', err);
        });

        // Periodic Heartbeat every 12 seconds
        this.heartbeatTimer = setInterval(() => {
          if (client.connected) {
            this.broadcastHeartbeat();
          }
        }, 12000);

        // Prune inactive peers every 8 seconds
        this.pruneTimer = setInterval(() => {
          this.prunePeers();
        }, 8000);

        // Broadcast leave on exit
        window.addEventListener('beforeunload', () => {
          if (client.connected) {
            client.publish(TOPIC, JSON.stringify({
              type: 'leave',
              id: profile.id
            }));
          }
        });

      } catch (e) {
        console.warn('Presence init failed:', e);
        this.updateOnlineBadge(1);
      }
    },

    broadcastHeartbeat() {
      if (!this.mqttClient || !this.mqttClient.connected) return;
      const profile = this.getProfile();
      const payload = {
        type: 'heartbeat',
        id: profile.id,
        name: profile.name,
        avatar: profile.avatar || '🦁',
        role: profile.role,
        portal: document.body.dataset.portal || 'student',
        timestamp: Date.now()
      };
      this.mqttClient.publish(TOPIC, JSON.stringify(payload));
      // Record self
      this.peers[profile.id] = { ...payload, isSelf: true, lastSeen: Date.now() };
      this.updateOnlineBadge();
    },

    handlePeerMessage(msg) {
      if (!msg || !msg.id) return;
      const myProfile = this.getProfile();

      if (msg.type === 'heartbeat') {
        this.peers[msg.id] = {
          ...msg,
          isSelf: (msg.id === myProfile.id),
          lastSeen: Date.now()
        };
        this.updateOnlineBadge();
      } else if (msg.type === 'leave') {
        delete this.peers[msg.id];
        this.updateOnlineBadge();
      }
    },

    prunePeers() {
      const now = Date.now();
      let changed = false;
      const myProfile = this.getProfile();

      for (const id in this.peers) {
        if (id === myProfile.id) continue;
        // Inactive for more than 28 seconds
        if (now - this.peers[id].lastSeen > 28000) {
          delete this.peers[id];
          changed = true;
        }
      }
      if (changed) this.updateOnlineBadge();
    },

    getActivePeersList() {
      const myProfile = this.getProfile();
      // Ensure self is in list
      if (!this.peers[myProfile.id]) {
        this.peers[myProfile.id] = {
          id: myProfile.id,
          name: myProfile.name,
          avatar: myProfile.avatar || '🦁',
          role: myProfile.role,
          isSelf: true,
          lastSeen: Date.now()
        };
      }
      return Object.values(this.peers);
    },

    updateOnlineBadge(overrideCount = null) {
      const peers = this.getActivePeersList();
      const count = overrideCount !== null ? overrideCount : peers.length;
      const textEl = document.getElementById('live-online-text');
      if (textEl) {
        textEl.textContent = `🟢 ออนไลน์ ${count} คน`;
      }
    },

    // --- SHOW ONLINE PEERS POPUP ---
    showOnlinePeersModal() {
      let modal = document.getElementById('online-peers-modal');
      const peers = this.getActivePeersList();

      if (!modal) {
        modal = document.createElement('div');
        modal.id = 'online-peers-modal';
        modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in';
        document.body.appendChild(modal);
      }

      modal.innerHTML = `
        <div class="bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl border border-gray-100 space-y-4">
          <div class="flex items-center justify-between border-b border-gray-100 pb-3">
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
              <h3 class="font-bold text-gray-900 text-lg">เพื่อนๆ ที่กำลังออนไลน์ (${peers.length} คน)</h3>
            </div>
            <button id="close-peers-modal-btn" class="text-gray-400 hover:text-gray-600 font-bold text-sm">✕</button>
          </div>

          <div class="space-y-2 max-h-72 overflow-y-auto pr-1">
            ${peers.map(p => `
              <div class="flex items-center justify-between p-3 rounded-2xl ${p.isSelf ? 'bg-indigo-50 border border-indigo-200' : 'bg-slate-50 border border-gray-200'}">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-xl">
                    ${p.avatar || '🦁'}
                  </div>
                  <div>
                    <div class="font-bold text-sm text-gray-900 flex items-center gap-1.5">
                      <span>${p.name || 'เพื่อนร่วมชั้น'}</span>
                      ${p.isSelf ? '<span class="px-1.5 py-0.2 rounded text-[10px] bg-indigo-600 text-white font-medium">คุณ</span>' : ''}
                      ${p.role === 'parent' ? '<span class="px-1.5 py-0.2 rounded text-[10px] bg-amber-200 text-amber-900 font-medium">ผู้ปกครอง</span>' : ''}
                    </div>
                    <div class="text-[11px] text-gray-500">
                      ${p.isSelf ? 'กำลังใช้งานอยู่' : 'ออนไลน์ในห้องเรียน'}
                    </div>
                  </div>
                </div>
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              </div>
            `).join('')}
          </div>

          <div class="text-center pt-2">
            <button id="peers-invite-btn" class="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-xs shadow transition flex items-center justify-center gap-1.5">
              <span>🔗</span> คัดลอกลิงก์ชวนเพื่อนมาฝึกด้วยกัน
            </button>
          </div>
        </div>
      `;

      modal.classList.remove('hidden');

      document.getElementById('close-peers-modal-btn').onclick = () => modal.classList.add('hidden');
      modal.onclick = (e) => {
        if (e.target === modal) modal.classList.add('hidden');
      };

      document.getElementById('peers-invite-btn').onclick = () => {
        const url = window.location.origin + '/student';
        navigator.clipboard.writeText(url).then(() => {
          alert('คัดลอกลิงก์สำหรับเพื่อนๆ เรียบร้อยแล้ว! สามารถส่งทาง LINE หรือแชทให้เพื่อนเปิดได้เลยครับ:\n' + url);
        }).catch(() => {
          prompt('คัดลอกลิงก์ส่งให้เพื่อนที่นี่:', url);
        });
      };
    },

    init() {
      this.updateProfileUI();
      const profile = this.getProfile();

      // Show prompt if first time
      if (profile.isNew) {
        setTimeout(() => {
          this.showProfileModal(true);
        }, 600);
      }

      // Wire profile badge click
      const profileBadge = document.getElementById('user-profile-badge');
      if (profileBadge) {
        profileBadge.onclick = () => this.showProfileModal(false);
      }

      // Wire online badge click
      const presenceBadge = document.getElementById('live-presence-badge');
      if (presenceBadge) {
        presenceBadge.onclick = () => this.showOnlinePeersModal();
      }

      // Start MQTT presence
      this.initMQTT();
    }
  };

  window.HSKPresence = PresenceManager;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => PresenceManager.init());
  } else {
    PresenceManager.init();
  }
})();
