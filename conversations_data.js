// conversations_data.js - Daily Chinese Conversations Master Dataset (34 Conversations across 4 Categories & 3 Levels)
(function() {
  window.DAILY_CONVERSATIONS = [
    // =========================================================================
    // หมวดที่ 1: ในโรงเรียน (SCHOOL & EDUCATION)
    // =========================================================================

    // --- ในโรงเรียน: 1. ง่าย ---
    {
      id: 'school-e1',
      categoryKey: 'school',
      category: 'ในโรงเรียน',
      level: 'easy',
      levelLabel: 'ง่าย',
      levelNum: 1,
      badgeColor: 'emerald',
      icon: '🏫',
      titleCn: '老师好！早上好！',
      titlePinyin: 'Lǎoshī hǎo! Zǎoshang hǎo!',
      titleTh: 'สวัสดีครับคุณครู! อรุณสวัสดิ์ครับ!',
      situation: 'การทักทายคุณครูและเพื่อนร่วมชั้นเมื่อมาถึงโรงเรียนในตอนเช้า',
      roles: {
        A: { name: '小明 (เสี่ยวหมิง)', avatar: '👦', label: 'นักเรียน' },
        B: { name: '李老师 (ครูหลี่)', avatar: '👩‍🏫', label: 'คุณครู' }
      },
      lines: [
        { speaker: 'A', cn: '李老师，早上好！', pinyin: 'Lǐ lǎoshī, zǎoshang hǎo!', th: 'ครูหลี่ครับ อรุณสวัสดิ์ครับ!' },
        { speaker: 'B', cn: '小明，早上好！你今天来得很早啊。', pinyin: 'Xiǎomíng, zǎoshang hǎo! Nǐ jīntiān lái de hěn zǎo a.', th: 'เสี่ยวหมิง อรุณสวัสดิ์จ้ะ! วันนี้เธอมาถึงเช้ามากเลยนะ' },
        { speaker: 'A', cn: '因为今天轮到我做值日生，我要打扫教室。', pinyin: 'Yīnwèi jīntiān lúndào wǒ zuò zhírìshēng, wǒ yào dǎsǎo jiàoshì.', th: 'เพราะวันนี้ถึงเวรผมเป็นเวรประจำวันครับ ผมต้องทำความสะอาดห้องเรียน' },
        { speaker: 'B', cn: '真是一个勤劳的好孩子，快进教室吧！', pinyin: 'Zhēn shì yí gè qínláo de hǎo háizi, kuài jìn jiàoshì ba!', th: 'เป็นเด็กขยันจริงๆ รีบเข้าห้องเรียนเถอะจ้ะ!' },
        { speaker: 'A', cn: '好的，老师再见！', pinyin: 'Hǎo de, lǎoshī zàijiàn!', th: 'ครับผม คุณครูสวัสดีครับ!' }
      ],
      keyVocab: [
        { cn: '老师', pinyin: 'lǎoshī', th: 'คุณครู' },
        { cn: '早上好', pinyin: 'zǎoshang hǎo', th: 'อรุณสวัสดิ์' },
        { cn: '值日生', pinyin: 'zhírìshēng', th: 'นักเรียนเวรประจำวัน' },
        { cn: '打扫', pinyin: 'dǎsǎo', th: 'ทำความสะอาด / ปัดกวาด' },
        { cn: '教室', pinyin: 'jiàoshì', th: 'ห้องเรียน' }
      ],
      tip: 'ในโรงเรียนจีน นักเรียนทุกคนจะเรียกครูโดยขึ้นต้นด้วยนามสกุล เช่น "李老师" (ครูหลี่)'
    },
    {
      id: 'school-e2',
      categoryKey: 'school',
      category: 'ในโรงเรียน',
      level: 'easy',
      levelLabel: 'ง่าย',
      levelNum: 1,
      badgeColor: 'emerald',
      icon: '✏️',
      titleCn: '我可以借你的橡皮吗？',
      titlePinyin: 'Wǒ kěyǐ jiè nǐ de xiàngpí ma?',
      titleTh: 'ฉันขอยืมยางลบของเธอหน่อยได้ไหม?',
      situation: 'การขอยืมเครื่องเขียนจากเพื่อนร่วมโต๊ะและการขอบคุณอย่างสุภาพ',
      roles: {
        A: { name: '欢欢 (ฮวนฮวน)', avatar: '👧', label: 'เพื่อน A' },
        B: { name: '天天 (เทียนเทียน)', avatar: '🧒', label: 'เพื่อน B' }
      },
      lines: [
        { speaker: 'A', cn: '天天，我的铅笔写错了，我可以借你的橡皮吗？', pinyin: 'Tiāntian, wǒ de qiānbǐ xiě cuò le, wǒ kěyǐ jiè nǐ de xiàngpí ma?', th: 'เทียนเทียน ดินสอฉันเขียนผิดแล้ว ฉันขอยืมยางลบของเธอหน่อยได้ไหม?' },
        { speaker: 'B', cn: '当然可以，给你，用完记得还给我哦。', pinyin: 'Dāngrán kěyǐ, gěi nǐ, yòng wán jìde huán gěi wǒ o.', th: 'ได้แน่นอน นี่จ้ะ ใช้เสร็จแล้วอย่าลืมคืนฉันนะ' },
        { speaker: 'A', cn: '太谢谢你了！你还有多余的尺子吗？', pinyin: 'Tài xièxie nǐ le! Nǐ hái yǒu duōyú de chǐzi ma?', th: 'ขอบใจมากนะ! เธอมีไม้บรรทัดอันสำรองอีกไหม?' },
        { speaker: 'B', cn: '有啊，我的笔袋里还有一把，拿去用吧。', pinyin: 'Yǒu a, wǒ de bǐdài lǐ hái yǒu yì bǎ, ná qù yòng ba.', th: 'มีสิ ในกล่องดินสอฉันมีอีกอันนึง เอาไปใช้ได้เลย' },
        { speaker: 'A', cn: '你真好，下课我请你吃糖果！', pinyin: 'Nǐ zhēn hǎo, xiàkè wǒ qǐng nǐ chī tángguǒ!', th: 'เธอใจดีจัง เลิกเรียนเดี๋ยวฉันเลี้ยงลูกอมนะ!' }
      ],
      keyVocab: [
        { cn: '借', pinyin: 'jiè', th: 'ยืม' },
        { cn: '橡皮', pinyin: 'xiàngpí', th: 'ยางลบ' },
        { cn: '铅笔', pinyin: 'qiānbǐ', th: 'ดินสอ' },
        { cn: '尺子', pinyin: 'chǐzi', th: 'ไม้บรรทัด' },
        { cn: '笔袋', pinyin: 'bǐdài', th: 'กล่องดินสอ' }
      ],
      tip: 'คำลักษณนามของไม้บรรทัดคือ "一把" (yì bǎ) เช่น "一把尺子" (ไม้บรรทัดหนึ่งอัน)'
    },
    {
      id: 'school-e3',
      categoryKey: 'school',
      category: 'ในโรงเรียน',
      level: 'easy',
      levelLabel: 'ง่าย',
      levelNum: 1,
      badgeColor: 'emerald',
      icon: '📖',
      titleCn: '今天的语文作业是什么？',
      titlePinyin: 'Jīntiān de yǔwén zuòyè shì shénme?',
      titleTh: 'การบ้านวิชาภาษาจีนวันนี้คืออะไร?',
      situation: 'การสอบถามการบ้านที่ครูสั่ง และตรวจสอบหน้าแบบฝึกหัด',
      roles: {
        A: { name: '亮亮 (เลี่ยงเลี่ยง)', avatar: '👦', label: 'เพื่อน A' },
        B: { name: '芳芳 (ฟางฟาง)', avatar: '👧', label: 'หัวหน้าห้อง' }
      },
      lines: [
        { speaker: 'A', cn: '芳芳，刚才老师布置的作业是什么？我没记清楚。', pinyin: 'Fāngfang, gāngcái lǎoshī bùzhì de zuòyè shì shénme? Wǒ méi jì qīngchu.', th: 'ฟางฟาง การบ้านที่ครูเพิ่งสั่งเมื่อกี้คืออะไรเหรอ? ฉันจดไม่ทัน' },
        { speaker: 'B', cn: '今天要把练习册第二十页的生词抄写三遍。', pinyin: 'Jīntiān yào bǎ liànxícè dì èrshí yè de shēngcí chāoxiě sān biàn.', th: 'วันนี้ต้องคัดคำศัพท์ในสมุดแบบฝึกหัดหน้า 20 จำนวน 3 จบจ้ะ' },
        { speaker: 'A', cn: '还要背诵课文吗？', pinyin: 'Hái yào bèisòng kèwén ma?', th: 'แล้วต้องท่องจำบทเรียนด้วยไหม?' },
        { speaker: 'B', cn: '要背诵第二段，明天早读课老师要检查。', pinyin: 'Yào bèisòng dì èr duàn, míngtiān zǎodú kè lǎoshī yào jiǎnchá.', th: 'ต้องท่องย่อหน้าที่สองด้วย พรุ่งนี้คาบอ่านเช้าครูจะตรวจจ้ะ' },
        { speaker: 'A', cn: '我知道了，谢谢你告诉我！', pinyin: 'Wǒ zhīdào le, xièxie nǐ gàosu wǒ!', th: 'เข้าใจแล้ว ขอบใจมากนะที่บอกฉัน!' }
      ],
      keyVocab: [
        { cn: '作业', pinyin: 'zuòyè', th: 'การบ้าน' },
        { cn: '练习册', pinyin: 'liànxícè', th: 'สมุดแบบฝึกหัด' },
        { cn: '生词', pinyin: 'shēngcí', th: 'คำศัพท์ใหม่' },
        { cn: '背诵', pinyin: 'bèisòng', th: 'ท่องจำ' },
        { cn: '早读课', pinyin: 'zǎodú kè', th: 'คาบอ่านหนังสือตอนเช้า' }
      ],
      tip: '"早读课" (zǎodú kè) คือ คาบอ่านหนังสือตอนเช้าก่อนเริ่มเรียน ซึ่งเป็นเอกลักษณ์ของโรงเรียนจีน'
    },
    {
      id: 'school-e4',
      categoryKey: 'school',
      category: 'ในโรงเรียน',
      level: 'easy',
      levelLabel: 'ง่าย',
      levelNum: 1,
      badgeColor: 'emerald',
      icon: '⏰',
      titleCn: '放学后我们几点在校门口见？',
      titlePinyin: 'Fàngxué hòu wǒmen jǐ diǎn zài xiàoménkǒu jiàn?',
      titleTh: 'หลังเลิกเรียนพวกเราเจอกันที่ประตูโรงเรียนกี่โมง?',
      situation: 'การนัดพบเพื่อนหลังเลิกเรียนเพื่อไปห้องสมุดด้วยกัน',
      roles: {
        A: { name: '乐乐 (เล่อเล่อ)', avatar: '👦', label: 'เพื่อน A' },
        B: { name: '明明 (หมิงหมิง)', avatar: '🧒', label: 'เพื่อน B' }
      },
      lines: [
        { speaker: 'A', cn: '明明，你看手表，现在几点了？', pinyin: 'Míngming, nǐ kàn shǒubiǎo, xiànzài jǐ diǎn le?', th: 'หมิงหมิง เธอดูนาฬิกาหน่อย ตอนนี้กี่โมงแล้ว?' },
        { speaker: 'B', cn: '现在差一刻四点，马上就要放学了。', pinyin: 'Xiànzài chà yí kè sì diǎn, mǎshàng jiù yào fàngxué le.', th: 'ตอนนี้อีก 15 นาที 4 โมงเย็น ใกล้จะเลิกเรียนแล้ว' },
        { speaker: 'A', cn: '放学后我们一起去图书馆看书吧？', pinyin: 'Fàngxué hòu wǒmen yìqǐ qù túshūguǎn kànshū ba?', th: 'หลังเลิกเรียนพวกเราไปอ่านหนังสือที่ห้องสมุดด้วยกันไหม?' },
        { speaker: 'B', cn: '好啊，四点十分我们在学校门口见！', pinyin: 'Hǎo a, sì diǎn shí fēn wǒmen zài xuéxiào ménkǒu jiàn!', th: 'ได้สิ 4 โมง 10 นาทีเจอกันที่ประตูโรงเรียนนะ!' },
        { speaker: 'A', cn: '一言为定，不见不散！', pinyin: 'Yì yán wéi dìng, bú jiàn bú sàn!', th: 'ตกลงตามนี้ ไม่เจอกันไม่แยกย้าย!' }
      ],
      keyVocab: [
        { cn: '放学', pinyin: 'fàngxué', th: 'เลิกเรียน' },
        { cn: '差一刻', pinyin: 'chà yí kè', th: 'ขาดอีก 15 นาที' },
        { cn: '图书馆', pinyin: 'túshūguǎn', th: 'ห้องสมุด' },
        { cn: '校门', pinyin: 'xiàomén', th: 'ประตูโรงเรียน' },
        { cn: '不见不散', pinyin: 'bú jiàn bú sàn', th: 'ไม่เจอกันไม่เลิกรา' }
      ],
      tip: '"一刻" (yí kè) เท่ากับ 15 นาที ดังนั้น "差一刻四点" แปลว่า อีก 15 นาที 4 โมง (15:45 น.)'
    },

    // --- ในโรงเรียน: 2. ปานกลาง ---
    {
      id: 'school-m1',
      categoryKey: 'school',
      category: 'ในโรงเรียน',
      level: 'medium',
      levelLabel: 'ปานกลาง',
      levelNum: 2,
      badgeColor: 'amber',
      icon: '🎨',
      titleCn: '你最喜欢哪一门功课？',
      titlePinyin: 'Nǐ zuì xǐhuan nǎ yì mén gōngkè?',
      titleTh: 'เธอชอบวิชาไหนมากที่สุด?',
      situation: 'การแลกเปลี่ยนความชอบในวิชาเรียน เช่น ศิลปะ วิทยาศาสตร์ และความถนัดของแต่ละคน',
      roles: {
        A: { name: '伟伟 (เหว่ยเหว่ย)', avatar: '🧑', label: 'เพื่อน A' },
        B: { name: '娜娜 (นานา)', avatar: '👩', label: 'เพื่อน B' }
      },
      lines: [
        { speaker: 'A', cn: '娜娜，看课程表，今天下午有美术课和科学课呢！', pinyin: 'Nàna, kàn kèchéngbiǎo, jīntiān xiàwǔ yǒu měishù kè hé kēxué kè ne!', th: 'นานา ดูตารางสอนสิ บ่ายนี้มีวิชาศิลปะกับวิชาวิทยาศาสตร์ด้วยนะ!' },
        { speaker: 'B', cn: '太棒了！我最喜欢美术课了，画画能让我放松心情。你呢？', pinyin: 'Tài bàng le! Wǒ zuì xǐhuan měishù kè le, huàhuà néng ràng wǒ fàngsōng xīnqíng. Nǐ ne?', th: 'ยอดไปเลย! ฉันชอบวิชาศิลปะที่สุด การวาดรูปทำให้ฉันผ่อนคลายจิตใจ แล้วเธอล่ะ?' },
        { speaker: 'A', cn: '我比较擅长数学和科学，我觉得解出难题特别有成就感。', pinyin: 'Wǒ bǐjiào shàncháng shùxué hé kēxué, wǒ juéde jiěchū nántí tèbié yǒu chéngjiùgǎn.', th: 'ฉันค่อนข้างถนัดคณิตศาสตร์กับวิทยาศาสตร์ ฉันรู้สึกว่าการแก้โจทย์ยากๆ ได้มันภูมิใจมาก' },
        { speaker: 'B', cn: '那你以后数学题遇到不会的，我可要经常向你请教哦！', pinyin: 'Nà nǐ yǐhòu shùxué tí yùdào bú huì de, wǒ kě yào chángcháng xiàng nǐ qǐngjiào o!', th: 'งั้นวันหลังถ้าฉันเจอโจทย์เลขข้อที่ไม่เข้าใจ ฉันคงต้องมาขอคำแนะนำจากเธอบ่อยๆ แล้วล่ะ!' },
        { speaker: 'A', cn: '随时欢迎，互帮互助才能共同进步嘛！', pinyin: 'Suíshí huānyíng, hù bāng hù zhù cái néng gòngtóng jìnbù ma!', th: 'ยินดีตลอดเวลา ช่วยเหลือซึ่งกันและกันถึงจะก้าวหน้าไปด้วยกันไงล่ะ!' }
      ],
      keyVocab: [
        { cn: '课程表', pinyin: 'kèchéngbiǎo', th: 'ตารางสอน / ตารางเรียน' },
        { cn: '美术', pinyin: 'měishù', th: 'ศิลปะ' },
        { cn: '擅长', pinyin: 'shàncháng', th: 'ถนัด / เชี่ยวชาญ' },
        { cn: '成就感', pinyin: 'chéngjiùgǎn', th: 'ความภูมิใจในความสำเร็จ' },
        { cn: '互帮互助', pinyin: 'hù bāng hù zhù', th: 'ช่วยเหลือซึ่งกันและกัน' }
      ],
      tip: '"互帮互助" (hù bāng hù zhù) เป็นสำนวน 4 คำยอดนิยมในหมู่นักเรียน'
    },
    {
      id: 'school-m2',
      categoryKey: 'school',
      category: 'ในโรงเรียน',
      level: 'medium',
      levelLabel: 'ปานกลาง',
      levelNum: 2,
      badgeColor: 'amber',
      icon: '📚',
      titleCn: '下个月就要考HSK三级了，好紧张！',
      titlePinyin: 'Xià gè yuè jiù yào kǎo HSK sān jí le, hǎo jǐnzhāng!',
      titleTh: 'เดือนหน้าก็ต้องสอบ HSK ระดับ 3 แล้ว ตื่นเต้นจังเลย!',
      situation: 'การปรึกษาเรื่องการเตรียมตัวสอบ HSK เทคนิคการจำศัพท์ และการฝึกทำข้อสอบเก่า',
      roles: {
        A: { name: '安娜 (แอนนา)', avatar: '👩‍🎓', label: 'เพื่อน A' },
        B: { name: '张伟 (จางเหว่ย)', avatar: '🧑‍🎓', label: 'เพื่อน B' }
      },
      lines: [
        { speaker: 'A', cn: '张伟，下个月就要考HSK三级了，我听力和阅读还有很多题做不对。', pinyin: 'Zhāng Wěi, xià gè yuè jiù yào kǎo HSK sān jí le, wǒ tīnglì hé yuèdú hái yǒu hěn duō tí zuò bú duì.', th: 'จางเหว่ย เดือนหน้าต้องสอบ HSK 3 แล้ว พาร์ทการฟังและการอ่านฉันยังทำผิดตั้งหลายข้อ' },
        { speaker: 'B', cn: '别担心，还有一个月时间。生词表上的六百个词你都背熟了吗？', pinyin: 'Bié dānxīn, hái yǒu yí gè yuè shíjiān. Shēngcíbǐao shang de liùbǎi gè cí nǐ dōu bèi shú le ma?', th: 'อย่ากังวลเลย ยังมีเวลาอีกตั้งเดือนนึง คำศัพท์ 600 คำในตารางเธอท่องจนขึ้นใจหรือยัง?' },
        { speaker: 'A', cn: '大部分都记住了，但是听力录音一快，我就反应不过来。', pinyin: 'Dà bùfen dōu jìzhù le, dànshì tīnglì lùyīn yí kuài, wǒ jiù fǎnyìng bú guòlái.', th: 'ส่วนใหญ่จำได้แล้วล่ะ แต่พอเสียงไฟล์การฟังพูดเร็วปุ๊บ ฉันก็แปลไม่ทันเลย' },
        { speaker: 'B', cn: '你可以每天早上听半小时真题录音，边听边跟读，这样进步最快。', pinyin: 'Nǐ kěyǐ měitiān zǎoshang tīng bàn xiǎoshí zhēntí lùyīn, biān tīng biān gēndú, zhèyàng jìnbù zuì kuài.', th: 'เธอลองฟังเทปข้อสอบจริงวันละ 30 นาทีทุกเช้าสิ ฟังไปด้วยแล้วพูดตามไปด้วย ก้าวหน้าเร็วที่สุด' },
        { speaker: 'A', cn: '这个办法真好！明天开始我们每天放学后一起复习吧！', pinyin: 'Zhège bànfǎ zhēn hǎo! Míngtiān kāishǐ wǒmen měitiān fàngxué hòu yìqǐ fùxí ba!', th: 'วิธีนี้ดีจริงๆ! ตั้งแต่พรุ่งนี้เป็นต้นไป หลังเลิกเรียนพวกเรามาทบทวนด้วยกันเถอะ!' },
        { speaker: 'B', cn: '好啊，加油，我们一定能考过的！', pinyin: 'Hǎo a, jiāyóu, wǒmen yídìng néng kǎo guò de!', th: 'ได้เลย สู้ๆ นะ พวกเราต้องสอบผ่านได้อย่างแน่นอน!' }
      ],
      keyVocab: [
        { cn: '紧张', pinyin: 'jǐnzhāng', th: 'ตื่นเต้น / กังวล' },
        { cn: '听力', pinyin: 'tīnglì', th: 'ทักษะการฟัง' },
        { cn: '阅读', pinyin: 'yuèdú', th: 'ทักษะการอ่าน' },
        { cn: '真题', pinyin: 'zhēntí', th: 'ข้อสอบจริง' },
        { cn: '加油', pinyin: 'jiāyóu', th: 'สู้ๆ' }
      ],
      tip: '"边……边……" เป็นโครงสร้างบอกการกระทำสองอย่างพร้อมกัน เช่น "边听边读" (ฟังไปด้วย อ่านไปด้วย)'
    },

    // --- ในโรงเรียน: 3. ยาก ---
    {
      id: 'school-h1',
      categoryKey: 'school',
      category: 'ในโรงเรียน',
      level: 'hard',
      levelLabel: 'ยาก',
      levelNum: 3,
      badgeColor: 'rose',
      icon: '🎤',
      titleCn: '参加全校辩论赛的准备与立论',
      titlePinyin: 'Cānjiā quán xiào biànlùnsài de zhǔnbèi yǔ lìlùn',
      titleTh: 'การเตรียมตัวและการตั้งประเด็นสำหรับแข่งขันโต้วาทีระดับโรงเรียน',
      situation: 'การอภิปรายประเด็นโต้วาทีเรื่องเทคโนโลยีกับการศึกษา และการจัดโครงสร้างตรรกะข้อถกเถียง',
      roles: {
        A: { name: '队长 (หัวหน้าทีม)', avatar: '👩‍💼', label: 'หัวหน้าทีมโต้วาที' },
        B: { name: '一辩 (ผู้โต้วาทีคนที่ 1)', avatar: '🧑‍💼', label: 'ผู้แถลงเปิด' }
      },
      lines: [
        { speaker: 'A', cn: '各位队员，下周辩论赛的辩题是“人工智能是否会削弱青少年的自主思考能力”。', pinyin: 'Gèwèi duìyuán, xià zhōu biànlùnsài de biàntí shì "réngōng zhìnéng shìfǒu huì xuēruò qīngshàonián de zìzhǔ sīkǎo nénglì".', th: 'สมาชิกในทีมทุกคน หัวข้อโต้วาทีสัปดาห์หน้าคือ "AI จะทำให้ความสามารถในการคิดวิเคราะห์ของเยาวชนลดลงหรือไม่"' },
        { speaker: 'B', cn: '我们抽到的是反方立场，核心观点应强调AI是思维的辅助杠杆而非替代品。', pinyin: 'Wǒmen chōudào de shì fǎnfāng lìchǎng, héxīn guāndiǎn yīng qiángdiào AI shì sīwéi de fǔzhù gànggǎn ér fēi tìdàipǐn.', th: 'พวกเราจับสลากได้ฝ่ายค้าน ประเด็นแกนหลักควรตอกย้ำว่า AI เป็นเครื่องมือทุ่นแรงทางความคิด ไม่ใช่สิ่งที่จะมาแทนที่มนุษย์' },
        { speaker: 'A', cn: '非常准确！一辩开篇立论时，必须对“自主思考”给出严密清晰的定义。', pinyin: 'Fēicháng zhǔnquè! Yíbiàn kāipiān lìlùn shí, bìxū duì "zìzhǔ sīkǎo" gěichū yánmì qīngxī de dìngyì.', th: 'แม่นยำมาก! ผู้แถลงเปิดตอนตั้งประเด็น ต้องให้คำนิยามของ "การคิดด้วยตนเอง" อย่างรัดกุมและกระจ่างแจ้ง' },
        { speaker: 'B', cn: '同时，我们要准备几组有说服力的实证案例与统计数据，以反驳正方的论调。', pinyin: 'Tóngshí, wǒmen yào zhǔnbèi jǐ zǔ yǒu shuōfúlì de shízhèng ànlì yǔ tǒngjì shùjù, yǐ fǎnbó zhèngfāng de lùndiào.', th: 'พร้อมกันนี้ เราต้องเตรียมเคสตัวอย่างเชิงประจักษ์และสถิติที่มีน้ำหนัก เพื่อโต้แย้งข้ออ้างของฝ่ายเสนอ' },
        { speaker: 'A', cn: '大家今晚整理好资料，明天放学在图书馆进行全流程模拟攻辩！', pinyin: 'Dàjiā jīnwǎn zhěnglǐ hǎo zīliào, míngtiān fàngxué zài túshūguǎn jìnxíng quán liúchéng mónǐ gōngbiàn!', th: 'คืนนี้ทุกคนจัดเตรียมข้อมูลให้พร้อม พรุ่งนี้หลังเลิกเรียนไปซ้อมโต้วาทีจำลองเต็มรูปแบบที่ห้องสมุดกัน!' }
      ],
      keyVocab: [
        { cn: '辩论赛', pinyin: 'biànlùnsài', th: 'การแข่งขันโต้วาที' },
        { cn: '立论', pinyin: 'lìlùn', th: 'การตั้งประเด็นโต้แย้ง' },
        { cn: '反方', pinyin: 'fǎnfāng', th: 'ฝ่ายค้าน' },
        { cn: '正方', pinyin: 'zhèngfāng', th: 'ฝ่ายเสนอ' },
        { cn: '反驳', pinyin: 'fǎnbó', th: 'โต้แย้ง / หักล้าง' }
      ],
      tip: '"反方" (fǎnfāng) หมายถึง ฝ่ายค้าน และ "正方" (zhèngfāng) หมายถึง ฝ่ายเสนอ'
    },

    // =========================================================================
    // หมวดที่ 2: ซื้อของ-สั่งอาหาร (SHOPPING & DINING)
    // =========================================================================

    // --- ซื้อของ-สั่งอาหาร: 1. ง่าย ---
    {
      id: 'food-e1',
      categoryKey: 'food-shopping',
      category: 'ซื้อของ-สั่งอาหาร',
      level: 'easy',
      levelLabel: 'ง่าย',
      levelNum: 1,
      badgeColor: 'emerald',
      icon: '🍜',
      titleCn: '服务员，我想点菜',
      titlePinyin: 'Fúwùyuán, wǒ xiǎng diǎncài',
      titleTh: 'บริกรครับ ผมอยากสั่งอาหารครับ',
      situation: 'การขอดูเมนู สั่งอาหารจานโปรด และขอน้ำดื่มในร้านอาหาร',
      roles: {
        A: { name: '客人 (ลูกค้า)', avatar: '🙋‍♂️', label: 'ลูกค้า' },
        B: { name: '服务员 (บริกร)', avatar: '👨‍🍳', label: 'บริกร' }
      },
      lines: [
        { speaker: 'A', cn: '服务员，请给我看一下菜单。', pinyin: 'Fúwùyuán, qǐng gěi wǒ kàn yíxià càidān.', th: 'บริกรครับ ขอดูเมนูหน่อยครับ' },
        { speaker: 'B', cn: '好的，这是菜单。请问您想吃什么？', pinyin: 'Hǎo de, zhè shì càidān. Qǐngwèn nín xiǎng chī shénme?', th: 'ได้เลยครับ นี่คือเมนูครับ ไม่ทราบว่าคุณลูกค้าอยากทานอะไรครับ?' },
        { speaker: 'A', cn: '我要一份牛肉炒饭和一碗鸡蛋汤。', pinyin: 'Wǒ yào yí fèn niúròu chǎofàn hé yì wǎn jīdàntāng.', th: 'ผมขอข้าวผัดเนื้อหนึ่งจาน กับซุปไข่หนึ่งถ้วยครับ' },
        { speaker: 'B', cn: '好的。请问喝什么饮料？', pinyin: 'Hǎo de. Qǐngwèn hē shénme yǐnliào?', th: 'รับทราบครับ ดื่มเครื่องดื่มอะไรดีครับ?' },
        { speaker: 'A', cn: '请给我一杯热茶，不要加糖。', pinyin: 'Qǐng gěi wǒ yì bēi rè chá, bú yào jiā táng.', th: 'ขอชาร้อนหนึ่งแก้วครับ ไม่ต้องใส่น้ำตาลนะ' },
        { speaker: 'B', cn: '好的，请稍等，菜马上来！', pinyin: 'Hǎo de, qǐng shāoděng, cài mǎshàng lái!', th: 'ได้เลยครับ กรุณารอสักครู่ อาหารจะมาเสิร์ฟทันทีครับ!' }
      ],
      keyVocab: [
        { cn: '服务员', pinyin: 'fúwùyuán', th: 'บริกร' },
        { cn: '菜单', pinyin: 'càidān', th: 'เมนูอาหาร' },
        { cn: '炒饭', pinyin: 'chǎofàn', th: 'ข้าวผัด' },
        { cn: '稍等', pinyin: 'shāoděng', th: 'รอสักครู่' },
        { cn: '马上', pinyin: 'mǎshàng', th: 'ทันที' }
      ],
      tip: 'ข้าวผัดใช้ "一份" (หนึ่งจาน), ซุปใช้ "一碗" (หนึ่งถ้วย), ชาใช้ "一杯" (หนึ่งแก้ว)'
    },
    {
      id: 'food-e2',
      categoryKey: 'food-shopping',
      category: 'ซื้อของ-สั่งอาหาร',
      level: 'easy',
      levelLabel: 'ง่าย',
      levelNum: 1,
      badgeColor: 'emerald',
      icon: '🛍️',
      titleCn: '这个多少钱？能便宜点吗？',
      titlePinyin: 'Zhège duōshao qián? Néng piányi diǎn ma?',
      titleTh: 'อันนี้ราคาเท่าไหร่? ลดหน่อยได้ไหม?',
      situation: 'การเลือกซื้อสินค้า ถามราคา ต่อรองราคา และชำระเงิน',
      roles: {
        A: { name: '顾客 (คนซื้อ)', avatar: '👩', label: 'ผู้ซื้อ' },
        B: { name: '老板 (เจ้าของร้าน)', avatar: '👨‍💼', label: 'เจ้าของร้าน' }
      },
      lines: [
        { speaker: 'A', cn: '老板，请问这件衣服多少钱？', pinyin: 'Lǎobǎn, qǐngwèn zhè jiàn yīfu duōshao qián?', th: 'เถ้าแก่คะ เสื้อตัวนี้ราคาเท่าไหร่คะ?' },
        { speaker: 'B', cn: '这件衣服一百块。', pinyin: 'Zhè jiàn yīfu yìbǎi kuài.', th: 'เสื้อตัวนี้ 100 หยวนครับ' },
        { speaker: 'A', cn: '太贵了！能便宜一点儿吗？', pinyin: 'Tài guì le! Néng piányi yìdiǎnr ma?', th: 'แพงเกินไปแล้วค่ะ! ลดราคาให้หน่อยได้ไหมคะ?' },
        { speaker: 'B', cn: '八十块怎么样？不能再少了。', pinyin: 'Bāshí kuài zěnmeyàng? Bù néng zài shǎo le.', th: '80 หยวนเป็นอย่างไรครับ? ลดกว่านี้ไม่ได้แล้วนะ' },
        { speaker: 'A', cn: '好的，我要了。可以微信支付吗？', pinyin: 'Hǎo de, wǒ yào le. Kěyǐ Wēixìn zhīfù ma?', th: 'ตกลงค่ะ เอาตัวนี้ จ่ายผ่าน WeChat Pay ได้ไหมคะ?' },
        { speaker: 'B', cn: '当然可以，请扫这里的二维码。', pinyin: 'Dāngrán kěyǐ, qǐng sǎo zhèlǐ de èrwéimǎ.', th: 'ได้แน่นอนครับ เชิญสแกนคิวอาร์โค้ดตรงนี้เลยครับ' }
      ],
      keyVocab: [
        { cn: '多少钱', pinyin: 'duōshao qián', th: 'ราคาเท่าไหร่' },
        { cn: '便宜', pinyin: 'piányi', th: 'ถูก' },
        { cn: '贵', pinyin: 'guì', th: 'แพง' },
        { cn: '微信支付', pinyin: 'Wēixìn zhīfù', th: 'จ่ายผ่านวีแชท' },
        { cn: '二维码', pinyin: 'èrwéimǎ', th: 'คิวอาร์โค้ด' }
      ],
      tip: '"能便宜一点儿吗？" (Néng piányi yìdiǎnr ma?) คือประโยคต่อรองราคามาตรฐานที่สุดในจีน'
    },
    {
      id: 'food-e3',
      categoryKey: 'food-shopping',
      category: 'ซื้อของ-สั่งอาหาร',
      level: 'easy',
      levelLabel: 'ง่าย',
      levelNum: 1,
      badgeColor: 'emerald',
      icon: '🍎',
      titleCn: '老板，这个西瓜甜不甜？',
      titlePinyin: 'Lǎobǎn, zhège xīguā tián bu tián?',
      titleTh: 'เถ้าแก่ครับ แตงโมลูกนี้หวานไหมครับ?',
      situation: 'การเลือกซื้อผลไม้ที่ตลาด การถามความหวานและการชั่งน้ำหนัก',
      roles: {
        A: { name: '顾客 (คนซื้อ)', avatar: '👦', label: 'ผู้ซื้อ' },
        B: { name: '水果店老板 (คนขาย)', avatar: '👨‍🌾', label: 'คนขายผลไม้' }
      },
      lines: [
        { speaker: 'A', cn: '老板，请问这个西瓜甜不甜？怎么卖？', pinyin: 'Lǎobǎn, qǐngwèn zhège xīguā tián bu tián? Zěnme mài?', th: 'เถ้าแก่ครับ แตงโมลูกนี้หวานไหมครับ? ขายยังไงครับ?' },
        { speaker: 'B', cn: '放心吧，包甜！三块钱一斤，不甜不要钱！', pinyin: 'Fàngxīn ba, bāo tián! Sān kuài qián yì jīn, bù tián bú yào qián!', th: 'วางใจได้เลย รับประกันความหวาน! ชั่งละ 3 หยวน ไม่หวานไม่คิดเงิน!' },
        { speaker: 'A', cn: '那帮我挑一个熟一点的，称一下有多重。', pinyin: 'Nà bāng wǒ tiāo yí gè shú yìdiǎn de, chèng yíxià yǒu duō zhòng.', th: 'งั้นช่วยเลือกให้ผมสักลูกที่สุกกำลังดีหน่อยครับ ลองชั่งดูว่าหนักเท่าไหร่' },
        { speaker: 'B', cn: '正好八斤，一共二十四块钱。', pinyin: 'Zhènghǎo bā jīn, yígòng èrshísì kuài qián.', th: 'พอดี 8 ชั่ง รวมทั้งหมด 24 หยวนครับ' },
        { speaker: 'A', cn: '好的，扫码付给您了，谢谢！', pinyin: 'Hǎo de, sǎo mǎ fù gěi nín le, xièxie!', th: 'ครับผม สแกนคิวอาร์โค้ดจ่ายให้แล้วครับ ขอบคุณครับ!' }
      ],
      keyVocab: [
        { cn: '西瓜', pinyin: 'xīguā', th: 'แตงโม' },
        { cn: '甜', pinyin: 'tián', th: 'หวาน' },
        { cn: '怎么卖', pinyin: 'zěnme mài', th: 'ขายยังไง' },
        { cn: '斤', pinyin: 'jīn', th: 'ชั่ง (500 กรัม)' },
        { cn: '扫码', pinyin: 'sǎo mǎ', th: 'สแกนคิวอาร์โค้ด' }
      ],
      tip: 'ในจีน หน่วย "斤" (จิน) เท่ากับ 500 กรัม (ครึ่งกิโลกรัม)'
    },

    // --- ซื้อของ-สั่งอาหาร: 2. ปานกลาง ---
    {
      id: 'food-m1',
      categoryKey: 'food-shopping',
      category: 'ซื้อของ-สั่งอาหาร',
      level: 'medium',
      levelLabel: 'ปานกลาง',
      levelNum: 2,
      badgeColor: 'amber',
      icon: '🧋',
      titleCn: '我要一杯珍珠奶茶，少冰微糖',
      titlePinyin: 'Wǒ yào yì bēi zhēnzhū nǎichá, shǎo bīng wēi táng',
      titleTh: 'ฉันขอชานมไข่มุก 1 แก้ว หวานน้อยน้ำแข็งน้อย',
      situation: 'การสั่งชานมยอดฮิต การปรับระดับความหวาน ระดับน้ำแข็ง และท็อปปิ้ง',
      roles: {
        A: { name: '顾客 (ลูกค้า)', avatar: '🥤', label: 'ลูกค้า' },
        B: { name: '店员 (พนักงานร้าน)', avatar: '👩‍🍳', label: 'พนักงานร้าน' }
      },
      lines: [
        { speaker: 'B', cn: '欢迎光临！请问今天想喝点什么？', pinyin: 'Huānyíng guānglín! Qǐngwèn jīntiān xiǎng hē diǎn shénme?', th: 'ยินดีต้อนรับครับ! วันนี้รับเครื่องดื่มอะไรดีครับ?' },
        { speaker: 'A', cn: '你好，我要一杯招牌珍珠奶茶，大杯的。', pinyin: 'Nǐ hǎo, wǒ yào yì bēi zhāopai zhēnzhū nǎichá, dà bēi de.', th: 'สวัสดีครับ ผมขอชานมไข่มุกซิกเนเจอร์ 1 แก้ว ไซส์ใหญ่ครับ' },
        { speaker: 'B', cn: '甜度和冰块怎么选？我们有全糖、半糖和微糖。', pinyin: 'Tiándù hé bīngkuài zěnme xuǎn? Wǒmen yǒu quántáng, bàntáng hé wēitáng.', th: 'ความหวานและน้ำแข็งรับระดับไหนดีครับ? มีหวานปกติ (100%), หวานครึ่งเดียว (50%) และหวานน้อย (30%) ครับ' },
        { speaker: 'A', cn: '微糖，三分甜就好。冰块要少冰。', pinyin: 'Wēi táng, sān fēn tián jiù hǎo. Bīngkuài yào shǎo bīng.', th: 'หวานน้อยครับ เอาแค่ 30% พอ ส่วนน้ำแข็งขอน้ำแข็งน้อยครับ' },
        { speaker: 'B', cn: '好的，需要加布丁或者椰果吗？', pinyin: 'Hǎo de, xūyào jiā bùdīng huòzhě yēguǒ ma?', th: 'รับทราบครับ ต้องการเพิ่มพุดดิ้งหรือวุ้นมะพร้าวเพิ่มไหมครับ?' },
        { speaker: 'A', cn: '不用了，打包带走，谢谢！', pinyin: 'Bú yòng le, dǎbāo dài zǒu, xièxie!', th: 'ไม่เพิ่มแล้วครับ ใส่ถุงกลับบ้านครับ ขอบคุณครับ!' }
      ],
      keyVocab: [
        { cn: '招牌', pinyin: 'zhāopai', th: 'เมนูซิกเนเจอร์' },
        { cn: '微糖', pinyin: 'wēitáng', th: 'หวานน้อย (30%)' },
        { cn: '少冰', pinyin: 'shǎobīng', th: 'น้ำแข็งน้อย' },
        { cn: '打包', pinyin: 'dǎbāo', th: 'ห่อกลับบ้าน' }
      ],
      tip: 'ระดับความหวานชานมจีน: 全糖 (100%), 半糖 (50%), 微糖 (30%), 无糖 (0%)'
    },
    {
      id: 'food-m2',
      categoryKey: 'food-shopping',
      category: 'ซื้อของ-สั่งอาหาร',
      level: 'medium',
      levelLabel: 'ปานกลาง',
      levelNum: 2,
      badgeColor: 'amber',
      icon: '👕',
      titleCn: '我想试穿这件外套，有中号吗？',
      titlePinyin: 'Wǒ xiǎng shìchuān zhè jiàn wàitào, yǒu zhōnghào ma?',
      titleTh: 'ฉันอยากลองสวมเสื้อแจ็กเก็ตตัวนี้ มีไซส์ M ไหมคะ?',
      situation: 'การเลือกซื้อเสื้อผ้าในห้าง การถามหาไซส์ การลองในห้องลองเสื้อ และถามหาส่วนลด',
      roles: {
        A: { name: '顾客 (ลูกค้า)', avatar: '👩', label: 'ลูกค้า' },
        B: { name: '导购员 (พนักงานขาย)', avatar: '💁‍♀️', label: 'พนักงานขายเสื้อผ้า' }
      },
      lines: [
        { speaker: 'A', cn: '你好，我觉得衣架上这件蓝色外套很好看，请问有中号吗？', pinyin: 'Nǐ hǎo, wǒ juéde yījià shang zhè jiàn lánsè wàitào hěn hǎokàn, qǐngwèn yǒu zhōnghào ma?', th: 'สวัสดีค่ะ เสื้อแจ็กเก็ตสีน้ำเงินตัวนี้สวยมาก ไม่ทราบว่ามีไซส์ M ไหมคะ?' },
        { speaker: 'B', cn: '有的，这是中号（M码）。试衣间在左手边，您可以试穿看看合不合身。', pinyin: 'Yǒu de, zhè shì zhōnghào (M mǎ). Shìyījiān zài zuǒshǒubiān, nín kěyǐ shìchuān kànkan hé bu héshēn.', th: 'มีค่ะ นี่คือไซส์ M ห้องลองเสื้ออยู่ทางซ้ายมือ ลองสวมดูได้เลยค่ะ' },
        { speaker: 'A', cn: '大小挺合适的，款式我也很喜欢。今天店里有什么折扣活动吗？', pinyin: 'Dàxiǎo tǐng héshì de, kuǎnshì wǒ yě hěn xǐhuan. Jīntiān diàn lǐ yǒu shénme zhékòu huódòng ma?', th: 'ขนาดพอดีเลยค่ะ แบบเสื้อก็ชอบมาก วันนี้มีโปรโมชันส่วนลดอะไรบ้างไหมคะ?' },
        { speaker: 'B', cn: '现在全场秋装打八折，如果您加入我们的会员，还可以再减二十块。', pinyin: 'Xiànzài quán chǎng qiūzhuāng dǎ bā zhé, rúguǒ nín jiārù wǒmen de huìyuán, hái kěyǐ zài jiǎn èrshí kuài.', th: 'ตอนนี้ชุดฤดูใบไม้ร่วงลด 20% (คิด 80%) สมัครสมาชิกจะลดเพิ่มได้อีก 20 หยวนค่ะ' },
        { speaker: 'A', cn: '太划算了，那请帮我包起来吧！', pinyin: 'Tài huásuàn le, nà qǐng bāng wǒ bāo qǐlai ba!', th: 'คุ้มค่ามากเลยค่ะ ช่วยห่อให้ฉันได้เลยค่ะ!' }
      ],
      keyVocab: [
        { cn: '试衣间', pinyin: 'shìyījiān', th: 'ห้องลองเสื้อ' },
        { cn: '打八折', pinyin: 'dǎ bā zhé', th: 'ลดราคาเหลือ 80% (ลด 20%)' },
        { cn: '合身', pinyin: 'héshēn', th: 'พอดีตัว' },
        { cn: '划算', pinyin: 'huásuàn', th: 'คุ้มค่า' }
      ],
      tip: '"打八折" หมายถึง จ่าย 80% (ลดไป 20%)'
    },

    // --- ซื้อของ-สั่งอาหาร: 3. ยาก ---
    {
      id: 'food-h1',
      categoryKey: 'food-shopping',
      category: 'ซื้อของ-สั่งอาหาร',
      level: 'hard',
      levelLabel: 'ยาก',
      levelNum: 3,
      badgeColor: 'rose',
      icon: '🍲',
      titleCn: '宴请宾客的点菜艺术与饮食文化',
      titlePinyin: 'Yànqǐng bīnkè de diǎncài yìshù yǔ yǐnshí wénhuà',
      titleTh: 'ศิลปะการสั่งอาหารจัดเลี้ยงแขกผู้มีเกียรติและวัฒนธรรมการรับประทานอาหารจีน',
      situation: 'การเป็นเจ้าภาพจัดเลี้ยงโต๊ะจีน การจัดสมดุลเมนูคาวหวาน เย็นร้อน และการเคารพรสนิยมของแขก',
      roles: {
        A: { name: '东道主 (เจ้าภาพ)', avatar: '👔', label: 'เจ้าภาพจัดเลี้ยง' },
        B: { name: '餐厅经理 (ผู้จัดการร้าน)', avatar: '👩‍🍳', label: 'ผู้จัดการห้องอาหาร' }
      },
      lines: [
        { speaker: 'A', cn: '王经理，今晚我们包厢宴请几位重要的外宾，请您按照“荤素搭配、冷热均衡”的原则帮我们把关菜单。', pinyin: 'Wáng jīnglǐ, jīnwǎn wǒmen bāoxiāng yànqǐng jǐ wèi zhòngyào de wàibīn, qǐng nín ànzhào "hūn sù dāpèi, lěng rè jūnhéng" de yuánzé bāng wǒmen bǎguān càidān.', th: 'ผู้จัดการหวังครับ คืนนี้ห้องรับรองจะจัดเลี้ยงแขกต่างชาติคนสำคัญ ช่วยคัดสรรเมนูตามหลัก "สมดุลเนื้อกับผัก ผสานจานเย็นและจานร้อน" ให้หน่อยครับ' },
        { speaker: 'B', cn: '没问题。热菜部分我们推荐本店招牌的清蒸东星斑与北京烤鸭，既凸显中华传统风味，口感又老少皆宜。', pinyin: 'Méi wèntí. Rècài bùfen wǒmen tuījiàn běn diàn zhāopai de qīngzhēng dōngxīngbān yǔ Běijīng kǎoyā, jì tūxiǎn Zhōnghuá chuántǒng fēngwèi, kǒugǎn yòu lǎoshào jiē yí.', th: 'ได้เลยครับ ในส่วนจานร้อนขอแนะนำ ปลากะพงแดงนึ่งซีอิ๊วสูตรเด็ด และเป็ดปักกิ่ง ชูเอกลักษณ์วัฒนธรรมจีนดั้งเดิม และถูกปากแขกทุกวัยครับ' },
        { speaker: 'A', cn: '很好，其中有两位贵宾偏爱清淡且对海鲜轻微过敏，请后厨务必严控烹饪用油并做好防过敏隔离。', pinyin: 'Hěn hǎo, qízhōng yǒu liǎng wèi guìbīn piān’ài qīngdàn qiě duì hǎixiān qīngwēi guòmǐn, qǐng hòuchú wùbì yánkòng pēngrèn yòng yóu bìng zuò hǎo fáng guòmǐn gélí.', th: 'ดีมากครับ ในกลุ่มมีแขกสองท่านชอบรสชาติไม่จัด และแพ้อาหารทะเลเล็กน้อย รบกวนกำชับครัวคุมปริมาณน้ำมันและระวังสารก่อภูมิแพ้ด้วยครับ' },
        { speaker: 'B', cn: '请您放心，我们会特别标注“免海鲜过敏源”，并单独准备两道精致的素斋菌菇料理。', pinyin: 'Qǐng nín fàngxīn, wǒmen huì tèbié biāozhù "miǎn hǎixiān guòmǐnyuán", bìng dāndú zhǔnbèi liǎng dào jīngzhì de sùzhāi jùngū liàolǐ.', th: 'วางใจได้เลยครับ ทางเราจะทำเครื่องหมายเน้นย้ำ และจัดเตรียมเมนูเห็ดมังสวิรัติสุดประณีตเสิร์ฟแยกให้โดยเฉพาะครับ' },
        { speaker: 'A', cn: '安排得非常周到，席间佐餐请备好上等的西湖龙井茶。', pinyin: 'Ānpái de fēicháng zhōudào, xíjiān zuǒcān qǐng bèi hǎo shàngděng de Xīhú Lóngjǐng chá.', th: 'จัดสรรได้อย่างรอบคอบมากครับ สำหรับเครื่องดื่มระหว่างมื้ออาหาร รบกวนเตรียมชาหลงจิ่งชั้นเลิศจากทะเลสาบซีหูด้วยนะครับ' }
      ],
      keyVocab: [
        { cn: '包厢', pinyin: 'bāoxiāng', th: 'ห้องรับรองส่วนตัว (VIP)' },
        { cn: '荤素搭配', pinyin: 'hūn sù dāpèi', th: 'สมดุลเนื้อกับผัก' },
        { cn: '老少皆宜', pinyin: 'lǎoshào jiē yí', th: 'เหมาะสำหรับทุกเพศทุกวัย' },
        { cn: '过敏', pinyin: 'guòmǐn', th: 'แพ้ (อาหาร)' },
        { cn: '周到', pinyin: 'zhōudào', th: 'รอบคอบถี่ถ้วน' }
      ],
      tip: '"荤素搭配" (hūn sù dāpèi) เป็นหัวใจสำคัญของวัฒนธรรมอาหารจีน'
    },

    // =========================================================================
    // หมวดที่ 3: เดินทาง (TRANSPORTATION & TRAVEL)
    // =========================================================================

    // --- เดินทาง: 1. ง่าย ---
    {
      id: 'travel-e1',
      categoryKey: 'travel',
      category: 'เดินทาง',
      level: 'easy',
      levelLabel: 'ง่าย',
      levelNum: 1,
      badgeColor: 'emerald',
      icon: '🗺️',
      titleCn: '请问地铁站在哪儿？',
      titlePinyin: 'Qǐngwèn dìtiězhàn zài nǎr?',
      titleTh: 'ขอถามหน่อย สถานีรถไฟใต้ดินอยู่ที่ไหน?',
      situation: 'การถามทางคนเดินถนน การบอกทิศทาง เดินตรงไป เลี้ยวซ้าย เลี้ยวขวา',
      roles: {
        A: { name: '路人甲 (คนถามทาง)', avatar: '🚶‍♂️', label: 'ผู้ถามทาง' },
        B: { name: '热心市民 (คนตอบ)', avatar: '👮‍♂️', label: 'พลเมืองดี' }
      },
      lines: [
        { speaker: 'A', cn: '你好，请问附近的地铁站在哪儿？', pinyin: 'Nǐ hǎo, qǐngwèn fùjìn de dìtiězhàn zài nǎr?', th: 'สวัสดีครับ ขอถามหน่อยสถานีรถไฟใต้ดินแถวนี้อยู่ตรงไหนครับ?' },
        { speaker: 'B', cn: '地铁站离这儿不远。你看前面那个超市了吗？', pinyin: 'Dìtiězhàn lí zhèr bù yuǎn. Nǐ kàn qiánmiàn nàge chāoshì le ma?', th: 'สถานีรถไฟใต้ดินอยู่ไม่ไกลจากตรงนี้ คุณเห็นซูเปอร์มาร์เก็ตข้างหน้านั่นไหมครับ?' },
        { speaker: 'A', cn: '看到了，在那家超市旁边吗？', pinyin: 'Kàndào le, zài nà jiā chāoshì pángbiān ma?', th: 'เห็นแล้วครับ อยู่ข้างๆ ซูเปอร์มาร์เก็ตแห่งนั้นใช่ไหมครับ?' },
        { speaker: 'B', cn: '对，一直往前走，到了超市向右拐就到了。', pinyin: 'Duì, yìzhí wǎng qián zǒu, dào le chāoshì xiàng yòu guǎi jiù dào le.', th: 'ใช่แล้วครับ เดินตรงไปเรื่อยๆ พอถึงซูเปอร์มาร์เก็ตแล้วเลี้ยวขวา ก็ถึงแล้วครับ' },
        { speaker: 'A', cn: '太感谢你了！', pinyin: 'Tài gǎnxiè nǐ le!', th: 'ขอบคุณคุณมากๆ เลยครับ!' },
        { speaker: 'B', cn: '不客气，慢走！', pinyin: 'Bú kèqi, màn zǒu!', th: 'ยินดีครับ เดินทางปลอดภัยครับ!' }
      ],
      keyVocab: [
        { cn: '地铁站', pinyin: 'dìtiězhàn', th: 'สถานีรถไฟใต้ดิน' },
        { cn: '一直往前走', pinyin: 'yìzhí wǎng qián zǒu', th: 'เดินตรงไปเรื่อยๆ' },
        { cn: '向右拐', pinyin: 'xiàng yòu guǎi', th: 'เลี้ยวขวา' },
        { cn: '向左拐', pinyin: 'xiàng zuǒ guǎi', th: 'เลี้ยวซ้าย' }
      ],
      tip: '"向右拐" (xiàng yòu guǎi) แปลว่า เลี้ยวขวา ส่วน "向左拐" (xiàng zuǒ guǎi) แปลว่า เลี้ยวซ้าย'
    },
    {
      id: 'travel-e2',
      categoryKey: 'travel',
      category: 'เดินทาง',
      level: 'easy',
      levelLabel: 'ง่าย',
      levelNum: 1,
      badgeColor: 'emerald',
      icon: '🚌',
      titleCn: '请问这趟公交车去天安门吗？',
      titlePinyin: 'Qǐngwèn zhè tàng gōngjiāochē qù Tiān’ānmén ma?',
      titleTh: 'ขอถามหน่อย รถเมล์สายนี้ไปเทียนอันเหมินไหมครับ?',
      situation: 'การขึ้นรถประจำทาง การเช็คสายรถเมล์ และการสแกนโค้ดจ่ายค่าตั๋ว',
      roles: {
        A: { name: '乘客 (ผู้โดยสาร)', avatar: '🎒', label: 'ผู้โดยสาร' },
        B: { name: '售票员/司机 (คนขับ)', avatar: '👨‍✈️', label: 'คนขับรถเมล์' }
      },
      lines: [
        { speaker: 'A', cn: '师傅，请问这趟1路公交车去天安门广场吗？', pinyin: 'Shīfu, qǐngwèn zhè tàng yí lù gōngjiāochē qù Tiān’ānmén guǎngchǎng ma?', th: 'คนขับครับ รถเมล์สาย 1 คันนี้ไปจัตุรัสเทียนอันเหมินไหมครับ?' },
        { speaker: 'B', cn: '去的，上车吧！请刷交通卡或者扫手机乘车码。', pinyin: 'Qù de, shàng chē ba! Qǐng shuā jiāotōng kǎ huòzhě sǎo shǒujī chéngchēmǎ.', th: 'ไปครับ ขึ้นรถได้เลย! กรุณาแตะบัตรหรือสแกนโค้ดขึ้นรถในมือถือครับ' },
        { speaker: 'A', cn: '好的。请问坐多少站能到？', pinyin: 'Hǎo de. Qǐngwèn zuò duōshao zhàn néng dào?', th: 'ครับผม ขอถามหน่อยนั่งไปกี่สถานี/ป้ายถึงครับ?' },
        { speaker: 'B', cn: '大概坐五站，车上有语音报站，注意听广播。', pinyin: 'Dàgài zuò wǔ zhàn, chē shang yǒu yǔyīn bàozhàn, zhùyì tīng guǎngbō.', th: 'ประมาณ 5 ป้ายครับ บนรถมีเสียงประกาศชื่อป้าย คอยฟังเสียงตามสายนะครับ' },
        { speaker: 'A', cn: '明白了，非常感谢您！', pinyin: 'Míngbai le, fēicháng gǎnxiè nín!', th: 'เข้าใจแล้วครับ ขอบคุณมากๆ ครับ!' }
      ],
      keyVocab: [
        { cn: '公交车', pinyin: 'gōngjiāochē', th: 'รถเมล์' },
        { cn: '乘车码', pinyin: 'chéngchēmǎ', th: 'คิวอาร์โค้ดขึ้นรถ' },
        { cn: '站', pinyin: 'zhàn', th: 'ป้ายรถเมล์ / สถานี' },
        { cn: '报站', pinyin: 'bàozhàn', th: 'ประกาศชื่อป้าย' }
      ],
      tip: 'ในจีนสามารถเปิด "乘车码" (Chéngchēmǎ) ในแอป Alipay หรือ WeChat แล้วแตะสแกนขึ้นรถได้ทันที'
    },
    {
      id: 'travel-e3',
      categoryKey: 'travel',
      category: 'เดินทาง',
      level: 'easy',
      levelLabel: 'ง่าย',
      levelNum: 1,
      badgeColor: 'emerald',
      icon: '🚇',
      titleCn: '我在自动售票机买地铁票',
      titlePinyin: 'Wǒ zài zìdòng shòupiàojī mǎi dìtiěpiào',
      titleTh: 'ฉันซื้อตั๋วรถไฟใต้ดินที่ตู้ขายตั๋วอัตโนมัติ',
      situation: 'การใช้ตู้จำหน่ายตั๋วรถไฟใต้ดิน การเลือกสถานีปลายทาง และการชำระเงิน',
      roles: {
        A: { name: '游客 (นักท่องเที่ยว)', avatar: '🚶‍♂️', label: 'นักท่องเที่ยว' },
        B: { name: '志愿者 (อาสาสมัครสถานี)', avatar: '🙋‍♀️', label: 'อาสาสมัคร' }
      },
      lines: [
        { speaker: 'A', cn: '你好，我想去北京动物园，这个售票机怎么操作？', pinyin: 'Nǐ hǎo, wǒ xiǎng qù Běijīng dòngwùyuán, zhège shòupiàojī zěnme cāozuò?', th: 'สวัสดีครับ ผมอยากไปสวนสัตว์ปักกิ่ง ตู้ขายตั๋วตู้นี้กดยังไงครับ?' },
        { speaker: 'B', cn: '您先在屏幕上点击4号线，然后找到“动物园”站。', pinyin: 'Nín xiān zài píngmù shang diǎnjī sì hào xiàn, ránhòu zhǎodào "Dòngwùyuán" zhàn.', th: 'คุณกดเลือกสาย 4 บนหน้าจอก่อนค่ะ จากนั้นกดเลือกสถานี "ต้งอู้หยวน" (สวนสัตว์)' },
        { speaker: 'A', cn: '找到了！票价是四块钱，可以投纸币吗？', pinyin: 'Zhǎodào le! Piàojià shì sì kuài qián, kěyǐ tóu zhǐbì ma?', th: 'เจอแล้วครับ! ค่าตั๋ว 4 หยวน ใส่ธนบัตรได้ไหมครับ?' },
        { speaker: 'B', cn: '可以投五元或者十元纸币，也可以直接用手机扫码支付。', pinyin: 'Kěyǐ tóu wǔ yuán huòzhě shí yuán zhǐbì, yě kěyǐ zhíjiē yòng shǒujī sǎo mǎ zhīfù.', th: 'ใส่ธนบัตร 5 หรือ 10 หยวนได้ค่ะ หรือสแกนจ่ายผ่านมือถือโดยตรงก็ได้' },
        { speaker: 'A', cn: '太方便了，出票了，谢谢你的帮助！', pinyin: 'Tài fāngbiàn le, chū piào le, xièxie nǐ de bāngzhù!', th: 'สะดวกมาก ตั๋วออกมาแล้ว ขอบคุณที่ช่วยเหลือนะครับ!' }
      ],
      keyVocab: [
        { cn: '售票机', pinyin: 'shòupiàojī', th: 'ตู้ขายตั๋วอัตโนมัติ' },
        { cn: '动物园', pinyin: 'dòngwùyuán', th: 'สวนสัตว์' },
        { cn: '纸币', pinyin: 'zhǐbì', th: 'ธนบัตร' },
        { cn: '方便', pinyin: 'fāngbiàn', th: 'สะดวกสบาย' }
      ],
      tip: '"4号线" หมายถึง รถไฟใต้ดินสาย 4 (Line 4)'
    },

    // --- เดินทาง: 2. ปานกลาง ---
    {
      id: 'travel-m1',
      categoryKey: 'travel',
      category: 'เดินทาง',
      level: 'medium',
      levelLabel: 'ปานกลาง',
      levelNum: 2,
      badgeColor: 'amber',
      icon: '🚕',
      titleCn: '师傅，我去首都机场',
      titlePinyin: 'Shīfu, wǒ qù Shǒudū Jīchǎng',
      titleTh: 'คนขับครับ ผมจะไปสนามบินโส่วตูครับ',
      situation: 'การขึ้นรถแท็กซี่ บอกจุดหมาย ขอให้เปิดมิเตอร์ และบอกว่ามีเที่ยวบินรีบด่วน',
      roles: {
        A: { name: '乘客 (ผู้โดยสาร)', avatar: '🧳', label: 'ผู้โดยสาร' },
        B: { name: '司机师傅 (คนขับ)', avatar: '👨‍✈️', label: 'คนขับแท็กซี่' }
      },
      lines: [
        { speaker: 'A', cn: '师傅，您好！我去首都机场三号航站楼，请打表。', pinyin: 'Shīfu, nín hǎo! Wǒ qù Shǒudū Jīchǎng sānhào hángzhànlóu, qǐng dǎbiǎo.', th: 'คนขับครับ สวัสดีครับ! ผมจะไปเทอร์มินอล 3 สนามบินโส่วตู รบกวนกดมิเตอร์ด้วยครับ' },
        { speaker: 'B', cn: '好的，请系好安全带。您几点的飞机？', pinyin: 'Hǎo de, qǐng jìhǎo ānquándài. Nín jǐ diǎn de fēijī?', th: 'ได้ครับ รบกวนคาดเข็มขัดนิรภัยด้วยครับ มีเที่ยวบินกี่โมงครับ?' },
        { speaker: 'A', cn: '下午四点半的，现在有点赶时间，能走高速公路吗？', pinyin: 'Xiàwǔ sì diǎn bàn de, xiànzài yǒudiǎn gǎn shíjiān, néng zǒu gāosù gōnglù ma?', th: 'เที่ยวบิน 4 โมงครึ่งครับ ตอนนี้ค่อนข้างรีบ วิ่งขึ้นทางด่วนได้ไหมครับ?' },
        { speaker: 'B', cn: '没问题，走机场高速大概四十分钟能到，过路费要加在车费里。', pinyin: 'Méi wèntí, zǒu jīchǎng gāosù dàgài sìshí fēnzhōng néng dào, guòlùfèi yào jiā zài chēfèi lǐ.', th: 'ไม่มีปัญหาครับ วิ่งทางด่วนประมาณ 40 นาทีถึง ค่าผ่านทางจะรวมในค่าโดยสารนะครับ' },
        { speaker: 'A', cn: '可以的。到了之后请给我打一张发票。', pinyin: 'Kěyǐ de. Dào le zhīhòu qǐng gěi wǒ dǎ yì zhāng fāpiào.', th: 'ได้เลยครับ พอถึงแล้วรบกวนพิมพ์ใบเสร็จให้ผมหนึ่งใบด้วยนะครับ' },
        { speaker: 'B', cn: '放心吧，没问题！', pinyin: 'Fàngxīn ba, méi wèntí!', th: 'วางใจได้เลยครับ ไม่มีปัญหา!' }
      ],
      keyVocab: [
        { cn: '师傅', pinyin: 'shīfu', th: 'พี่คนขับ' },
        { cn: '打表', pinyin: 'dǎbiǎo', th: 'กดมิเตอร์' },
        { cn: '航站楼', pinyin: 'hángzhànlóu', th: 'อาคารผู้โดยสาร (Terminal)' },
        { cn: '赶时间', pinyin: 'gǎn shíjiān', th: 'กำลังรีบ' },
        { cn: '发票', pinyin: 'fāpiào', th: 'ใบเสร็จรับเงิน' }
      ],
      tip: 'ถ้าต้องการใบเสร็จรับเงินให้พูดว่า "请开发票" หรือ "打一张发票"'
    },
    {
      id: 'travel-m2',
      categoryKey: 'travel',
      category: 'เดินทาง',
      level: 'medium',
      levelLabel: 'ปานกลาง',
      levelNum: 2,
      badgeColor: 'amber',
      icon: '🚄',
      titleCn: '乘坐高铁去上海，刷身份证进站',
      titlePinyin: 'Chéngzuò gāotiě qù Shànghǎi, shuā shēnfènzhèng jìnzhàn',
      titleTh: 'นั่งรถไฟความเร็วสูงไปเซี่ยงไฮ้ แตะบัตรประชาชนเข้าชานชาลา',
      situation: 'การขึ้นรถไฟความเร็วสูง (CRH) ที่สถานีรถไฟ การตรวจตั๋วผ่านเครื่องอัตโนมัติ และการหาตู้โดยสาร',
      roles: {
        A: { name: '旅客 (ผู้เดินทาง)', avatar: '🧳', label: 'ผู้โดยสาร' },
        B: { name: '站台工作人员 (เจ้าหน้าที่)', avatar: '👨‍✈️', label: 'พนักงานสถานีรถไฟ' }
      },
      lines: [
        { speaker: 'A', cn: '您好，我坐G1次列车去上海虹桥，请问在哪个检票口检票？', pinyin: 'Nín hǎo, wǒ zuò G1 cì lièchē qù Shànghǎi Hóngqiáo, qǐngwèn zài nǎge jiǎnpiàokǒu jiǎnpiào?', th: 'สวัสดีครับ ผมโดยสารขบวน G1 ไปเซี่ยงไฮ้หงเฉียว ไม่ทราบว่าตรวจตั๋วที่ช่องไหนครับ?' },
        { speaker: 'B', cn: '请看上方的大屏幕，G1次列车在12B检票口，列车已经开始检票了。', pinyin: 'Qǐng kàn shàngfāng de dà píngmù, G1 cì lièchē zài shí’èr B jiǎnpiàokǒu, lièchē yǐjīng kāishǐ jiǎnpiào le.', th: 'ดูที่จอด้านบนได้เลยครับ ขบวน G1 อยู่ช่องตรวจ 12B ตอนนี้เริ่มเปิดตรวจตั๋วแล้วครับ' },
        { speaker: 'A', cn: '我是网上买的电子票，直接刷护照原件就可以进去吗？', pinyin: 'Wǒ shì wǎngshang mǎi de diànzǐ piào, zhíjiē shuā hùzhào yuánjiàn jiù kěyǐ jìnqù ma?', th: 'ผมซื้อตั๋วอิเล็กทรอนิกส์ทางเน็ต ใช้แตะพาสปอร์ตตัวจริงเดินผ่านเข้าไปได้เลยไหมครับ?' },
        { speaker: 'B', cn: '外籍旅客走旁边的人工通道，工作人员刷一下护照核验就能通行。', pinyin: 'Wàijí lǚkè zǒu pángbiān de réngōng tōngdào, gōngzuò rényuán shuā yíxià hùzhào héyàn jiù néng tōngxíng.', th: 'ผู้โดยสารต่างชาติให้เดินเข้าช่องเจ้าหน้าที่ตรงข้างๆ ครับ สแกนพาสปอร์ตยืนยันแล้วผ่านได้เลย' },
        { speaker: 'A', cn: '太快了！请问我的5号车厢在列车前面还是后面？', pinyin: 'Tài kuài le! Qǐngwèn wǒ de wǔ hào chēxiāng zài lièchē qiánmiàn háishì hòumiàn?', th: 'รวดเร็วมากครับ! ไม่ทราบว่าตู้ที่ 5 ของผมอยู่ช่วงหน้าหรือช่วงท้ายขบวนครับ?' },
        { speaker: 'B', cn: '在列车中部，下电梯后跟着地面的绿色地标指引走即可。', pinyin: 'Zài lièchē zhōngbù, xià diàntī hòu gēnzhe dìmiàn de lǜsè dìbiāo zhǐyǐn zǒu jíkě.', th: 'อยู่ช่วงกลางขบวนครับ ลงบันไดเลื่อนแล้วเดินตามสัญลักษณ์สีเขียวบนพื้นชานชาลาได้เลยครับ' }
      ],
      keyVocab: [
        { cn: '高铁', pinyin: 'gāotiě', th: 'รถไฟความเร็วสูง' },
        { cn: '检票口', pinyin: 'jiǎnpiàokǒu', th: 'ช่องตรวจตั๋ว' },
        { cn: '人工通道', pinyin: 'réngōng tōngdào', th: 'ช่องบริการเจ้าหน้าที่' },
        { cn: '车厢', pinyin: 'chēxiāng', th: 'ตู้โดยสารรถไฟ' }
      ],
      tip: 'รถไฟความเร็วสูงจีนรหัส "G" (Gāotiě) วิ่งด้วยความเร็วสูงสุด 350 กม./ชม.'
    },

    // --- เดินทาง: 3. ยาก ---
    {
      id: 'travel-h1',
      categoryKey: 'travel',
      category: 'เดินทาง',
      level: 'hard',
      levelLabel: 'ยาก',
      levelNum: 3,
      badgeColor: 'rose',
      icon: '🏔️',
      titleCn: '古镇生态民俗深度游的行程规划',
      titlePinyin: 'Gǔzhèn shēngtài mínsú shēndù yóu de xíngchéng guīhuà',
      titleTh: 'การวางแผนทริปท่องเที่ยวเชิงอนุรักษ์วิถีชีวิตและวัฒนธรรมพื้นบ้านในเมืองโบราณ',
      situation: 'การปรึกษาบริษัทนำเที่ยวเพื่อออกแบบทริปเชิงลึก สัมผัสวิถีชีวิตท้องถิ่น และหลีกเลี่ยงจุดที่คนแออัด',
      roles: {
        A: { name: '旅行规划师 (นักวางแผนท่องเที่ยว)', avatar: '🗺️', label: 'ผู้เชี่ยวชาญการท่องเที่ยว' },
        B: { name: '深度游爱好者 (นักเดินทาง)', avatar: '📷', label: 'นักเดินทาง' }
      },
      lines: [
        { speaker: 'B', cn: '王老师，我们这次计划去云南进行为期一周的深度自驾游，希望避开千篇一律的商业化古镇。', pinyin: 'Wáng lǎoshī, wǒmen zhè cì jìhuà qù Yúnnán jìnxíng wéiqī yì zhōu de shēndù zìjià yóu, xīwàng bìkāi qiānpiānyílǜ de shāngyèhuà gǔzhèn.', th: 'อาจารย์หวังครับ ทริปนี้พวกเราวางแผนไปขับรถเที่ยวเจาะลึกที่ยูนนาน 1 สัปดาห์ อยากเลี่ยงเมืองโบราณเชิงพาณิชย์ที่รูปแบบซ้ำซากครับ' },
        { speaker: 'A', cn: '非常赞同您的理念。我建议把核心行程放在沙溪古镇和诺邓村，那里完整保留了茶马古道的历史风貌。', pinyin: 'Fēicháng zàntóng nín de lǐniàn. Wǒ jiànyì bǎ héxīn xíngchéng fàng zài Shāxī gǔzhèn hé Nuòdèng cūn, nàlǐ wánzhěng bǎoliú le Chámǎ Gǔdào de lìshǐ fēngmào.', th: 'เห็นด้วยเป็นอย่างยิ่งครับ ขอเสนอให้จัดเส้นทางหลักไว้ที่เมืองโบราณซาซีและหมู่บ้านนั่วเติ้ง ซึ่งอนุรักษ์ประวัติศาสตร์เส้นทางสายใบชาและม้าไว้อย่างสมบูรณ์' },
        { speaker: 'B', cn: '太棒了！那住宿和当地民俗体验方面，有什么特别的推荐吗？', pinyin: 'Tài bàng le! Nà zhùsù hé dāngdì mínsú tǐyàn fāngmiàn, yǒu shénme tèbié de tuījiàn ma?', th: 'ยอดเยี่ยมมากครับ! แล้วในแง่ของที่พักและการสัมผัสวัฒนธรรมพื้นถิ่น มีข้อแนะนำเป็นพิเศษไหมครับ?' },
        { speaker: 'A', cn: '您可以入住由白族传统院落改建的精品民宿，清晨跟随非物质文化遗产传承人体验扎染工艺。', pinyin: 'Nín kěyǐ rùzhù yóu Báizú chuántǒng yuànluò gǎijiàn de jīngpǐn mínsù, qīngchén gēnsuí fēi wùzhì wénhuà yíchǎn chuánchéngrén tǐyàn zārǎn gōngyì.', th: 'ท่านสามารถเข้าพักในโฮมสเตย์เรือนคอร์ตยาร์ดดั้งเดิมของชนชาติไป๋ ยามเช้าได้เรียนรู้การย้อมผ้ามัดย้อมกับผู้สืบทอดมรดกภูมิปัญญาทางวัฒนธรรมครับ' },
        { speaker: 'B', cn: '这种沉浸式的文化寻根之旅正是我梦寐以求的，请立刻帮我们落实具体路书！', pinyin: 'Zhè zhǒng chénjìnshì de wénhuà xúngēn zhī lǚ zhèng shì wǒ mèngmèiyǐqiú de, qǐng lìkè bāng wǒmen luòshí jùtǐ lùshū!', th: 'การเดินทางซึมซับแก่นแท้ทางวัฒนธรรมแบบนี้แหละคือสิ่งที่ผมใฝ่ฝัน รบกวนช่วยสรุปแผนที่การเดินทางให้ได้เลยครับ!' }
      ],
      keyVocab: [
        { cn: '深度游', pinyin: 'shēndù yóu', th: 'การท่องเที่ยวเชิงลึก' },
        { cn: '茶马古道', pinyin: 'Chámǎ Gǔdào', th: 'เส้นทางสายใบชาและม้าโบราณ' },
        { cn: '非物质文化遗产', pinyin: 'fēi wùzhì wénhuà yíchǎn', th: 'มรดกภูมิปัญญาทางวัฒนธรรม' },
        { cn: '梦寐以求', pinyin: 'mèngmèiyǐqiú', th: 'สิ่งที่เฝ้าใฝ่ฝันหา' }
      ],
      tip: '"茶马古道" (Chámǎ Gǔdào) เป็นเส้นทางค้าขายโบราณทางตะวันตกเฉียงใต้ของจีน'
    },

    // =========================================================================
    // หมวดที่ 4: ในที่ทำงาน (WORKPLACE & CAREERS)
    // =========================================================================

    // --- ในที่ทำงาน: 1. ง่าย ---
    {
      id: 'work-e1',
      categoryKey: 'workplace',
      category: 'ในที่ทำงาน',
      level: 'easy',
      levelLabel: 'ง่าย',
      levelNum: 1,
      badgeColor: 'emerald',
      icon: '💼',
      titleCn: '大家好，我是今天入职的新员工',
      titlePinyin: 'Dàjiā hǎo, wǒ shì jīntiān rùzhí de xīn yuángōng',
      titleTh: 'สวัสดีทุกคนครับ ผมเป็นพนักงานใหม่ที่เริ่มงานวันนี้ครับ',
      situation: 'การแนะนำตัวในวันแรกที่เริ่มทำงาน และการฝากเนื้อฝากตัวกับเพื่อนร่วมงาน',
      roles: {
        A: { name: '小张 (เสี่ยวจาง)', avatar: '🧑‍💼', label: 'พนักงานใหม่' },
        B: { name: '王主管 (หัวหน้าหวัง)', avatar: '👨‍💼', label: 'หัวหน้าแผนก' }
      },
      lines: [
        { speaker: 'B', cn: '各位同事，请停一下手头的工作，给大家介绍一位新伙伴。', pinyin: 'Gèwèi tóngshì, qǐng tíng yíxià shǒutóu de gōngzuò, gěi dàjiā jièshào yí wèi xīn huǒbàn.', th: 'เพื่อนร่วมงานทุกคนครับ รบกวนหยุดงานในมือสักครู่ ขอแนะนำเพื่อนร่วมงานใหม่ให้รู้จักครับ' },
        { speaker: 'A', cn: '大家好！我叫张伟，今天第一天入职市场部，请大家多多关照！', pinyin: 'Dàjiā hǎo! Wǒ jiào Zhāng Wěi, jīntiān dì-yī tiān rùzhí shìchǎngbù, qǐng dàjiā duōduō guānzhào!', th: 'สวัสดีทุกคนครับ! ผมชื่อจางเหว่ย วันนี้เริ่มงานวันแรกในแผนกการตลาด ขอฝากเนื้อฝากตัวด้วยนะครับ!' },
        { speaker: 'B', cn: '欢迎张伟加入我们的团队！你的工位在窗边第三个位置。', pinyin: 'Huānyíng Zhāng Wěi jiārù wǒmen de tuánduì! Nǐ de gōngwèi zài chuāngbiān dì sān gè wèizhi.', th: 'ยินดีต้อนรับจางเหว่ยเข้าสู่ทีมของเรา! โต๊ะทำงานของคุณอยู่ตำแหน่งที่ 3 ริมหน้าต่างนะ' },
        { speaker: 'A', cn: '好的，谢谢主管。有什么不懂的地方我会随时向大家请教。', pinyin: 'Hǎo de, xièxie zhǔguǎn. Yǒu shénme bù dǒng de dìfang wǒ huì suíshí xiàng dàjiā qǐngjiào.', th: 'รับทราบครับ ขอบคุณครับหัวหน้า มีตรงไหนที่ไม่เข้าใจผมจะขอคำชี้แนะจากทุกคนนะครับ' },
        { speaker: 'B', cn: '放轻松，我们中午一起吃迎新午餐！', pinyin: 'Fàng qīngsōng, wǒmen zhōngwǔ yìqǐ chī yíngxīn wǔcān!', th: 'ทำตัวตามสบายนะ เดี๋ยวเที่ยงนี้พวกเราไปทานมื้อเที่ยงต้อนรับน้องใหม่ด้วยกัน!' }
      ],
      keyVocab: [
        { cn: '同事', pinyin: 'tóngshì', th: 'เพื่อนร่วมงาน' },
        { cn: '入职', pinyin: 'rùzhí', th: 'เข้าทำงาน / เริ่มงาน' },
        { cn: '多多关照', pinyin: 'duōduō guānzhào', th: 'โปรดชี้แนะ / ฝากเนื้อฝากตัว' },
        { cn: '工位', pinyin: 'gōngwèi', th: 'โต๊ะทำงานส่วนตัว' }
      ],
      tip: '"请多多关照" (Qǐng duōduō guānzhào) เป็นประโยคสุภาพมาตรฐานที่ใช้เมื่อเข้ากลุ่มหรือเริ่มทำงานใหม่'
    },
    {
      id: 'work-e2',
      categoryKey: 'workplace',
      category: 'ในที่ทำงาน',
      level: 'easy',
      levelLabel: 'ง่าย',
      levelNum: 1,
      badgeColor: 'emerald',
      icon: '🖨️',
      titleCn: '请问这台打印机怎么复印双面？',
      titlePinyin: 'Qǐngwèn zhè tái dǎyìnjī zěnme fùyìn shuāngmiàn?',
      titleTh: 'ขอถามหน่อยเครื่องพิมพ์เครื่องนี้ถ่ายเอกสารหน้าหลังยังไงครับ?',
      situation: 'การสอบถามวิธีใช้งานอุปกรณ์สำนักงาน เครื่องพิมพ์ เครื่องถ่ายเอกสาร',
      roles: {
        A: { name: '小李 (เสี่ยวหลี่)', avatar: '🧑‍💻', label: 'พนักงาน A' },
        B: { name: '刘姐 (พี่หลิว)', avatar: '👩‍💼', label: 'รุ่นพี่ในแผนก' }
      },
      lines: [
        { speaker: 'A', cn: '刘姐，打扰一下，这份会议资料需要双面打印，请问怎么设置？', pinyin: 'Liú jiě, dǎrǎo yíxià, zhè fèn huìyì zīliào xūyào shuāngmiàn dǎyìn, qǐngwèn zěnme shèzhì?', th: 'พี่หลิวครับ ขอรบกวนหน่อยครับ เอกสารการประชุมชุดนี้ต้องพิมพ์หน้าหลัง ไม่ทราบว่าต้องตั้งค่ายังไงครับ?' },
        { speaker: 'B', cn: '你看屏幕这里，点击“双面复印”，然后选择“长边翻转”。', pinyin: 'Nǐ kàn píngmù zhèlǐ, diǎnjī "shuāngmiàn fùyìn", ránhòu xuǎnzé "chángbiān fānzhuǎn".', th: 'เธอดูกลางหน้าจอนี่นะ กดเลือก "ถ่ายเอกสาร 2 หน้า" แล้วเลือก "พลิกขอบด้านยาว"' },
        { speaker: 'A', cn: '看到了！如果纸张不够了，备用打印纸放在哪里？', pinyin: 'Kàndào le! Rúguǒ zhǐzhāng bú gòu le, bèiyòng dǎyìnzhǐ fàng zài nǎlǐ?', th: 'เห็นแล้วครับ! ถ้ากระดาษไม่พอ กระดาษพิมพ์สำรองเก็บไว้ที่ไหนเหรอครับ?' },
        { speaker: 'B', cn: '就在打印机下方的柜子里，A4纸在第一层。', pinyin: 'Jiù zài dǎyìnjī xiàfāng de guìzi lǐ, A4 zhǐ zài dì-yī céng.', th: 'อยู่ในตู้ข้างใต้เครื่องพิมพ์เลยจ้ะ กระดาษ A4 อยู่ชั้นแรกสุด' },
        { speaker: 'A', cn: '太清楚了，谢谢刘姐！', pinyin: 'Tài qīngchu le, xièxie Liú jiě!', th: 'ชัดเจนมากครับ ขอบคุณพี่หลิวมากครับ!' }
      ],
      keyVocab: [
        { cn: '打扰', pinyin: 'dǎrǎo', th: 'รบกวน' },
        { cn: '打印机', pinyin: 'dǎyìnjī', th: 'เครื่องพิมพ์' },
        { cn: '双面', pinyin: 'shuāngmiàn', th: 'สองหน้า' },
        { cn: '设置', pinyin: 'shèzhì', th: 'ตั้งค่า' }
      ],
      tip: 'การเรียกเพื่อนร่วมงานหญิงที่อาวุโสกว่าอย่างสุภาพ ใช้นามสกุล + "姐" เช่น "刘姐" (พี่หลิว)'
    },

    // --- ในที่ทำงาน: 2. ปานกลาง ---
    {
      id: 'work-m1',
      categoryKey: 'workplace',
      category: 'ในที่ทำงาน',
      level: 'medium',
      levelLabel: 'ปานกลาง',
      levelNum: 2,
      badgeColor: 'amber',
      icon: '📊',
      titleCn: '每周一早上的部门例会汇报',
      titlePinyin: 'Měi zhōuyī zǎoshang de bùmén lìhuì huìbào',
      titleTh: 'การรายงานความคืบหน้าในที่ประชุมประจำสัปดาห์เช้าวันจันทร์',
      situation: 'การสรุปผลการทำงานของสัปดาห์ที่ผ่านมา แผนงานสัปดาห์นี้ และการขอทรัพยากรสนับสนุน',
      roles: {
        A: { name: '项目负责人 (หัวหน้าโปรเจกต์)', avatar: '🧑‍💼', label: 'ผู้รายงาน' },
        B: { name: '部门总监 (ผู้อำนวยการฝ่าย)', avatar: '👨‍💼', label: 'ผู้อำนวยการ' }
      },
      lines: [
        { speaker: 'A', cn: '各位领导、同事，我代表项目组简要汇报一下上周的新系统开发进度。', pinyin: 'Gèwèi lǐngdǎo, tóngshì, wǒ dàibiǎo xiàngmùzǔ jiǎnyào huìbào yíxià shàng zhōu de xīn xìtǒng kāifā jìndù.', th: 'เรียนท่านผู้นำและเพื่อนร่วมงานทุกท่าน ขอรายงานความคืบหน้าการพัฒนาระบบใหม่ของสัปดาห์ที่แล้วสั้นๆ ครับ' },
        { speaker: 'B', cn: '好的，请重点谈谈测试阶段发现了哪些问题，是否影响下个月上线？', pinyin: 'Hǎo de, qǐng zhòngdiǎn tántan cèshì jiēduàn fāxiàn le nǎxiē wèntí, shìfǒu yǐngxiǎng xià gè yuè shàngxiàn?', th: 'ได้เลยครับ ช่วยเน้นประเด็นว่าช่วงทดสอบเจอปัญหาอะไรบ้าง และจะกระทบต่อกำหนดเปิดใช้งานเดือนหน้าไหมครับ?' },
        { speaker: 'A', cn: '目前前端交互基本完成，但移动端在高并发情况下偶现延迟，技术团队正在优化缓存。', pinyin: 'Mùqián qiánduān jiāohù jīběn wánchéng, dàn yídòngduān zài gāo bīngfā qíngkuàng xià ǒuxiàn yánchí, jìshù tuánduì zhèngzài yōuhuà huǎncún.', th: 'ตอนนี้หน้าบ้านเสร็จสมบูรณ์แล้ว แต่ฝั่งมือถือตอนคนเข้าใช้งานพร้อมกันเยอะๆ จะมีความหน่วงเล็กน้อย กำลังปรับแต่งแคชครับ' },
        { speaker: 'B', cn: '需要跨部门协调技术支持吗？务必确保系统稳定性第一。', pinyin: 'Xūyào kuà bùmén xiétiáo jìshù zhīchí ma? Wùbì quèbǎo xìtǒng wěndìngxìng dì-yī.', th: 'ต้องการให้ประสานงานขอทีมเทคนิคจากแผนกอื่นมาช่วยไหม? ขอให้ยึดความเสถียรของระบบเป็นสำคัญอันดับแรกนะ' },
        { speaker: 'A', cn: '如果能增派一名数据库工程师协助三天，我们有信心按时顺利交付！', pinyin: 'Rúguǒ néng zēngpài yì míng shùjùkù gōngchéngshī xiézhù sān tiān, wǒmen yǒu xìnxīn ànshí shùnlì jiāofù!', th: 'หากสามารถส่งวิศวกรฐานข้อมูลมาช่วยสัก 3 วัน มั่นใจว่าจะส่งมอบงานได้ตรงเวลาอย่างราบรื่นแน่นอนครับ!' }
      ],
      keyVocab: [
        { cn: '例会', pinyin: 'lìhuì', th: 'การประชุมประจำรอบ' },
        { cn: '汇报', pinyin: 'huìbào', th: 'รายงานความคืบหน้า' },
        { cn: '上线', pinyin: 'shàngxiàn', th: 'เปิดตัวใช้งานจริง' },
        { cn: '协调', pinyin: 'xiétiáo', th: 'ประสานงาน' },
        { cn: '交付', pinyin: 'jiāofù', th: 'ส่งมอบงาน' }
      ],
      tip: '"上线" (shàngxiàn) หมายถึง ระบบหรือผลิตภัณฑ์สร้างเสร็จและเปิดใช้งานจริง'
    },
    {
      id: 'work-m2',
      categoryKey: 'workplace',
      category: 'ในที่ทำงาน',
      level: 'medium',
      levelLabel: 'ปานกลาง',
      levelNum: 2,
      badgeColor: 'amber',
      icon: '🤝',
      titleCn: '接待来访的重要客户',
      titlePinyin: 'Jiēdài láifǎng de zhòngyào kèhù',
      titleTh: 'การต้อนรับลูกค้าคนสำคัญที่มาเยือนบริษัท',
      situation: 'การต้อนรับลูกค้าที่ล็อบบี้ พาไปห้องรับแขก เสิร์ฟน้ำชา และเริ่มการเจรจาเบื้องต้น',
      roles: {
        A: { name: '商务专员 (เจ้าหน้าที่ต้อนรับ)', avatar: '👩‍💼', label: 'เจ้าหน้าที่บริษัท' },
        B: { name: '陈总 (คุณเฉิน ลูกค้า)', avatar: '👨‍💼', label: 'ผู้บริหารลูกค้า' }
      },
      lines: [
        { speaker: 'A', cn: '陈总，一路辛苦了！欢迎您莅临我们公司考察。', pinyin: 'Chén zǒng, yílù xīnkǔ le! Huānyíng nín lìlín wǒmen gōngsī kǎochá.', th: 'คุณเฉิน เดินทางเหนื่อยไหมครับ! ขอต้อนรับท่านที่ให้เกียรติมาเยี่ยมชมบริษัทของเราครับ' },
        { speaker: 'B', cn: '你好！路上交通很顺畅。贵公司的办公环境非常有活力啊！', pinyin: 'Nǐ hǎo! Lùshang jiāotōng hěn shùnchàng. Guì gōngsī de bàngōng huánjìng fēicháng yǒu huólì a!', th: 'สวัสดีครับ! การเดินทางราบรื่นดี บรรยากาศออฟฟิศของบริษัทคุณดูเปี่ยมด้วยพลังมากเลยนะ!' },
        { speaker: 'A', cn: '谢谢您的夸奖，请随我到二楼贵宾室稍事休息，我为您泡了一壶清香乌龙茶。', pinyin: 'Xièxie nín de kuājiǎng, qǐng suí wǒ dào èr lóu guìbīnshì shāoshì xiūxi, wǒ wèi nín pào le yì hú qīngxiāng wūlóngchá.', th: 'ขอบคุณสำหรับคำชมครับ เชิญตามผมไปพักที่ห้องรับรองวีไอพีชั้น 2 สักครู่ ผมชงชาอู่หลงเตรียมไว้ให้ท่านแล้วครับ' },
        { speaker: 'B', cn: '太客气了，我们正好借这个机会探讨一下第四季度的合作意向。', pinyin: 'Tài kèqi le, wǒmen zhènghǎo jiè zhège jīhuì tàntǎo yíxià dì-sì jìdù de hézuò yìxiàng.', th: 'เกรงใจจังเลยครับ พวกเราถือโอกาสนี้ปรึกษาเรื่องเจตนารมณ์ความร่วมมือในไตรมาสที่ 4 กันเลยนะครับ' },
        { speaker: 'A', cn: '我们的总经理已经准备好相关方案，马上就到！', pinyin: 'Wǒmen de zǒngjīnglǐ yǐjīng zhǔnbèi hǎo xiāngguān fāng’àn, mǎshàng jiù dào!', th: 'กรรมการผู้จัดการของเราเตรียมข้อเสนอไว้พร้อมแล้ว กำลังมาถึงทันทีครับ!' }
      ],
      keyVocab: [
        { cn: '莅临', pinyin: 'lìlín', th: 'ให้เกียรติมาเยือน' },
        { cn: '考察', pinyin: 'kǎochá', th: 'เยี่ยมชมดูงาน' },
        { cn: '顺畅', pinyin: 'shùnchàng', th: 'ราบรื่น' },
        { cn: '合作意向', pinyin: 'hézuò yìxiàng', th: 'เจตนารมณ์ความร่วมมือ' }
      ],
      tip: '"莅临" (lìlín) เป็นคำศัพท์ทางการระดับสูง ใช้ต้อนรับแขกผู้ใหญ่หรือคู่ค้า'
    },

    // --- ในที่ทำงาน: 3. ยาก ---
    {
      id: 'work-h1',
      categoryKey: 'workplace',
      category: 'ในที่ทำงาน',
      level: 'hard',
      levelLabel: 'ยาก',
      levelNum: 3,
      badgeColor: 'rose',
      icon: '💼',
      titleCn: '请谈谈您的工作优势与团队经验',
      titlePinyin: 'Qǐng tántan nín de gōngzuò yòushì yǔ tuánduì jīngyàn',
      titleTh: 'กรุณาพูดคุยเกี่ยวกับจุดเด่นในการทำงานและประสบการณ์การทำงานเป็นทีม',
      situation: 'การสัมภาษณ์งานบริษัท การนำเสนอจุดแข็ง ความสามารถในการแก้ปัญหา และทัศนคติต่อการทำงาน',
      roles: {
        A: { name: '面试官 (ผู้สัมภาษณ์)', avatar: '👔', label: 'ผู้สัมภาษณ์' },
        B: { name: '应聘者 (ผู้สมัครงาน)', avatar: '💼', label: 'ผู้สมัคร' }
      },
      lines: [
        { speaker: 'A', cn: '您好，李先生。我看过您的简历，请先简要谈谈您最大的竞争优势是什么？', pinyin: 'Nín hǎo, Lǐ xiānsheng. Wǒ kànguò nín de jiǎnlì, qǐng xiān jiǎnyào tántan nín zuì dà de jìngzhēng yōushì shì shénme?', th: 'สวัสดีครับคุณหลี่ ผมได้อ่านเรซูเม่แล้ว ช่วยสรุปสั้นๆ ให้ฟังหน่อยว่าจุดแข็งทางการแข่งขันที่โดดเด่นที่สุดของคุณคืออะไรครับ?' },
        { speaker: 'B', cn: '我认为自己最大的优势在于跨文化沟通能力与快速学习新技术的能力。', pinyin: 'Wǒ rènwéi zìjǐ zuì dà de yōushì zàiyú kuà wénhuà gōutōng nénglì yǔ kuàisù xuéxí xīn jìshù de nénglì.', th: 'ผมคิดว่าจุดแข็งที่สุดของผมคือความสามารถในการสื่อสารข้ามวัฒนธรรม และการเรียนรู้เทคโนโลยีใหม่ๆ ได้อย่างรวดเร็วครับ' },
        { speaker: 'A', cn: '面对工作中的突发挑战或团队成员意见分歧时，您通常如何协调解决？', pinyin: 'Miànduì gōngzuò zhōng de tūfā tiǎozhàn huò tuánduì chéngyuán yìjiàn fēnqí shí, nín tōngcháng rúhé xiétiáo jiějué?', th: 'เวลาที่เผชิญความท้าทายกะทันหัน หรือความเห็นที่ไม่ตรงกันของสมาชิกในทีม โดยปกติคุณมีวิธีแก้ไขอย่างไรครับ?' },
        { speaker: 'B', cn: '首先，我会保持客观理智，倾听各方的顾虑；其次，围绕共同目标寻找最优解，确保项目按期交付。', pinyin: 'Shǒuxiān, wǒ huì bǎochí kèguān lǐzhì, qīngtīng gè fāng de gùlǜ; qícì, wéirào gòngtóng mùbiāo xúnzhǎo zuì yōujiě, quèbǎo xiàngmù ànqī jiāofù.', th: 'อันดับแรก ผมจะรักษาความเป็นกลางและมีเหตุผล รับฟังทุกฝ่าย จากนั้นจะยึดเป้าหมายร่วมเป็นหลักเพื่อหาทางออกที่ดีที่สุดครับ' },
        { speaker: 'A', cn: '回答得非常专业。我们会在三个工作日内通过邮件通知您终审结果。', pinyin: 'Huídá de fēicháng zhuānyè. Wǒmen huì zài sān gè gōngzuòrì nèi tōngguò yóujiàn tōngzhī nín zhōngshěn jiéguǒ.', th: 'ตอบได้เป็นมืออาชีพมากครับ พวกเราจะแจ้งผลการพิจารณารอบสุดท้ายผ่านอีเมลภายใน 3 วันทำการครับ' }
      ],
      keyVocab: [
        { cn: '简历', pinyin: 'jiǎnlì', th: 'เรซูเม่ / ประวัติย่อ' },
        { cn: '竞争优势', pinyin: 'jìngzhēng yōushì', th: 'ความได้เปรียบทางการแข่งขัน' },
        { cn: '意见分歧', pinyin: 'yìjiàn fēnqí', th: 'ความคิดเห็นไม่ลงรอยกัน' },
        { cn: '按期交付', pinyin: 'ànqī jiāofù', th: 'ส่งมอบงานตรงเวลา' }
      ],
      tip: 'การใช้โครงสร้าง "首先……其次……" (อันดับแรก... ถัดมา...) ช่วยให้คำตอบมีตรรกะและโครงสร้างที่ดูเป็นมืออาชีพ'
    },
    {
      id: 'work-h2',
      categoryKey: 'workplace',
      category: 'ในที่ทำงาน',
      level: 'hard',
      levelLabel: 'ยาก',
      levelNum: 3,
      badgeColor: 'rose',
      icon: '🖋️',
      titleCn: '战略合作框架协议的条款磋商与签署',
      titlePinyin: 'Zhànlüè hézuò kuàngjià xiéyì de tiáokuǎn cuōshāng yǔ qiānshǔ',
      titleTh: 'การเจรจาต่อรองเงื่อนไขและลงนามข้อตกลงกรอบความร่วมมือเชิงยุทธศาสตร์',
      situation: 'การประชุมเจรจาเงื่อนไขสัญญาระหว่างสองบริษัท การแบ่งปันผลประโยชน์ ความรับผิดชอบ และการลงนาม',
      roles: {
        A: { name: '首席法务官 (ผู้อำนวยการฝ่ายกฎหมาย)', avatar: '⚖️', label: 'ตัวแทนบริษัท A' },
        B: { name: '合资方谈判代表 (ตัวแทนเจรจา)', avatar: '💼', label: 'ตัวแทนบริษัท B' }
      },
      lines: [
        { speaker: 'A', cn: '关于本次战略合作协议的知识产权归属条款，我方主张由双方共同研发的专利应归联合实验室共有。', pinyin: 'Guānyú běn cì zhànlüè hézuò xiéyì de zhīshi chǎnquán guīshǔ tiáokuǎn, wǒfāng zhǔzhāng yóu shuāngfāng gòngtóng yánfā de zhuānlì yīng guī liánhé shíyànshì gòngyǒu.', th: 'เกี่ยวกับเงื่อนไขทรัพย์สินทางปัญญา ทางเราเสนอว่าสิทธิบัตรที่ร่วมกันวิจัยพัฒนาควรตกเป็นกรรมสิทธิ์ร่วมของห้องแล็บร่วมครับ' },
        { speaker: 'B', cn: '我们原则上赞同这一共识，但希望补充一条：任何一方对外授权商用时，须事先征得另一方的书面许可。', pinyin: 'Wǒmen yuánzé shang zàntóng zhè yì gòngshí, dàn xīwàng bǔchōng yì tiáo: Rènhé yì fāng duìwài shòuquán shāngyòng shí, xū shìxiān zhēngdé lìng yì fāng de shūmiàn xǔkě.', th: 'โดยหลักการทางเราเห็นพ้องครับ แต่ขอเพิ่ม: หากฝ่ายใดจะอนุญาตให้บุคคลภายนอกนำไปใช้เชิงพาณิชย์ ต้องได้รับความยินยอมเป็นลายลักษณ์อักษรล่วงหน้า' },
        { speaker: 'A', cn: '这项补充合情合理，既保障了双方的合法权益，又规避了潜在的市场恶性竞争风险。', pinyin: 'Zhè xiàng bǔchōng héqíng hélǐ, jì bǎozhàng le shuāngfāng de héfǎ quányì, yòu guībì le qiánzài de shìchǎng èxìng jìngzhēng fēngxiǎn.', th: 'ข้อเสนอนี้สมเหตุสมผลมาก ช่วยคุ้มครองสิทธิอันชอบธรรม และป้องกันความเสี่ยงจากการแข่งขันที่ไม่เป็นธรรมในตลาด' },
        { speaker: 'B', cn: '既然关键分歧均已妥善弥合，我们今天下午三点便可正式举行签字仪式与新闻发布会。', pinyin: 'Jìrán guānjiàn fēnqí jūn yǐ tuǒshàn míhé, wǒmen jīntiān xiàwǔ sān diǎn biàn kě zhèngshì jǔxíng qiānzì yíshì yǔ xīnwén fābùhuì.', th: 'ในเมื่อข้อแตกต่างได้รับการแก้ไขแล้ว บ่ายสามโมงวันนี้พวกเราสามารถจัดพิธีลงนามและแถลงข่าวอย่างเป็นทางการได้เลยครับ' },
        { speaker: 'A', cn: '预祝我们的精诚合作结出累累硕果，实现互利共赢！', pinyin: 'Yùzhù wǒmen de jīngchéng hézuò jiéchū léiléi shuòguǒ, shíxiàn hùlì gòngyíng!', th: 'ขออวยพรให้ความร่วมมือด้วยความจริงใจของพวกเราผลิดอกออกผลอย่างงดงาม และได้ประโยชน์ร่วมกันทั้งสองฝ่ายครับ!' }
      ],
      keyVocab: [
        { cn: '知识产权', pinyin: 'zhīshi chǎnquán', th: 'ทรัพย์สินทางปัญญา' },
        { cn: '合情合理', pinyin: 'héqíng hélǐ', th: 'สมเหตุสมผล' },
        { cn: '签字仪式', pinyin: 'qiānzì yíshì', th: 'พิธีลงนาม' },
        { cn: '互利共赢', pinyin: 'hùlì gòngyíng', th: 'ได้ประโยชน์ร่วมกัน (Win-Win)' }
      ],
      tip: '"互利共赢" (hùlì gòngyíng) คือ คีย์เวิร์ดที่สำคัญที่สุดในการเจรจาธุรกิจ หมายถึง ความสำเร็จแบบ Win-Win'
    },

    // --- เพิ่มเติม: บทสนทนาในโรงเรียน (School Additional) ---
    {
      id: 'school-m3',
      categoryKey: 'school',
      category: 'ในโรงเรียน',
      level: 'medium',
      levelLabel: 'ปานกลาง',
      levelNum: 2,
      badgeColor: 'amber',
      icon: '🎭',
      titleCn: '排练六一儿童节的舞台剧表演',
      titlePinyin: 'Páiliàn Liùyī értóngjié de wǔtáijù biǎoyǎn',
      titleTh: 'ซ้อมการแสดงละครเวทีสำหรับงานวันเด็ก 1 มิถุนายน',
      situation: 'การซ้อมบทละครเวทีในโรงเรียนกับเพื่อนๆ การจำคิวและแสดงอารมณ์',
      roles: {
        A: { name: '文文 (เหวินเหวิน)', avatar: '👧', label: 'ผู้กำกับน้อย' },
        B: { name: '天天 (เทียนเทียน)', avatar: '👦', label: 'นักแสดง' }
      },
      lines: [
        { speaker: 'A', cn: '天天，我们再把第三幕排练一遍，你的台词背熟了吗？', pinyin: 'Tiāntian, wǒmen zài bǎ dì-sān mù páiliàn yí biàn, nǐ de táicí bèi shú le ma?', th: 'เทียนเทียน พวกเรามาซ้อมฉากที่ 3 อีกรอบนะ บทพูดเธอท่องแม่นหรือยัง?' },
        { speaker: 'B', cn: '我都背下来了！不过当我走到舞台中央时，要做出什么样的表情呢？', pinyin: 'Wǒ dōu bèi xiàlái le! Búguò dāng wǒ zǒudào wǔtái zhōngyāng shí, yào zuòchū shénmeyàng de biǎoqíng ne?', th: 'ฉันท่องได้หมดแล้ว! แต่พอฉันเดินมากลางเวที ต้องทำสีหน้ายังไงเหรอ?' },
        { speaker: 'A', cn: '你要表现出既吃惊又高兴的样子，声音要洪亮，这样后排的观众才能听清。', pinyin: 'Nǐ yào biǎoxiàn chū jì chījīng yòu gāoxìng de yàngzi, shēngyīn yào hóngliàng, zhèyàng hòupái de guānzhòng cái néng tīng qīng.', th: 'เธอต้องแสดงสีหน้าทั้งตกใจและดีใจออกมาพร้อมกัน และเสียงต้องดังฟังชัด ผู้ชมแถวหลังถึงจะได้ยินชัดเจน' },
        { speaker: 'B', cn: '明白了，服装老师已经帮我们把动物演出服做好了，穿上去特别可爱！', pinyin: 'Míngbai le, fúzhuāng lǎoshī yǐjīng bāng wǒmen bǎ dòngwù yǎnchūfú zuò hǎo le, chuān shàngqu tèbié kě’ài!', th: 'เข้าใจแล้ว คุณครูฝ่ายเสื้อผ้าตัดชุดการแสดงรูปสัตว์ให้พวกเราเสร็จแล้ว สวมแล้วน่ารักมากเลย!' },
        { speaker: 'A', cn: '太好了，大家齐心协力，我们的节目一定能拿一等奖！', pinyin: 'Tài hǎo le, dàjiā qíxīnxiélì, wǒmen de jiémù yídìng néng ná yìděngjiǎng!', th: 'เยี่ยมเลย ทุกคนร่วมแรงร่วมใจกัน การแสดงของพวกเราต้องคว้ารางวัลชนะเลิศแน่นอน!' }
      ],
      keyVocab: [
        { cn: '排练', pinyin: 'páiliàn', th: 'ฝึกซ้อมการแสดง' },
        { cn: '台词', pinyin: 'táicí', th: 'บทพูด / ไดอะล็อก' },
        { cn: '舞台', pinyin: 'wǔtái', th: 'เวที' },
        { cn: '表情', pinyin: 'biǎoqíng', th: 'สีหน้า / อารมณ์' },
        { cn: '齐心协力', pinyin: 'qíxīnxiélì', th: 'ร่วมแรงร่วมใจ' }
      ],
      tip: '"六一儿童节" (Liùyī értóngjié) คือ วันเด็กสากลของจีน ตรงกับวันที่ 1 มิถุนายนของทุกปี'
    },
    {
      id: 'school-h2',
      categoryKey: 'school',
      category: 'ในโรงเรียน',
      level: 'hard',
      levelLabel: 'ยาก',
      levelNum: 3,
      badgeColor: 'rose',
      icon: '🎓',
      titleCn: '重点初中入学面试中的自我陈述',
      titlePinyin: 'Zhòngdiǎn chūzhōng rùxué miànshì zhōng de zìwǒ chénshù',
      titleTh: 'การกล่าวแนะนำตนเองและการนำเสนอความสามารถในการสัมภาษณ์เข้ามัธยมต้นโรงเรียนดัง',
      situation: 'การสัมภาษณ์เข้าเรียนระดับมัธยมศึกษา การตอบคำถามคณะกรรมการเกี่ยวกับการบริหารเวลาและความใฝ่รู้',
      roles: {
        A: { name: '主考老师 (อาจารย์กรรมการ)', avatar: '👨‍🏫', label: 'กรรมการสอบ' },
        B: { name: '考生 (ผู้เข้าสอบ)', avatar: '🧑‍🎓', label: 'นักเรียน' }
      },
      lines: [
        { speaker: 'A', cn: '同学请坐。在小学阶段，除了优异的课业成绩，你认为自己最核心的素养是什么？', pinyin: 'Tóngxué qǐng zuò. Zài xiǎoxué jiēduàn, chúle yōuyì de kèyè chéngjì, nǐ rènwéi zìjǐ zuì héxīn de sùyǎng shì shénme?', th: 'เชิญนั่งครับ ในช่วงประถม นอกจากผลการเรียนที่โดดเด่นแล้ว เธอคิดว่าทักษะสมรรถนะแกนหลักที่สุดของตนเองคืออะไรครับ?' },
        { speaker: 'B', cn: '老师好，我认为是持之以恒的自律习惯和强烈的探究欲。我坚持每天阅读课外名著并撰写读书笔记。', pinyin: 'Lǎoshī hǎo, wǒ rènwéi shì chízhīyǐhéng de zìlǜ xíguàn hé qiángliè de tànjiū yù. Wǒ jiānchí měitiān yuèdú kèwài míngzhù bìng zhuànxiě dúshū bǐjì.', th: 'สวัสดีครับคุณครู ผมคิดว่าคือวินัยในตนเองที่ทำอย่างสม่ำเสมอ และความกระหายใคร่รู้ครับ ผมอ่านวรรณกรรมนอกเวลาและเขียนสรุปบทเรียนทุกวันครับ' },
        { speaker: 'A', cn: '面对初中阶段课业量成倍增加的压力，你将如何平衡学业与兴趣特长？', pinyin: 'Miànduì chūzhōng jiēduàn kèyè liàng chéngbèi zēngjiā de yālì, nǐ jiāng rúhé pínghéng xuéyè yǔ xìngqù tècháng?', th: 'เมื่อต้องเผชิญกับภาระการเรียนในระดับมัธยมต้นที่จะเพิ่มขึ้นเป็นเท่าตัว เธอจะมีวิธีสร้างสมดุลระหว่างการเรียนและความสนใจพิเศษอย่างไร?' },
        { speaker: 'B', cn: '我会采用“番茄工作法”提高专注度，向课堂四十五分钟要效率，课余时间再沉浸于我热爱的编程与机器人设计。', pinyin: 'Wǒ huì cǎiyòng "fānqié gōngzuòfǎ" tígāo zhuānzhù dù, xiàng kètáng sìshíwǔ fēnzhōng yào xiàolǜ, kèyú shíjiān zài chénjìn yú wǒ rè’ài de biānchéng yǔ jīqìrén shèjì.', th: 'ผมจะใช้เทคนิคโพโมโดโรเพิ่มสมาธิ ดึงประสิทธิภาพสูงสุดใน 45 นาทีของห้องเรียน และใช้เวลาว่างไปกับการเขียนโค้ดและออกแบบหุ่นยนต์ครับ' },
        { speaker: 'A', cn: '逻辑清晰，目标明确，期待在金秋九月的新生开学典礼上见到你！', pinyin: 'Luóji qīngxī, mùbiāo míngquè, qīdài zài jīnqiū jiǔ yuè de xīnshēng kāixué diǎnlǐ shang jiàndào nǐ!', th: 'ตอบได้มีตรรกะชัดเจน เป้าหมายแจ่มแจ้ง หวังว่าจะได้พบเธอในพิธีเปิดภาคเรียนใหม่เดือนกันยายนนี้นะครับ!' }
      ],
      keyVocab: [
        { cn: '素养', pinyin: 'sùyǎng', th: 'ทักษะสมรรถนะ / คุณลักษณะ' },
        { cn: '持之以恒', pinyin: 'chízhīyǐhéng', th: 'มุ่งมั่นพากเพียรไม่ย่อท้อ' },
        { cn: '自律', pinyin: 'zìlǜ', th: 'วินัยในตนเอง' },
        { cn: '平衡', pinyin: 'pínghéng', th: 'สร้างสมดุล' },
        { cn: '专注度', pinyin: 'zhuānzhù dù', th: 'ระดับสมาธิจดจ่อ' }
      ],
      tip: '"持之以恒" (chízhīyǐhéng) เป็นสำนวนจีน 4 คำ แปลว่า อดทนทำสิ่งดีๆ อย่างต่อเนื่องจนสำเร็จ'
    },

    // --- เพิ่มเติม: ซื้อของ-สั่งอาหาร (Food & Shopping Additional) ---
    {
      id: 'food-e4',
      categoryKey: 'food-shopping',
      category: 'ซื้อของ-สั่งอาหาร',
      level: 'easy',
      levelLabel: 'ง่าย',
      levelNum: 1,
      badgeColor: 'emerald',
      icon: '🍦',
      titleCn: '阿姨，我想买一个草莓冰淇淋',
      titlePinyin: 'Āyí, wǒ xiǎng mǎi yí gè cǎoméi bīngqílín',
      titleTh: 'คุณน้าครับ ผมอยากซื้อไอศกรีมสตรอว์เบอร์รี 1 โคนครับ',
      situation: 'เด็กๆ ซื้อขนมหวานและไอศกรีมที่ร้านเบเกอรี่ และชำระเงินด้วยตนเอง',
      roles: {
        A: { name: '小朋友 (หนูน้อย)', avatar: '🧒', label: 'เด็กน้อย' },
        B: { name: '店员阿姨 (คุณน้าคนขาย)', avatar: '👩', label: 'คนขายขนม' }
      },
      lines: [
        { speaker: 'A', cn: '阿姨好！我想买一个草莓味的甜筒冰淇淋。', pinyin: 'Āyí hǎo! Wǒ xiǎng mǎi yí gè cǎoméi wèi de tiántǒng bīngqílín.', th: 'คุณน้าสวัสดีครับ! ผมอยากซื้อไอศกรีมโคนรสสตรอว์เบอร์รี 1 โคนครับ' },
        { speaker: 'B', cn: '小朋友你好！草莓味的五块钱一个，还要巧克力脆皮吗？', pinyin: 'Xiǎopéngyou nǐ hǎo! Cǎoméi wèi de wǔ kuài qián yí gè, hái yào qiǎokèlì cuìpí ma?', th: 'สวัสดีจ้ะหนูน้อย! รสสตรอว์เบอร์รีโคนละ 5 หยวนจ้ะ เคลือบช็อกโกแลตกรอบด้วยไหมจ๊ะ?' },
        { speaker: 'A', cn: '要加巧克力脆皮，再要一个新鲜烤好的牛角面包。', pinyin: 'Yào jiā qiǎokèlì cuìpí, zài yào yí gè xīnxiān kǎo hǎo de niújiǎomiànbāo.', th: 'ใส่ช็อกโกแลตกรอบด้วยครับ แล้วขอครัวซองต์อบใหม่ๆ อีก 1 ชิ้นครับ' },
        { speaker: 'B', cn: '好的，面包六块，一共十一块钱。拿好你的冰淇淋，小心别弄脏衣服哦！', pinyin: 'Hǎo de, miànbāo liù kuài, yígòng shíyī kuài qián. Ná hǎo nǐ de bīngqílín, xiǎoxīn bié nòng zāng yīfu o!', th: 'ได้เลยจ้ะ ขนมปัง 6 หยวน รวมทั้งหมด 11 หยวน ถือไอศกรีมดีๆ ระวังอย่าให้เปื้อนเสื้อผ้านะจ๊ะ!' },
        { speaker: 'A', cn: '谢谢阿姨，阿姨再见！', pinyin: 'Xièxie āyí, āyí zàijiàn!', th: 'ขอบคุณครับคุณน้า คุณน้าสวัสดีครับ!' }
      ],
      keyVocab: [
        { cn: '冰淇淋', pinyin: 'bīngqílín', th: 'ไอศกรีม' },
        { cn: '草莓', pinyin: 'cǎoméi', th: 'สตรอว์เบอร์รี' },
        { cn: '巧克力', pinyin: 'qiǎokèlì', th: 'ช็อกโกแลต' },
        { cn: '新鲜', pinyin: 'xīnxiān', th: 'สดใหม่' },
        { cn: '面包', pinyin: 'miànbāo', th: 'ขนมปัง' }
      ],
      tip: 'เด็กๆ ในจีนนิยมเรียกคนขายหญิงว่า "阿姨" (āyí = คุณน้า) เป็นคำเรียกที่น่ารักและสุภาพมาก'
    },
    {
      id: 'food-m3',
      categoryKey: 'food-shopping',
      category: 'ซื้อของ-สั่งอาหาร',
      level: 'medium',
      levelLabel: 'ปานกลาง',
      levelNum: 2,
      badgeColor: 'amber',
      icon: '🍕',
      titleCn: '打电话订外卖披萨送到家里',
      titlePinyin: 'Dǎ diànhuà dìng wàimài pīsà sòng dào jiālǐ',
      titleTh: 'โทรสั่งพิซซ่าเดลิเวอรี่ให้มาส่งที่บ้าน',
      situation: 'การโทรสั่งอาหารเดลิเวอรี่ บอกที่อยู่ ชั้น ประตู และแจ้งเวลาจัดส่ง',
      roles: {
        A: { name: '订餐人 (คนสั่งอาหาร)', avatar: '🧑', label: 'ผู้สั่งอาหาร' },
        B: { name: '外卖接线员 (พนักงานรับสาย)', avatar: '🎧', label: 'พนักงานรับออเดอร์' }
      },
      lines: [
        { speaker: 'A', cn: '你好，我想订一份十二寸的海鲜至尊披萨和一份烤鸡翅。', pinyin: 'Nǐ hǎo, wǒ xiǎng dìng yí fèn shí’èr cùn de hǎixiān zhìzūn pīsà hé yí fèn kǎojīchì.', th: 'สวัสดีครับ ผมอยากสั่งพิซซ่าหน้าซีฟู้ดสุพรีมขนาด 12 นิ้ว 1 ถาด กับปีกไก่ย่าง 1 ที่ครับ' },
        { speaker: 'B', cn: '您好！披萨饼底需要芝士卷边吗？今天点大号披萨送一瓶大可乐。', pinyin: 'Nín hǎo! Pīsà bǐngdǐ xūyào zhīshì juǎnbiān ma? Jīntiān diǎn dàhào pīsà sòng yì píng dà kělè.', th: 'สวัสดีค่ะ! ขอบพิซซ่าต้องการเพิ่มขอบชีสไหมคะ? วันนี้สั่งไซส์ใหญ่แถมโค้กขวดใหญ่ 1 ขวดฟรีค่ะ' },
        { speaker: 'A', cn: '太好了，要芝士卷边。请送到海淀区阳光小区3号楼2单元501室。', pinyin: 'Tài hǎo le, yào zhīshì juǎnbiān. Qǐng sòng dào Hǎidiàn qū Yángguāng xiǎoqū sān hào lóu èr dānyuán wǔlíngyī shì.', th: 'ดีมากครับ ขอขอบชีสด้วยครับ รบกวนส่งที่ เขตไห่เตี้ยน หมู่บ้านหยางกวง อาคาร 3 ยูนิต 2 ห้อง 501 ครับ' },
        { speaker: 'B', cn: '已为您登记，预计四十分钟内送达，骑手出发时会给您打电话。', pinyin: 'Yǐ wèi nín dēngjì, yùjì sìshí fēnzhōng nèi sòngdá, qíshǒu chūfā shí huì gěi nín dǎ diànhuà.', th: 'บันทึกข้อมูลเรียบร้อยค่ะ คาดว่าจะส่งถึงภายใน 40 นาที ตอนไรเดอร์ออกเดินทางจะโทรแจ้งนะคะ' },
        { speaker: 'A', cn: '好的，麻烦让骑手到楼下按门铃就行。', pinyin: 'Hǎo de, máfan ràng qíshǒu dào lóuxià àn ménlíng jiù xíng.', th: 'ครับ รบกวนให้ไรเดอร์กดกริ่งตรงใต้ตึกได้เลยครับ' }
      ],
      keyVocab: [
        { cn: '外卖', pinyin: 'wàimài', th: 'อาหารเดลิเวอรี่' },
        { cn: '披萨', pinyin: 'pīsà', th: 'พิซซ่า' },
        { cn: '芝士', pinyin: 'zhīshì', th: 'ชีส' },
        { cn: '小区', pinyin: 'xiǎoqū', th: 'หมู่บ้านจัดสรร / คอนโดคอมมูนิตี้' },
        { cn: '骑手', pinyin: 'qíshǒu', th: 'ไรเดอร์ส่งอาหาร' }
      ],
      tip: 'ในจีน คนส่งอาหารเดลิเวอรี่เรียกว่า "骑手" (qíshǒu) หรือ "外卖小哥" (wàimài xiǎogē)'
    },

    // --- เพิ่มเติม: เดินทาง (Travel Additional) ---
    {
      id: 'travel-e4',
      categoryKey: 'travel',
      category: 'เดินทาง',
      level: 'easy',
      levelLabel: 'ง่าย',
      levelNum: 1,
      badgeColor: 'emerald',
      icon: '🚸',
      titleCn: '过马路要走斑马线，看红绿灯',
      titlePinyin: 'Guò mǎlù yào zǒu bānmǎxiàn, kàn hónglǜdēng',
      titleTh: 'ข้ามถนนต้องเดินบนทางม้าลาย และดูสัญญาณไฟจราจร',
      situation: 'การสอนเด็กๆ เรื่องความปลอดภัยในการข้ามถนน และการสังเกตไฟแดงไฟเขียว',
      roles: {
        A: { name: '妈妈 (คุณแม่)', avatar: '👩', label: 'คุณแม่' },
        B: { name: '儿子 (ลูกชาย)', avatar: '👦', label: 'ลูกชาย' }
      },
      lines: [
        { speaker: 'A', cn: '宝贝，停下来！现在人行道指示灯是红灯，不能过马路。', pinyin: 'Bǎobèi, tíng xiàlái! Xiànzài rénxíngdào zhǐshìdēng shì hóngdēng, bù néng guò mǎlù.', th: 'ลูกจ๋า หยุดก่อน! ตอนนี้ไฟคนข้ามเป็นสีแดง ข้ามถนนไม่ได้นะจ๊ะ' },
        { speaker: 'B', cn: '妈妈，我知道了：“红灯停，绿灯行，黄灯亮了等一等！”', pinyin: 'Māma, wǒ zhīdào le: "Hóngdēng tíng, lǜdēng xíng, huángdēng liàng le děng yì děng!"', th: 'คุณแม่ครับ ผมจำได้แล้ว: "ไฟแดงหยุด ไฟเขียวไป ไฟเหลืองขึ้นให้รอสักนิด!"' },
        { speaker: 'A', cn: '背得真好！看，绿灯亮了，牵着妈妈的手走斑马线。', pinyin: 'Bèi de zhēn hǎo! Kàn, lǜdēng liàng le, qiān zhe māma de shǒu zǒu bānmǎxiàn.', th: 'ท่องเก่งมากจ้ะ! ดูสิ ไฟเขียวสว่างแล้ว จับมือแม่ไว้แล้วเดินบนทางม้าลายนะ' },
        { speaker: 'B', cn: '过马路时还要左看看、右看看，不能一边走一边玩手机。', pinyin: 'Guò mǎlù shí hái yào zuǒ kànkan, yòu kànkan, bù néng yìbiān zǒu yìbiān wán shǒujī.', th: 'ตอนข้ามถนนยังต้องมองซ้ายมองขวาด้วย ไม่เล่นมือถือไปเดินไปครับ' },
        { speaker: 'A', cn: '真是一个遵守交通规则的安全小标兵！', pinyin: 'Zhēn shì yí gè zūnshǒu jiāotōng guīzé de ānquán xiǎo biāobīng!', th: 'เป็นเด็กดีตัวอย่างที่เคารพกฎจราจรจริงๆ เลยจ้ะ!' }
      ],
      keyVocab: [
        { cn: '斑马线', pinyin: 'bānmǎxiàn', th: 'ทางม้าลาย' },
        { cn: '红绿灯', pinyin: 'hónglǜdēng', th: 'สัญญาณไฟจราจร' },
        { cn: '过马路', pinyin: 'guò mǎlù', th: 'ข้ามถนน' },
        { cn: '牵手', pinyin: 'qiānshǒu', th: 'จูงมือ' },
        { cn: '交通规则', pinyin: 'jiāotōng guīzé', th: 'กฎจราจร' }
      ],
      tip: '"红灯停，绿灯行" (ไฟแดงหยุด ไฟเขียวเดิน) เป็นคำคล้องจองที่เด็กจีนทุกคนท่องจำตั้งแต่ชั้นอนุบาล'
    },
    {
      id: 'travel-m3',
      categoryKey: 'travel',
      category: 'เดินทาง',
      level: 'medium',
      levelLabel: 'ปานกลาง',
      levelNum: 2,
      badgeColor: 'amber',
      icon: '🚀',
      titleCn: '周末去中国科学技术馆参观',
      titlePinyin: 'Zhōumò qù Zhōngguó kēxué jìshù guǎn cānguān',
      titleTh: 'วันหยุดสุดสัปดาห์ไปชมนิทรรศการที่พิพิธภัณฑ์วิทยาศาสตร์และเทคโนโลยีแห่งชาติจีน',
      situation: 'การชวนครอบครัวไปทัศนศึกษาพิพิธภัณฑ์วิทย์ การจองตั๋วออนไลน์ และการดูโรงหนังโดม',
      roles: {
        A: { name: '爸爸 (คุณพ่อ)', avatar: '👨', label: 'คุณพ่อ' },
        B: { name: '女儿 (ลูกสาว)', avatar: '👧', label: 'ลูกสาว' }
      },
      lines: [
        { speaker: 'B', cn: '爸爸，这个周六科技馆有宇航员太空探索主题展，我想去看看！', pinyin: 'Bàba, zhège zhōuliù kējìguǎn yǒu yǔhángyuán tàikōng tànsuǒ zhǔtí zhǎn, wǒ xiǎng qù kànkan!', th: 'คุณพ่อคะ วันเสาร์นี้ที่พิพิธภัณฑ์วิทย์มีนิทรรศการสำรวจอวกาศของนักบินอวกาศ หนูอยากไปดูค่ะ!' },
        { speaker: 'A', cn: '好主意！科技馆需要提前在官方微信公众号实名预约购票，爸爸现在就订票。', pinyin: 'Hǎo zhǔyi! Kējìguǎn xūyào tíqián zài guānfāng Wēixìn gōngzhònghào shímíng yùyuē gòupiào, bàba xiànzài jiù dìng piào.', th: 'ความคิดดีมาก! พิพิธภัณฑ์ต้องจองตั๋วระบุตัวตนล่วงหน้าในบัญชีทางการวีแชท เดี๋ยวพ่อกดจองตั๋วเดี๋ยวนี้เลย' },
        { speaker: 'B', cn: '能顺便订两张球幕影院的电影票吗？听说效果特别震撼，像真的在宇宙中飞翔！', pinyin: 'Néng shùnbiàn dìng liǎng zhāng qiúmù yǐngyuàn de diànyǐng piào ma? Tīngshuō xiàoguǒ tèbié zhènhàn, xiàng zhēn de zài yǔzhòu zhōng fēixiáng!', th: 'ช่วยจองตั๋วโรงภาพยนตร์จอโดมยักษ์ 2 ใบด้วยได้ไหมคะ? ได้ยินว่าเอฟเฟกต์สมจริงตื่นตาตื่นใจมาก เหมือนได้บินอยู่ในอวกาศจริงๆ เลย!' },
        { speaker: 'A', cn: '订好了！周六早上坐地铁8号线，在奥林匹克公园站下车走五百米就到了。', pinyin: 'Dìng hǎo le! Zhōuliù zǎoshang zuò dìtiě bā hào xiàn, zài Àolínpǐkè gōngyuán zhàn xià chē zǒu wǔbǎi mǐ jiù dào le.', th: 'จองเรียบร้อยจ้ะ! เช้าวันเสาร์นั่งรถไฟฟ้าสาย 8 ไปลงที่สถานีสวนโอลิมปิกแล้วเดินต่อ 500 เมตรก็ถึงแล้ว' },
        { speaker: 'B', cn: '太棒了！我一定要带上我的笔记本，把新知识全记录下来！', pinyin: 'Tài bàng le! Wǒ yídìng yào dài shàng wǒ de bǐjìběn, bǎ xīn zhīshi quán jìlù xiàlái!', th: 'ยอดเยี่ยมที่สุดเลยค่ะ! หนูจะพกสมุดจดไปด้วยเพื่อจดความรู้ใหม่ๆ ให้หมดเลย!' }
      ],
      keyVocab: [
        { cn: '科技馆', pinyin: 'kējìguǎn', th: 'พิพิธภัณฑ์วิทยาศาสตร์' },
        { cn: '预约', pinyin: 'yùyuē', th: 'จองล่วงหน้า (Appointment)' },
        { cn: '球幕影院', pinyin: 'qiúmù yǐngyuàn', th: 'โรงภาพยนตร์จอโดมยักษ์ (Dome IMAX)' },
        { cn: '探索', pinyin: 'tànsuǒ', th: 'สำรวจค้นหา' },
        { cn: '震撼', pinyin: 'zhènhàn', th: 'ตื่นตาตื่นใจ / ทรงพลัง' }
      ],
      tip: 'สถานที่ท่องเที่ยวและพิพิธภัณฑ์ในจีนเกือบ 100% ต้องทำการ "预约" (จองคิวระบุชื่อจริงล่วงหน้า) ผ่านสมาร์ตโฟน'
    },

    // --- เพิ่มเติม: ในที่ทำงาน (Workplace Additional) ---
    {
      id: 'work-m3',
      categoryKey: 'workplace',
      category: 'ในที่ทำงาน',
      level: 'medium',
      levelLabel: 'ปานกลาง',
      levelNum: 2,
      badgeColor: 'amber',
      icon: '💻',
      titleCn: '修改商务PPT演示文稿与数据核对',
      titlePinyin: 'Xiūgǎi shāngwù PPT yǎnshì wéngǎo yǔ shùjù héduì',
      titleTh: 'แก้ไขสไลด์พรีเซนต์ธุรกิจและการตรวจทานตัวเลขข้อมูล',
      situation: 'การทำงานร่วมกันในสำนักงาน การตรวจเช็คกราฟิกและชาร์ตข้อมูลก่อนนำเสนอลูกค้า',
      roles: {
        A: { name: '设计师 (ดีไซเนอร์)', avatar: '👩‍💻', label: 'ฝ่ายออกแบบ' },
        B: { name: '策划主管 (หัวหน้าฝ่ายแผนงาน)', avatar: '🧑‍💼', label: 'ฝ่ายวางแผน' }
      },
      lines: [
        { speaker: 'B', cn: '小陈，下周给客户提案的PPT初稿我看过了，视觉排版很大气，但有两处细节需要微调。', pinyin: 'Xiǎo Chén, xià zhōu gěi kèhù tí’àn de PPT chūgǎo wǒ kànguò le, shìjué páibǎn hěn dàqì, dàn yǒu liǎng chù xìjié xūyào wēitiáo.', th: 'เสี่ยวเฉิน สไลด์นำเสนอลูกค้าฉบับร่างสัปดาห์หน้าพี่ดูแล้วนะ การจัดวางภาพดูหรูหราทันสมัยมาก แต่มี 2 จุดที่ต้องปรับจูนนิดหน่อย' },
        { speaker: 'A', cn: '主管您请说，我立刻打开源文件进行修改。', pinyin: 'Zhǔguǎn nín qǐng shuō, wǒ lìkè dǎkāi yuán wénjiàn jìnxíng xiūgǎi.', th: 'หัวหน้าบอกได้เลยครับ ผมเปิดไฟล์ต้นฉบับแก้ไขให้เดี๋ยวนี้เลย' },
        { speaker: 'B', cn: '第八页的柱状图，第三季度的增长率数据更新为百分之二十五，图例颜色调成品牌标准蓝。', pinyin: 'Dì bā yè de zhùzhuàngtú, dì-sān jìdù de zēngzhǎnglǜ shùjù gēngxīn wèi bǎifēnzhī èrshíwǔ, túlì yánsè tiáochéng pǐnpái biāozhǔn lán.', th: 'กราฟแท่งหน้า 8 ตัวเลขการเติบโตไตรมาส 3 ให้อัปเดตเป็น 25% และสีกราฟให้ปรับเป็นสีน้ำเงินมาตรฐานของแบรนด์' },
        { speaker: 'A', cn: '好的，另外最后一页的团队成员介绍，需要替换成最新的外景工作合影吗？', pinyin: 'Hǎo de, lìngwài zuìhòu yí yè de tuánduì chéngyuán jièshào, xūyào tìhuàn chéng zuìxīn de wàijǐng gōngzuò héyǐng ma?', th: 'รับทราบครับ แล้วหน้าสุดท้ายตรงแนะนำสมาชิกในทีม ต้องเปลี่ยนเป็นรูปถ่ายรวมทำงานนอกสถานที่ล่าสุดไหมครับ?' },
        { speaker: 'B', cn: '换上合影会显得更加亲切专业！改完后导出一份高清PDF发我邮箱。', pinyin: 'Huàn shàng héyǐng huì xiǎnde gèngjiā qīnqiè zhuānyè! Gǎi wán hòu dǎochū yí fèn gāoqīng PDF fā wǒ yóuxiāng.', th: 'เปลี่ยนเป็นรูปถ่ายรวมจะดูอบอุ่นและเป็นมืออาชีพยิ่งขึ้น! แก้เสร็จแล้วส่งออกเป็น PDF ความละเอียดสูงส่งเข้าอีเมลพี่นะ' }
      ],
      keyVocab: [
        { cn: '演示文稿', pinyin: 'yǎnshì wéngǎo', th: 'สไลด์นำเสนอ (Presentation/PPT)' },
        { cn: '柱状图', pinyin: 'zhùzhuàngtú', th: 'กราฟแท่ง (Bar Chart)' },
        { cn: '增长率', pinyin: 'zēngzhǎnglǜ', th: 'อัตราการเติบโต' },
        { cn: '微调', pinyin: 'wēitiáo', th: 'ปรับจูนเล็กน้อย (Fine-tune)' },
        { cn: '高清', pinyin: 'gāoqīng', th: 'ความละเอียดสูง (HD)' }
      ],
      tip: '"微调" (wēitiáo) คือ คำศัพท์ยอดฮิตในที่ทำงาน หมายถึง การปรับแต่งรายละเอียดเล็กๆ น้อยๆ ให้สมบูรณ์แบบ'
    },

    // =========================================================================
    // ชุดบทสนทนาเพิ่มเติม 18 สถานการณ์ใหม่ (BATCH 2: EXPANDED TO 50 SCENARIOS)
    // =========================================================================

    // --- หมวดในโรงเรียน (เพิ่มเติม) ---
    {
      id: 'school-e5',
      categoryKey: 'school',
      category: 'ในโรงเรียน',
      level: 'easy',
      levelLabel: 'ง่าย',
      levelNum: 1,
      badgeColor: 'emerald',
      icon: '🍱',
      titleCn: '在学校食堂排队吃午饭',
      titlePinyin: 'Zài xuéxiào shítáng páiduì chī wǔfàn',
      titleTh: 'เข้าแถวกินข้าวเที่ยงที่โรงอาหารของโรงเรียน',
      situation: 'การต่อแถวรับถาดอาหาร เลือกเมนูอาหารกลางวันและบอกขอบคุณคุณป้าโรงอาหาร',
      roles: {
        A: { name: '小雨 (เสี่ยวอวี่)', avatar: '👧', label: 'นักเรียน' },
        B: { name: '食堂阿姨 (คุณป้าโรงอาหาร)', avatar: '👩‍🍳', label: 'ป้าโรงอาหาร' }
      },
      lines: [
        { speaker: 'B', cn: '小朋友，端好餐盘，今天中午想吃什么菜？', pinyin: 'Xiǎopéngyou, duān hǎo cānpán, jīntiān zhōngwǔ xiǎng chī shénme cài?', th: 'หนูน้อย ถือถาดหลุมดีๆ นะจ๊ะ เที่ยงนี้อยากทานกับข้าวอะไรจ๊ะ?' },
        { speaker: 'A', cn: '阿姨好！我要一份香酥鸡腿，还有西红柿炒鸡蛋。', pinyin: 'Āyí hǎo! Wǒ yào yí fèn xiāngsū jītuǐ, hái yǒu xīhóngshì chǎo jīdàn.', th: 'สวัสดีค่ะคุณป้า! หนูขอน่องไก่กรอบ 1 ชิ้น แล้วก็ผัดมะเขือเทศใส่ไข่ค่ะ' },
        { speaker: 'B', cn: '还要绿色蔬菜吗？今天有新鲜的炒菠菜哦。', pinyin: 'Hái yào lǜsè shūcài ma? Jīntiān yǒu xīnxiān de chǎo bōcài o.', th: 'รับผักใบเขียวเพิ่มไหมจ๊ะ? วันนี้มีผัดผักปวยเล้งสดๆ ด้วยนะ' },
        { speaker: 'A', cn: '要一点儿菠菜，多吃蔬菜身体棒！', pinyin: 'Yào yìdiǎnr bōcài, duō chī shūcài shēntǐ bàng!', th: 'ขอผักปวยเล้งนิดหน่อยค่ะ ทานผักเยอะๆ ร่างกายจะได้แข็งแรง!' },
        { speaker: 'B', cn: '真乖！米饭不够可以再加，慢点走别洒了。', pinyin: 'Zhēn guāi! Mǐfàn bú gòu kěyǐ zài jiā, màn diǎn zǒu bié sǎ le.', th: 'เด็กดีจังเลย! ข้าวสวยไม่อิ่มมาเติมได้นะ เดินช้าๆ ระวังหกนะจ๊ะ' },
        { speaker: 'A', cn: '谢谢阿姨！', pinyin: 'Xièxie āyí!', th: 'ขอบคุณค่ะคุณป้า!' }
      ],
      keyVocab: [
        { cn: '食堂', pinyin: 'shítáng', th: 'โรงอาหาร' },
        { cn: '餐盘', pinyin: 'cānpán', th: 'ถาดหลุมใส่อาหาร' },
        { cn: '鸡腿', pinyin: 'jītuǐ', th: 'น่องไก่' },
        { cn: '蔬菜', pinyin: 'shūcài', th: 'ผัก' },
        { cn: '身体棒', pinyin: 'shēntǐ bàng', th: 'ร่างกายแข็งแรงยอดเยี่ยม' }
      ],
      tip: '"西红柿炒鸡蛋" (ผัดมะเขือเทศใส่ไข่) คือ เมนูอาหารประจำชาติยอดนิยมอันดับ 1 ของเด็กๆ ในโรงเรียนจีน'
    },
    {
      id: 'school-e6',
      categoryKey: 'school',
      category: 'ในโรงเรียน',
      level: 'easy',
      levelLabel: 'ง่าย',
      levelNum: 1,
      badgeColor: 'emerald',
      icon: '🩹',
      titleCn: '体育课跑步摔倒，去医务室擦药',
      titlePinyin: 'Tǐyùkè pǎobù shuāidǎo, qù yīwùshì cā yào',
      titleTh: 'วิ่งหกล้มในคาบพละ ไปทำแผลทายาที่ห้องพยาบาล',
      situation: 'การบอกอาการเจ็บหลังจากหกล้มในวิชาพละ และครูพยาบาลช่วยทำแผลติดพลาสเตอร์',
      roles: {
        A: { name: '小宝 (เสี่ยวเป่า)', avatar: '👦', label: 'นักเรียน' },
        B: { name: '校医老师 (คุณครูพยาบาล)', avatar: '👩‍⚕️', label: 'ครูพยาบาล' }
      },
      lines: [
        { speaker: 'B', cn: '小朋友，你怎么哭了？哪儿摔疼了？', pinyin: 'Xiǎopéngyou, nǐ zěnme kū le? Nǎr shuāi téng le?', th: 'หนูน้อย ทำไมร้องไห้ล่ะจ๊ะ? หกล้มเจ็บตรงไหน?' },
        { speaker: 'A', cn: '老师，刚才上体育课跑步，我不小心摔倒了，膝盖好疼。', pinyin: 'Lǎoshī, gāngcái shàng tǐyùkè pǎobù, wǒ bù xiǎoxīn shuāidǎo le, xīgài hǎo téng.', th: 'คุณครูครับ เมื่อกี้วิ่งในคาบพละ ผมเผลอสะดุดหกล้ม หัวเข่าเจ็บมากเลยครับ' },
        { speaker: 'B', cn: '别怕，老师看看……只是破了一点皮，骨头没有受伤。', pinyin: 'Bié pà, lǎoshī kànkan... Zhǐshì pò le yìdiǎn pí, gútou méiyǒu shòushāng.', th: 'ไม่ต้องกลัวนะ ครูขอดูหน่อย... แค่ถลอกนิดหน่อย กระดูกไม่ได้รับบาดเจ็บจ้ะ' },
        { speaker: 'A', cn: '擦药会很疼吗？', pinyin: 'Cā yào huì hěn téng ma?', th: 'ทายาจะแสบมากไหมครับ?' },
        { speaker: 'B', cn: '老师用温和的药水消毒，再贴上可爱的创可贴，轻轻吹一下就不疼了！', pinyin: 'Lǎoshī yòng wēnhé de yàoshuǐ xiāodú, zài tiē shàng kě’ài de chuàngkětiē, qīngqīng chuī yíxià jiù bù téng le!', th: 'ครูใช้น้ำยาฆ่าเชื้อสูตรอ่อนโยน แล้วติดพลาสเตอร์ยาลายน่ารักให้ เป่าเบาๆ ทีเดียวก็หายเจ็บแล้วจ้ะ!' },
        { speaker: 'A', cn: '真的不疼了，谢谢校医老师！', pinyin: 'Zhēn de bù téng le, xièxie xiàoyī lǎoshī!', th: 'ไม่เจ็บแล้วจริงๆ ด้วย ขอบคุณครับคุณครูพยาบาล!' }
      ],
      keyVocab: [
        { cn: '医务室', pinyin: 'yīwùshì', th: 'ห้องพยาบาล' },
        { cn: '摔倒', pinyin: 'shuāidǎo', th: 'หกล้ม' },
        { cn: '膝盖', pinyin: 'xīgài', th: 'หัวเข่า' },
        { cn: '消毒', pinyin: 'xiāodú', th: 'ฆ่าเชื้อ / ล้างแผล' },
        { cn: '创可贴', pinyin: 'chuàngkětiē', th: 'พลาสเตอร์ยาปิดแผล' }
      ],
      tip: '"创可贴" (chuàngkětiē) แปลว่า พลาสเตอร์ยาติดแผล เป็นคำศัพท์ที่ใช้บ่อยมากในชีวิตประจำวัน'
    },
    {
      id: 'school-m4',
      categoryKey: 'school',
      category: 'ในโรงเรียน',
      level: 'medium',
      levelLabel: 'ปานกลาง',
      levelNum: 2,
      badgeColor: 'amber',
      icon: '📚',
      titleCn: '在学校图书馆借阅科普读物',
      titlePinyin: 'Zài xuéxiào túshūguǎn jièyuè kēpǔ dúwù',
      titleTh: 'ยืมหนังสือวิทยาศาสตร์น่ารู้ที่ห้องสมุดโรงเรียน',
      situation: 'การใช้ระบบค้นหาหนังสือ การสแกนบัตรนักเรียนเพื่อยืมหนังสือ และสอบถามกำหนดคืน',
      roles: {
        A: { name: '晨晨 (เฉินเฉิน)', avatar: '👦', label: 'นักเรียน' },
        B: { name: '图书管理员 (บรรณารักษ์)', avatar: '👩‍🏫', label: 'ครูบรรณารักษ์' }
      },
      lines: [
        { speaker: 'A', cn: '老师您好，我想借一本关于恐龙和太空百科全书。', pinyin: 'Lǎoshī nín hǎo, wǒ xiǎng jiè yì běn guānyú kǒnglóng hé tàikōng bǎikē quánshū.', th: 'อาจารย์สวัสดีครับ ผมอยากยืมสารานุกรมเกี่ยวกับไดโนเสาร์และอวกาศสักเล่มครับ' },
        { speaker: 'B', cn: '自然科学类的图书在三号书架第二层，你可以用旁边的电脑查询索书号。', pinyin: 'Zìrán kēxué lèi de túshū zài sān hào shūjià dì èr céng, nǐ kěyǐ yòng pángbiān de diànnǎo cháxún suǒshūhào.', th: 'หนังสือหมวดวิทยาศาสตร์ธรรมชาติอยู่ชั้นวางที่ 3 ชั้นที่ 2 จ้ะ เธอใช้คอมพิวเตอร์ข้างๆ ค้นหาเลขเรียกหนังสือได้เลย' },
        { speaker: 'A', cn: '我找到了！这本书图文并茂，我想借这本《神奇的宇宙》。', pinyin: 'Wǒ zhǎodào le! Zhè běn shū túwén bìngmào, wǒ xiǎng jiè zhè běn "Shénqí de yǔzhòu".', th: 'ผมเจอแล้วครับ! เล่มนี้ภาพประกอบสวยงามมาก ผมขอยืมเล่ม "จักรวาลมหัศจรรย์" เล่มนี้ครับ' },
        { speaker: 'B', cn: '请出示你的电子学生卡……借阅成功！借期是两个星期，最多可以借两本。', pinyin: 'Qǐng chūshì nǐ de diànzǐ xuéshēngkǎ... Jièyuè chénggōng! Jièqī shì liǎng gè xīngqī, zuìduō kěyǐ jiè liǎng běn.', th: 'แสดงบัตรนักเรียนดิจิทัลหน่อยจ้ะ... ยืมสำเร็จ! กำหนดยืมคือ 2 สัปดาห์ ยืมได้สูงสุด 2 เล่มนะ' },
        { speaker: 'A', cn: '好的，如果在期限内看不完，可以续借吗？', pinyin: 'Hǎo de, rúguǒ zài qīxiàn nèi kàn bu wán, kěyǐ xùjiè ma?', th: 'ครับผม ถ้าในกำหนดอ่านไม่ทัน สามารถต่ออายุการยืมได้ไหมครับ?' },
        { speaker: 'B', cn: '可以在学校公众号上在线续借一次，延长两周时间。', pinyin: 'Kěyǐ zài xuéxiào gōngzhònghào shang zàixiàn xùjiè yí cì, yáncháng liǎng zhōu shíjiān.', th: 'ต่ออายุออนไลน์ผ่านบัญชีทางการของโรงเรียนได้ 1 ครั้ง ขยายเวลาเพิ่มอีก 2 สัปดาห์จ้ะ' }
      ],
      keyVocab: [
        { cn: '借阅', pinyin: 'jièyuè', th: 'ยืมอ่าน' },
        { cn: '百科全书', pinyin: 'bǎikē quánshū', th: 'สารานุกรม' },
        { cn: '图文并茂', pinyin: 'túwén bìngmào', th: 'ภาพและเนื้อหาโดดเด่นสมบูรณ์' },
        { cn: '续借', pinyin: 'xùjiè', th: 'ต่อเวลายืมหนังสือ' },
        { cn: '学生卡', pinyin: 'xuéshēngkǎ', th: 'บัตรนักเรียน' }
      ],
      tip: '"图文并茂" (túwén bìngmào) เป็นสำนวนชมหนังสือที่มีทั้งรูปภาพและเนื้อหาสอดคล้องกันอย่างงดงาม'
    },
    {
      id: 'school-h3',
      categoryKey: 'school',
      category: 'ในโรงเรียน',
      level: 'hard',
      levelLabel: 'ยาก',
      levelNum: 3,
      badgeColor: 'rose',
      icon: '🏆',
      titleCn: '竞选少先队大队委的就职竞选演说',
      titlePinyin: 'Jìngxuǎn shàoxiānduì dàduìwěi de jiùzhí jìngxuǎn yǎnshuō',
      titleTh: 'การกล่าวสุนทรพจน์ลงสมัครรับเลือกตั้งประธานและคณะกรรมการนักเรียน',
      situation: 'การกล่าวสุนทรพจน์ต่อหน้านักเรียนทั้งโรงเรียน แสดงวิสัยทัศน์ในการจัดกิจกรรมและการรับใช้ส่วนรวม',
      roles: {
        A: { name: '竞选同学 (ผู้สมัคร)', avatar: '🧑‍🎓', label: 'ผู้ลงสมัคร' },
        B: { name: '大队辅导员 (อาจารย์ที่ปรึกษา)', avatar: '👩‍🏫', label: 'อาจารย์ที่ปรึกษา' }
      },
      lines: [
        { speaker: 'A', cn: '老师们、同学们，大家好！我是来自五（2）中队的李浩然，今天我竞选的岗位是大队组织委员。', pinyin: 'Lǎoshīmen, tóngxuémen, dàjiā hǎo! Wǒ shì láizì wǔ (èr) zhōngduì de Lǐ Hàorán, jīntiān wǒ jìngxuǎn de gǎngwèi shì dàduì zǔzhī wěiyuán.', th: 'สวัสดีคุณครูและเพื่อนๆ ทุกคนครับ! ผมชื่อหลี่ฮ่าวหราน จากห้อง ป.5/2 วันนี้ผมมาลงสมัครตำแหน่งกรรมการฝ่ายกิจกรรมนักเรียนครับ' },
        { speaker: 'B', cn: '浩然同学，如果成功当选，你打算如何调动各中队参与校园文化节的积极性？', pinyin: 'Hàorán tóngxué, rúguǒ chénggōng dāngxuǎn, nǐ dǎsuan rúhé diàodòng gè zhōngduì cānyù xiàoyuán wénhuàjié de jījíxìng?', th: 'นักเรียนฮ่าวหราน หากได้รับเลือกตั้ง เธอวางแผนจะปลุกพลังความกระตือรือร้นของเพื่อนๆ ทุกห้องในการร่วมงานเทศกาลวัฒนธรรมอย่างไร?' },
        { speaker: 'A', cn: '我将设立“班级创意提案箱”，让每位同学都能为校园活动出谋划策，践行“服务他人、快乐自己”的队训。', pinyin: 'Wǒ jiāng shèlì "bānjí chuàngyì tí’ànxiāng", ràng měi wèi tóngxué dōu néng wèi xiàoyuán huódòng chūmóuhuàcè, jiànxíng "fúwù tārén, kuàilè zìjǐ" de duìxùn.', th: 'ผมจะจัดตั้ง "กล่องรับไอเดียสร้างสรรค์ประจำห้อง" ให้ทุกคนได้ร่วมเสนอแนวคิด สานต่อคำขวัญ "รับใช้ผู้อื่น สุขใจตนเอง" ครับ' },
        { speaker: 'B', cn: '面对繁重的活动策划与日常学业，你将如何确保两者兼顾、相得益彰？', pinyin: 'Miànduì fánzhòng de huódòng cèhuà yǔ rìcháng xuéyè, nǐ jiāng rúhé quèbǎo liǎng zhě jiāngù, xiāngdéyìzhāng?', th: 'เมื่อต้องเจอกับงานวางแผนกิจกรรมที่หนักหน่วงและการเรียนปกติ เธอจะมั่นใจได้อย่างไรว่าจะดูแลทั้งสองอย่างควบคู่กันได้เป็นเลิศ?' },
        { speaker: 'A', cn: '我会制定严谨的周计划清单，依靠集体的智慧协同推进，绝不因班务工作落下功课！请大家投出宝贵的一票！', pinyin: 'Wǒ huì zhìdìng yánjǐn de zhōu jìhuà qīngdān, yīkào jítǐ de zhìhuì xiétóng tuījìn, jué bù yīn bānwù gōngzuò luòxià gōngkè! Qǐng dàjiā tóuchū bǎoguì de yí piào!', th: 'ผมจะจัดตารางเวลารายสัปดาห์อย่างรัดกุม รวมพลังความคิดของทีม และไม่มีวันปล่อยให้การเรียนตกหล่นเด็ดขาด! ขอคะแนนเสียงอันมีค่าจากทุกคนด้วยครับ!' }
      ],
      keyVocab: [
        { cn: '竞选', pinyin: 'jìngxuǎn', th: 'ลงสมัครรับเลือกตั้ง' },
        { cn: '出谋划策', pinyin: 'chūmóuhuàcè', th: 'ระดมสมอง / เสนอแผนการ' },
        { cn: '相得益彰', pinyin: 'xiāngdéyìzhāng', th: 'เกื้อหนุนส่งเสริมซึ่งกันและกัน' },
        { cn: '宝贵的一票', pinyin: 'bǎoguì de yí piào', th: 'คะแนนเสียงอันมีค่า' }
      ],
      tip: '"相得益彰" (xiāngdéyìzhāng) หมายถึง สิ่งสองสิ่งร่วมมือกันแล้วทำให้เกิดผลลัพธ์ที่ดียิ่งขึ้นไปอีก'
    },

    // --- หมวดซื้อของ-สั่งอาหาร (เพิ่มเติม) ---
    {
      id: 'food-e5',
      categoryKey: 'food-shopping',
      category: 'ซื้อของ-สั่งอาหาร',
      level: 'easy',
      levelLabel: 'ง่าย',
      levelNum: 1,
      badgeColor: 'emerald',
      icon: '🎨',
      titleCn: '在文具店买水彩笔和图画本',
      titlePinyin: 'Zài wénjùdiàn mǎi shuǐcǎibǐ hé túhuàběn',
      titleTh: 'ซื้อสีน้ำเมจิกและสมุดวาดเขียนที่ร้านเครื่องเขียน',
      situation: 'การเลือกซื้ออุปกรณ์สำหรับคาบเรียนศิลปะ การถามจำนวนสี และการนับเงิน',
      roles: {
        A: { name: '学生 (นักเรียน)', avatar: '🧒', label: 'เด็กนักเรียน' },
        B: { name: '文具店老板 (เจ้าของร้าน)', avatar: '👨‍💼', label: 'คนขายเครื่องเขียน' }
      },
      lines: [
        { speaker: 'A', cn: '叔叔好！明天我们要上美术课，请问有二十四色的水彩笔吗？', pinyin: 'Shūshu hǎo! Míngtiān wǒmen yào shàng měishù kè, qǐngwèn yǒu èrshísì sè de shuǐcǎibǐ ma?', th: 'คุณลุงสวัสดีครับ! พรุ่งนี้พวกเรามีเรียนศิลปะ ไม่ทราบว่ามีปากกาสีน้ำ 24 สีไหมครับ?' },
        { speaker: 'B', cn: '有的，在这里。这种是可以水洗的，弄到衣服上也能轻松洗掉。', pinyin: 'Yǒu de, zài zhèlǐ. Zhè zhǒng shì kěyǐ shuǐxǐ de, nòng dào yīfu shang yě néng qīngsōng xǐ diào.', th: 'มีจ้ะ อยู่ตรงนี้ แบบนี้สามารถซักออกด้วยน้ำได้ เปื้อนเสื้อผ้าก็ซักออกสบายๆ' },
        { speaker: 'A', cn: '太棒了！我还要一本大号的图画本和一盒油画棒。', pinyin: 'Tài bàng le! Wǒ hái yào yì běn dàhào de túhuàběn hé yì hé yóuhuàbàng.', th: 'เยี่ยมเลยครับ! ผมขอสมุดวาดเขียนเล่มใหญ่ 1 เล่ม กับสีชอล์กน้ำมัน 1 กล่องด้วยครับ' },
        { speaker: 'B', cn: '水彩笔十五块，图画本五块，油画棒八块，一共二十八块钱。', pinyin: 'Shuǐcǎibǐ shíwǔ kuài, túhuàběn wǔ kuài, yóuhuàbàng bā kuài, yígòng èrshíbā kuài qián.', th: 'สีน้ำ 15 หยวน, สมุดวาดเขียน 5 หยวน, สีชอล์ก 8 หยวน รวมทั้งหมด 28 หยวนจ้ะ' },
        { speaker: 'A', cn: '这是三十块钱，给您。', pinyin: 'Zhè shì sānshí kuài qián, gěi nín.', th: 'นี่เงิน 30 หยวนครับ ให้คุณลุงครับ' },
        { speaker: 'B', cn: '找你两块钱零钱，拿好发票，祝你画出最漂亮的画！', pinyin: 'Zhǎo nǐ liǎng kuài qián língqián, ná hǎo fāpiào, zhù nǐ huà chū zuì piàoliang de huà!', th: 'ทอนเงิน 2 หยวนจ้ะ เก็บใบเสร็จดีๆ ขอให้วาดรูปออกมาสวยที่สุดเลยนะ!' }
      ],
      keyVocab: [
        { cn: '水彩笔', pinyin: 'shuǐcǎibǐ', th: 'ปากกาสีน้ำเมจิก' },
        { cn: '水洗', pinyin: 'shuǐxǐ', th: 'ซักล้างออกด้วยน้ำ' },
        { cn: '图画本', pinyin: 'túhuàběn', th: 'สมุดวาดเขียน' },
        { cn: '找钱', pinyin: 'zhǎo qián', th: 'ทอนเงิน' },
        { cn: '零钱', pinyin: 'língqián', th: 'เงินทอน / เงินเหรียญ' }
      ],
      tip: '"找你两块" (Zhǎo nǐ liǎng kuài) หมายถึง ทอนเงินให้คุณ 2 หยวน'
    },
    {
      id: 'food-e6',
      categoryKey: 'food-shopping',
      category: 'ซื้อของ-สั่งอาหาร',
      level: 'easy',
      levelLabel: 'ง่าย',
      levelNum: 1,
      badgeColor: 'emerald',
      icon: '🎂',
      titleCn: '在蛋糕店预订一个水果生日蛋糕',
      titlePinyin: 'Zài dàngāodiàn yùdìng yí gè shuǐguǒ shēngrì dàngāo',
      titleTh: 'สั่งจองเค้กผลไม้วันเกิดที่ร้านเบเกอรี่',
      situation: 'การเลือกขนาดเค้ก รสชาติผลไม้ และเขียนข้อความอวยพรบนหน้าเค้ก',
      roles: {
        A: { name: '姐姐 (พี่สาว)', avatar: '👩', label: 'ผู้สั่งเค้ก' },
        B: { name: '甜品师 (เชฟเบเกอรี่)', avatar: '👨‍🍳', label: 'คนทำขนม' }
      },
      lines: [
        { speaker: 'A', cn: '您好，明天是我弟弟的八岁生日，我想订一个八寸的水果蛋糕。', pinyin: 'Nín hǎo, míngtiān shì wǒ dìdi de bā suì shēngrì, wǒ xiǎng dìng yí gè bā cùn de shuǐguǒ dàngāo.', th: 'สวัสดีค่ะ พรุ่งนี้วันเกิดน้องชายอายุครบ 8 ขวบ ฉันอยากสั่งเค้กผลไม้ขนาด 8 นิ้ว 1 ก้อนค่ะ' },
        { speaker: 'B', cn: '好的，夹心要芒果还是草莓？我们的动物奶油香浓不甜腻。', pinyin: 'Hǎo de, jiāxīn yào mángguǒ háishì cǎoméi? Wǒmen de dòngwù nǎiyóu xiāngnóng bù tiánnì.', th: 'ได้ครับ ไส้ตรงกลางรับเป็นมะม่วงหรือสตรอว์เบอร์รีดีครับ? วิปครีมของทางร้านหอมละมุนไม่หวานเลี่ยนครับ' },
        { speaker: 'A', cn: '要芒果夹心，上面请多放一些蓝莓和黄桃。', pinyin: 'Yào mángguǒ jiāxīn, shàngmiàn qǐng duō fàng yìxiē lánméi hé huángtáo.', th: 'เอามะม่วงค่ะ ด้านบนรบกวนวางบลูเบอร์รีกับพีชสีทองเยอะหน่อยนะคะ' },
        { speaker: 'B', cn: '没问题。巧克力插牌上需要写什么祝福语吗？', pinyin: 'Méi wèntí. Qiǎokèlì chāpái shang xūyào xiě shénme zhùfúyǔ ma?', th: 'ไม่มีปัญหาครับ ป้ายช็อกโกแลตต้องการเขียนข้อความอวยพรอะไรไหมครับ?' },
        { speaker: 'A', cn: '请写“祝乐乐八岁生日快乐，健康成长！”', pinyin: 'Qǐng xiě "Zhù Lèlè bā suì shēngrì kuàilè, jiànkāng chéngzhǎng!"', th: 'ช่วยเขียนว่า "สุขสันต์วันเกิดน้องเล่อเล่อครบ 8 ขวบ ขอให้เติบโตแข็งแรง!" ค่ะ' },
        { speaker: 'B', cn: '记下了，明天下午五点准时为您准备好蜡烛和餐具！', pinyin: 'Jìxià le, míngtiān xiàwǔ wǔ diǎn zhǔnshí wèi nín zhǔnbèi hǎo làzhú hé cānjù!', th: 'จดเรียบร้อยครับ พรุ่งนี้บ่าย 5 โมงตรงจะเตรียมเทียนวันเกิดและจานช้อนให้พร้อมครับ!' }
      ],
      keyVocab: [
        { cn: '预订', pinyin: 'yùdìng', th: 'จองล่วงหน้า' },
        { cn: '生日蛋糕', pinyin: 'shēngrì dàngāo', th: 'เค้กวันเกิด' },
        { cn: '夹心', pinyin: 'jiāxīn', th: 'ไส้ตรงกลาง' },
        { cn: '祝福语', pinyin: 'zhùfúyǔ', th: 'คำอวยพร' },
        { cn: '蜡烛', pinyin: 'làzhú', th: 'เทียน' }
      ],
      tip: '"健康成长" (jiànkāng chéngzhǎng) เป็นคำอวยพรเด็กยอดนิยม แปลว่า "ขอให้เติบโตอย่างแข็งแรงสดใส"'
    },
    {
      id: 'food-m4',
      categoryKey: 'food-shopping',
      category: 'ซื้อของ-สั่งอาหาร',
      level: 'medium',
      levelLabel: 'ปานกลาง',
      levelNum: 2,
      badgeColor: 'amber',
      icon: '🍲',
      titleCn: '一家人去吃四川鸳鸯火锅',
      titlePinyin: 'Yì jiā rén qù chī Sìchuān yuānyang huǒguō',
      titleTh: 'ครอบครัวไปทานสุกี้หม้อไฟเสฉวนแบบสองน้ำซุป (หยวนหยาง)',
      situation: 'การสั่งน้ำซุปหม้อไฟ ซุปกระดูกหมูไม่เผ็ดคู่กับซุปหมาล่า และการเลือกเนื้อสัตว์ผักสด',
      roles: {
        A: { name: '爸爸 (คุณพ่อ)', avatar: '👨', label: 'คุณพ่อ' },
        B: { name: '火锅店服务员 (บริกร)', avatar: '🧑‍🍳', label: 'พนักงานร้านหม้อไฟ' }
      },
      lines: [
        { speaker: 'B', cn: '欢迎光临！请问几位？锅底喜欢清汤还是麻辣？', pinyin: 'Huānyíng guānglín! Qǐngwèn jǐ wèi? Guōdǐ xǐhuan qīngtāng háishì málà?', th: 'ยินดีต้อนรับครับ! มากันกี่ท่านครับ? น้ำซุปชอบแบบซุปใสหรือซุปหมาล่าครับ?' },
        { speaker: 'A', cn: '一共三位，有小朋友不能吃辣，请给我们上一个“鸳鸯锅”。', pinyin: 'Yígòng sān wèi, yǒu xiǎopéngyou bù néng chī là, qǐng gěi wǒmen shàng yí gè "yuānyang guō".', th: 'มากัน 3 คนครับ มีเด็กทานเผ็ดไม่ได้ ขอสั่งเป็น "หม้อหยวนหยาง" (หม้อสองซุป) ครับ' },
        { speaker: 'B', cn: '好的，一边是菌菇大骨浓汤，一边是微辣牛油锅底。请问菜品扫码点还是看纸质菜单？', pinyin: 'Hǎo de, yìbiān shì jùngū dàgǔ nóngtāng, yìbiān shì wēilà niúyóu guōdǐ. Qǐngwèn càipǐn sǎo mǎ diǎn háishì kàn zhǐzhì càidān?', th: 'ได้ครับ ฝั่งหนึ่งเป็นซุปกระดูกหมูตุ๋นเห็ด อีกฝั่งเป็นซุปหมาล่าเผ็ดน้อย สั่งอาหารสแกนโค้ดหรือดูเมนูกระดาษดีครับ?' },
        { speaker: 'A', cn: '我们扫码点。先来两盘精品肥牛、一盘手工虾滑和一份冻豆腐。', pinyin: 'Wǒmen sǎo mǎ diǎn. Xiān lái liǎng pán jīngpǐn féiniú, yì pán shǒugōng xiāhuá hé yí fèn dòng dòufu.', th: 'พวกเราสแกนโค้ดสั่งครับ เอาเนื้อวัวสไลด์พรีเมียม 2 จาน, ลูกชิ้นกุ้งสดทำมือ 1 จาน และเต้าหู้แช่แข็ง 1 ที่ก่อนครับ' },
        { speaker: 'B', cn: '调料台在左侧，有二十多种蘸料和小水果，都是自助免费享用的。', pinyin: 'Tiáoliàotái zài zuǒcè, yǒu èrshí duō zhǒng zhànliào hé xiǎo shuǐguǒ, dōu shì zìzhù miǎnfèi xiǎngyòng de.', th: 'บาร์น้ำจิ้มอยู่ทางซ้าย มีน้ำจิ้มกว่า 20 ชนิดและผลไม้สด เป็นบุฟเฟต์บริการฟรีตักได้ตามสบายครับ' }
      ],
      keyVocab: [
        { cn: '鸳鸯锅', pinyin: 'yuānyang guō', th: 'หม้อไฟสองช่อง (เผ็ด + ไม่เผ็ด)' },
        { cn: '菌菇', pinyin: 'jùngū', th: 'เห็ดรวม' },
        { cn: '肥牛', pinyin: 'féiniú', th: 'เนื้อวัวสไลด์ติดมัน' },
        { cn: '虾滑', pinyin: 'xiāhuá', th: 'กุ้งบดสดปั้นก้อน' },
        { cn: '蘸料', pinyin: 'zhànliào', th: 'น้ำจิ้ม' }
      ],
      tip: '"鸳鸯锅" (yuānyang guō) นกเป็ดน้ำคู่รัก เป็นชื่อเรียกหม้อไฟ 2 ฝั่ง ฝั่งหนึ่งเผ็ดจัดจ้าน อีกฝั่งซุปใสกลมกล่อม'
    },
    {
      id: 'food-h2',
      categoryKey: 'food-shopping',
      category: 'ซื้อของ-สั่งอาหาร',
      level: 'hard',
      levelLabel: 'ยาก',
      levelNum: 3,
      badgeColor: 'rose',
      icon: '🥮',
      titleCn: '挑选非遗传统中秋月饼礼盒赠送师长',
      titlePinyin: 'Tiāoxuǎn fēiyí chuántǒng Zhōngqiū yuèbǐng lǐhé zèngsòng shīzhǎng',
      titleTh: 'เลือกซื้อกล่องของขวัญขนมไหว้พระจันทร์สูตรโบราณเพื่อมอบแสดงความเคารพแด่ครูบาอาจารย์',
      situation: 'การเลือกขนมไหว้พระจันทร์ในเทศกาล การสอบถามไส้ดั้งเดิมและความหมายมงคลของการระลึกถึงพระคุณครู',
      roles: {
        A: { name: '学生家长 (ผู้ปกครอง)', avatar: '👩', label: 'ผู้ปกครอง' },
        B: { name: '老字号掌柜 (ผู้จัดการร้าน)', avatar: '👨‍💼', label: 'ผู้จัดการร้านโบราณ' }
      },
      lines: [
        { speaker: 'A', cn: '掌柜您好，适逢中秋佳节，我想挑选两盒包装典雅、口感正宗的月饼登门拜访恩师。', pinyin: 'Zhǎngguì nín hǎo, shìféng Zhōngqiū jiājié, wǒ xiǎng tiāoxuǎn liǎng hé bāozhuāng diǎnyǎ, kǒugǎn zhèngzōng de yuèbǐng dēngmén bàifǎng ēnshī.', th: 'สวัสดีค่ะหลงจู๊ เนื่องในเทศกาลไหว้พระจันทร์ ฉันอยากเลือกกล่องของขวัญขนมไหว้พระจันทร์ที่กล่องเรียบหรูรสชาติดั้งเดิม 2 กล่องไปกราบอาจารย์ค่ะ' },
        { speaker: 'B', cn: '尊师重道乃美德！我向您隆重推荐这款“花好月圆”礼盒，内含经典的双黄纯白莲蓉与金腿五仁。', pinyin: 'Zūnshī zhòngdào nǎi měidé! Wǒ xiàng nín lóngzhòng tuījiàn zhè kuǎn "huāhǎoyuèyuán" lǐhé, nèihán jīngdiǎn de shuānghuáng chún báilíanróng yǔ jīntuǐ wǔrén.', th: 'การเคารพครูบาอาจารย์เป็นคุณธรรมอันประเสริฐ! ขอแนะนำกล่อง "ดอกไม้งามจันทร์กระจ่าง" ด้านในมีไส้ลูกบัวขาวไข่คู่ และไส้โหงวยิ้งแฮมยูนนาน' },
        { speaker: 'A', cn: '现在很多长辈注重健康养生，这款月饼在控糖工艺方面有何考量？', pinyin: 'Xiànzài hěn duō zhǎngbèi zhùzhòng jiànkāng yǎngshēng, zhè kuǎn yuèbǐng zài kòngtáng gōngyì fāngmiàn yǒu hé kǎoliang?', th: 'ปัจจุบันผู้ใหญ่หลายท่านใส่ใจเรื่องสุขภาพเป็นพิเศษ ขนมไหว้พระจันทร์ชุดนี้มีกรรมวิธีควบคุมน้ำตาลอย่างไรบ้างคะ?' },
        { speaker: 'B', cn: '我们严格采用天然木糖醇代替蔗糖，既保留了甘甜醇厚的层次感，又减轻了糖分负担，老少皆宜。', pinyin: 'Wǒmen yángé cǎiyòng tiānrán mùtángchún dàitì zhètáng, jì bǎoliú le gāntián chúnhòu de céngcìgǎn, yòu jiǎnqīng le tángfèn fùdān, lǎoshào jiē yí.', th: 'ทางเราใช้ไซลิทอลธรรมชาติแทนนน้ำตาลทราย ยังคงรสหวานกลมกล่อมนุ่มนวล แต่ไร้กังวลเรื่องน้ำตาล เหมาะกับผู้ใหญ่มากครับ' },
        { speaker: 'A', cn: '考虑得真周全，请帮我系上红色如意结丝带，非常感谢！', pinyin: 'Kǎolǜ de zhēn zhōuquán, qǐng bāng wǒ jì shàng hóngsè rúyìjié sīdài, fēicháng gǎnxiè!', th: 'คิดได้อย่างรอบคอบจริงๆ ช่วยผูกโบไหมสีแดงลายหรูอี้ให้ด้วยนะคะ ขอบคุณมากค่ะ!' }
      ],
      keyVocab: [
        { cn: '中秋佳节', pinyin: 'Zhōngqiū jiājié', th: 'เทศกาลไหว้พระจันทร์' },
        { cn: '尊师重道', pinyin: 'zūnshī zhòngdào', th: 'เคารพครูอาจารย์และเชิดชูคุณธรรม' },
        { cn: '莲蓉', pinyin: 'liánróng', th: 'ไส้ลูกบัวกวน' },
        { cn: '花好月圆', pinyin: 'huāhǎoyuèyuán', th: 'ดอกไม้งามพระจันทร์เต็มดวง (ความสมบูรณ์พูนสุข)' },
        { cn: '养生', pinyin: 'yǎngshēng', th: 'การบำรุงสุขภาพ' }
      ],
      tip: '"花好月圆" (huāhǎoyuèyuán) เป็นสำนวนจีนมงคลที่ใช้ในเทศกาลไหว้พระจันทร์ เปรียบเหมือนครอบครัวได้อยู่พร้อมหน้าอย่างอบอุ่น'
    },

    // --- หมวดเดินทาง (เพิ่มเติม) ---
    {
      id: 'travel-e5',
      categoryKey: 'travel',
      category: 'เดินทาง',
      level: 'easy',
      levelLabel: 'ง่าย',
      levelNum: 1,
      badgeColor: 'emerald',
      icon: '🚌',
      titleCn: '每天早上排队安全坐校车',
      titlePinyin: 'Měitiān zǎoshang páiduì ānquán zuò xiàochē',
      titleTh: 'เข้าแถวขึ้นรถรับส่งนักเรียนอย่างปลอดภัยทุกเช้า',
      situation: 'การรอขึ้นรถโรงเรียนอย่างเป็นระเบียบ การทักทายคุณลุงคนขับ และการคาดเข็มขัดนิรภัย',
      roles: {
        A: { name: '学生 (นักเรียน)', avatar: '🧒', label: 'นักเรียน' },
        B: { name: '校车司机伯伯 (ลุงคนขับรถ)', avatar: '👨‍✈️', label: 'คนขับรถโรงเรียน' }
      },
      lines: [
        { speaker: 'A', cn: '司机伯伯，早上好！', pinyin: 'Sījī bóbo, zǎoshang hǎo!', th: 'คุณลุงคนขับ สวัสดีตอนเช้าครับ!' },
        { speaker: 'B', cn: '早上好！慢点上车，扶好扶手。', pinyin: 'Zǎoshang hǎo! Màn diǎn shàng chē, fú hǎo fúshǒu.', th: 'อรุณสวัสดิ์จ้ะ! ค่อยๆ ก้าวขึ้นรถ จับราวมือจับให้มั่นคงนะ' },
        { speaker: 'A', cn: '我已经坐好在座位上了，这就系好安全带。', pinyin: 'Wǒ yǐjīng zuò hǎo zài zuòwèi shang le, zhè jiù jì hǎo ānquándài.', th: 'ผมนั่งประจำที่เรียบร้อยแล้วครับ เดี๋ยวคาดเข็มขัดนิรภัยเลย' },
        { speaker: 'B', cn: '真乖！在车上不能把头和手伸出窗外，知道吗？', pinyin: 'Zhēn guāi! Zài chē shang bù néng bǎ tóu hé shǒu shēn chū chuāngwài, zhīdào ma?', th: 'เด็กดีมาก! อยู่บนรถห้ามยื่นศีรษะและมือออกไปนอกหน้าต่างเด็ดขาด เข้าใจไหมจ๊ะ?' },
        { speaker: 'A', cn: '知道！老师说过“安全第一，文明乘车”。', pinyin: 'Zhīdào! Lǎoshī shuō guò "ānquán dì-yī, wénmíng chéngchē".', th: 'ทราบครับ! คุณครูเคยสอนไว้ว่า "ปลอดภัยไว้ก่อน โดยสารอย่างมีมารยาท" ครับ' },
        { speaker: 'B', cn: '好样的，坐稳了，校车出发去学校！', pinyin: 'Hǎoyàng de, zuò wěn le, xiàochē chūfā qù xuéxiào!', th: 'เก่งมากจ้ะ นั่งตัวตรงมั่นคงนะ รถโรงเรียนออกเดินทางไปโรงเรียนแล้ว!' }
      ],
      keyVocab: [
        { cn: '校车', pinyin: 'xiàochē', th: 'รถรับส่งนักเรียน (รถโรงเรียน)' },
        { cn: '扶手', pinyin: 'fúshǒu', th: 'ราวจับ' },
        { cn: '安全带', pinyin: 'ānquándài', th: 'เข็มขัดนิรภัย' },
        { cn: '窗外', pinyin: 'chuāngwài', th: 'นอกหน้าต่าง' },
        { cn: '文明乘车', pinyin: 'wénmíng chéngchē', th: 'โดยสารรถอย่างมีมารยาท' }
      ],
      tip: '"文明乘车" (wénmíng chéngchē) คือ การมีมารยาทในการโดยสาร เช่น ไม่ส่งเสียงดัง และคาดเข็มขัดนิรภัย'
    },
    {
      id: 'travel-e6',
      categoryKey: 'travel',
      category: 'เดินทาง',
      level: 'easy',
      levelLabel: 'ง่าย',
      levelNum: 1,
      badgeColor: 'emerald',
      icon: '🚣',
      titleCn: '周末去北海公园租小船划船',
      titlePinyin: 'Zhōumò qù Běihǎi gōngyuán zū xiǎochuán huáchuán',
      titleTh: 'วันหยุดสุดสัปดาห์ไปเช่าเรือพายเล่นที่สวนสาธารณะเป๋ยไห่',
      situation: 'การเช่าเรือเป็ดถีบในสวนสาธารณะ การสวมเสื้อชูชีพ และพายเรือชมดอกบัว',
      roles: {
        A: { name: '小朋友 (เด็กน้อย)', avatar: '👦', label: 'เด็กน้อย' },
        B: { name: '码头工作人员 (เจ้าหน้าที่ท่าเรือ)', avatar: '👨‍✈️', label: 'เจ้าหน้าที่คุมเรือ' }
      },
      lines: [
        { speaker: 'A', cn: '叔叔，我们想租一只四人座的小黄鸭脚踏船。', pinyin: 'Shūshu, wǒmen xiǎng zū yì zhī sì rén zuò de xiǎohuángyā jiǎotàchuán.', th: 'คุณน้าครับ พวกเราอยากเช่าเรือเป็ดเหลืองถีบ 4 ที่นั่ง 1 ลำครับ' },
        { speaker: 'B', cn: '好的，押金一百元，租金每小时八十元。所有人上船前必须穿好救生衣。', pinyin: 'Hǎo de, yājīn yìbǎi yuán, zūjīn měi xiǎoshí bāshí yuán. Suǒyǒu rén shàng chuán qián bìxū chuān hǎo jiùshēngyī.', th: 'ได้ครับ มัดจำ 100 หยวน ค่าเช่าชั่วโมงละ 80 หยวน ทุกคนก่อนลงเรือต้องสวมเสื้อชูชีพให้เรียบร้อยนะ' },
        { speaker: 'A', cn: '救生衣已经穿好了！请问湖中心那座白色的塔叫什么？', pinyin: 'Jiùshēngyī yǐjīng chuān hǎo le! Qǐngwèn hú zhōngxīn nà zuò báisè de tǎ jiào shénme?', th: 'สวมเสื้อชูชีพเรียบร้อยแล้วครับ! ขอถามหน่อยเจดีย์สีขาวตรงใจกลางทะเลสาบชื่ออะไรครับ?' },
        { speaker: 'B', cn: '那是著名的北海白塔。你们可以一边踩踏板，一边听微风吹过柳树的声音。', pinyin: 'Nà shì zhùmíng de Běihǎi bái tǎ. Nǐmen kěyǐ yìbiān cǎi tàbǎn, yìbiān tīng wēifēng chuī guò liǔshù de shēngyīn.', th: 'นั่นคือเจดีย์ขาวเป๋ยไห่อันเลื่องชื่อจ้ะ พวกเธอสามารถถีบเรือไปด้วย และฟังเสียงสายลมพัดผ่านกิ่งหลิวไปด้วย' },
        { speaker: 'A', cn: '就像课本里唱的《让我们荡起双桨》一样美！', pinyin: 'Jiù xiàng kèběn lǐ chàng de "Ràng wǒmen dàng qǐ shuāng jiǎng" yíyàng měi!', th: 'สวยงามเหมือนในบทเรียนเพลง "ให้พวกเราพายเรือคู่ไปด้วยกัน" เลยครับ!' }
      ],
      keyVocab: [
        { cn: '脚踏船', pinyin: 'jiǎotàchuán', th: 'เรือถีบ (Pedal Boat)' },
        { cn: '押金', pinyin: 'yājīn', th: 'เงินมัดจำ' },
        { cn: '救生衣', pinyin: 'jiùshēngyī', th: 'เสื้อชูชีพ' },
        { cn: '白塔', pinyin: 'bái tǎ', th: 'เจดีย์สีขาว' },
        { cn: '湖', pinyin: 'hú', th: 'ทะเลสาบ' }
      ],
      tip: 'เพลง "让我们荡起双桨" (Ràng wǒmen dàng qǐ shuāng jiǎng) คือ เพลงเด็กคลาสสิกอมตะที่ชาวจีนทุกคนร้องได้'
    },
    {
      id: 'travel-m4',
      categoryKey: 'travel',
      category: 'เดินทาง',
      level: 'medium',
      levelLabel: 'ปานกลาง',
      levelNum: 2,
      badgeColor: 'amber',
      icon: '🚠',
      titleCn: '乘坐空中缆车登上八达岭长城',
      titlePinyin: 'Chéngzuò kōngzhōng lǎnchē dēngshàng Bādálǐng chángchéng',
      titleTh: 'นั่งกระเช้าลอยฟ้าขึ้นสู่กำแพงเมืองจีนปาต๋าหลิ่ง',
      situation: 'การขึ้นกระเช้าลอยฟ้า ชมทัศนียภาพภูเขา และการเดินชมป้อมปราการบนกำแพงเมืองจีน',
      roles: {
        A: { name: '导游 (มัคคุเทศก์)', avatar: '🚩', label: 'ไกด์นำเที่ยว' },
        B: { name: '游客 (นักท่องเที่ยว)', avatar: '🧑', label: 'นักท่องเที่ยว' }
      },
      lines: [
        { speaker: 'A', cn: '大家请抓紧扶手，我们现在乘坐缆车直达长城最高峰——北八楼。', pinyin: 'Dàjiā qǐng zhuājǐn fúshǒu, wǒmen xiànzài chéngzuò lǎnchē zhídá chángchéng zuì gāofēng——Běi bā lóu.', th: 'ทุกคนจับราวยึดให้มั่นนะ ตอนนี้พวกเรากำลังขึ้นกระเช้าลอยฟ้าตรงสู่ยอดเขาที่สูงที่สุดของกำแพงเมืองจีน คือ ป้อมเหนือ 8' },
        { speaker: 'B', cn: '从空中看下去太壮观了！长城宛如巨龙在群山之间起伏蜿蜒。', pinyin: 'Cóng kōngzhōng kàn xiàqu tài zhuàngguān le! Chángchéng wǎnrú jùlóng zài qúnshān zhījiān qǐfú wānyán.', th: 'มองลงมาจากบนฟ้าอลังการตระการตามาก! กำแพงเมืองจีนเปรียบเสมือนมังกรยักษ์เลื้อยลัดเลาะไปตามแนวเทือกเขา' },
        { speaker: 'A', cn: '没错，八达岭长城是明长城最精华的一段。俗话说：“不到长城非好汉！”', pinyin: 'Méi cuò, Bādálǐng chángchéng shì Míng chángchéng zuì jīnghuá de yí duàn. Súhuà shuō: "Bú dào chángchéng fēi hǎohàn!"', th: 'ถูกต้องครับ กำแพงเมืองจีนด่านปาต๋าหลิ่งคือจุดที่สมบูรณ์ที่สุดของสมัยราชวงศ์หมิง ดังสุภาษิตที่ว่า "ไม่ถึงกำแพงเมืองจีน ไม่ใช่ผู้กล้า!"' },
        { speaker: 'B', cn: '今天终于登上来了，感觉自己也是个“好汉”了！', pinyin: 'Jīntiān zhōngyú dēng shànglai le, gǎnjué zìjǐ yě shì gè "hǎohàn" le!', th: 'วันนี้ในที่สุดก็ได้ขึ้นมาถึง รู้สึกว่าตัวเองกลายเป็น "ผู้กล้า" แล้วครับ!' },
        { speaker: 'A', cn: '长城台阶比较陡峭，大家游览拍照时一定要“走路不看景，看景不走路”。', pinyin: 'Chángchéng táijiē bǐjiào dǒuqiào, dàjiā yóulǎn pāizhào shí yídìng yào "zǒulù bú kàn jǐng, kàn jǐng bù zǒulù".', th: 'ขั้นบันไดกำแพงเมืองจีนค่อนข้างชัน เวลาถ่ายรูปขอให้จำกฎทอง: "เดินอย่าดูวิว จะดูวิวให้หยุดเดิน" นะครับ' }
      ],
      keyVocab: [
        { cn: '缆车', pinyin: 'lǎnchē', th: 'กระเช้าลอยฟ้า (Cable car)' },
        { cn: '壮观', pinyin: 'zhuàngguān', th: 'อลังการตระการตา' },
        { cn: '不到长城非好汉', pinyin: 'bú dào chángchéng fēi hǎohàn', th: 'ไม่ถึงกำแพงเมืองจีน ไม่ใช่ผู้กล้า' },
        { cn: '陡峭', pinyin: 'dǒuqiào', th: 'ลาดชัน' },
        { cn: '好汉', pinyin: 'hǎohàn', th: 'ผู้กล้า / วีรบุรุษ' }
      ],
      tip: '"不到长城非好汉" เป็นประโยคทองยอดนิยมระดับโลก หมายถึง การมีความมุ่งมั่นตั้งใจฟันฝ่าอุปสรรคจนถึงจุดหมาย'
    },
    {
      id: 'travel-h2',
      categoryKey: 'travel',
      category: 'เดินทาง',
      level: 'hard',
      levelLabel: 'ยาก',
      levelNum: 3,
      badgeColor: 'rose',
      icon: '🏛️',
      titleCn: '游览故宫博物院并聆听专家古建历史讲解',
      titlePinyin: 'Yóulǎn Gùgōng bówùyuàn bìng língtīng zhuānjiā gǔjiàn lìshǐ jiǎngjiě',
      titleTh: 'ชมนิทรรศการพระราชวังต้องห้ามและรับฟังบรรยายประวัติศาสตร์สถาปัตยกรรมโบราณจากผู้เชี่ยวชาญ',
      situation: 'การเยี่ยมชมพระราชวังโบราณ การศึกษาแนวแกนกลางสถาปัตยกรรมจีน และปรัชญา "ฟ้าคนรวมเป็นหนึ่ง"',
      roles: {
        A: { name: '古建研究员 (นักวิจัยสถาปัตยกรรม)', avatar: '📜', label: 'ผู้เชี่ยวชาญประวัติศาสตร์' },
        B: { name: '建筑系学子 (นักศึกษา)', avatar: '🧑‍🎓', label: 'ผู้เข้าชม' }
      },
      lines: [
        { speaker: 'A', cn: '各位请看眼前的太和殿，这是紫禁城中规制最高、体量最大的木结构宫殿建筑。', pinyin: 'Gèwèi qǐng kàn yǎnqián de Tàihédiàn, zhè shì Zǐjìnchéng zhōng guīzhì zuì gāo, tǐliàng zuì dà de mù jiégòu gōngdiàn jiànzhù.', th: 'ทุกท่านเชิญทอดสายตาดูพระที่นั่งไท่เหอเตี้ยนตรงหน้า นี่คือพระราชวังโครงสร้างไม้ที่มีฐานันดรศักดิ์สูงสุดและขนาดใหญ่ที่สุดในพระราชวังต้องห้ามครับ' },
        { speaker: 'B', cn: '老师，我注意到屋顶重檐庑殿顶的脊兽竟然有十个之多，这在全国古建筑中绝无仅有吧？', pinyin: 'Lǎoshī, wǒ zhùyì dào wūdǐng chóngyán wǔdiàndǐng de jǐshòu jìngrán yǒu shí gè zhī duō, zhè zài quánguó gǔ jiànzhù zhōng juéwújǐnyǒu ba?', th: 'อาจารย์ครับ ผมสังเกตเห็นสัตว์มงคลบนสันหลังคามีถึง 10 ตัว นี่ถือเป็นหนึ่งเดียวในบรรดาสถาปัตยกรรมโบราณทั่วประเทศจีนเลยใช่ไหมครับ?' },
        { speaker: 'A', cn: '观察得非常细致！自骑凤仙人之后依次排列十只神兽，象征着皇权至高无上与风调雨顺的祈愿。', pinyin: 'Guānchá de fēicháng xìzhì! Zì qí fèng xiānrén zhīhòu yīcì páiliè shí zhī shénshòu, xiàngzhēng zhe huángquán zhìgāo-wúshàng yǔ fēngtiáo-yǔshùn de qíyuàn.', th: 'ช่างสังเกตได้ละเอียดมาก! สัตว์เทพทั้ง 10 ตัว เรียงต่อจากเทพขี่หงส์ สื่อถึงพระราชอำนาจอันสูงสุดและความปรารถนาให้ฟ้าฝนตกต้องตามฤดูกาล' },
        { speaker: 'B', cn: '整座故宫严格坐落于北京城的中轴线上，充分体现了中国古代“天人合一”与尊崇礼制的世界观。', pinyin: 'Zhěng zuò Gùgōng yángé zuòluò yú Běijīng chéng de zhōngzhóuxiàn shang, chōngfèn tǐxiàn le Zhōngguó gǔdài "tiān rén hé yī" yǔ zūnchóng lǐzhì de shìjièguān.', th: 'พระราชวังต้องห้ามทั้งหลังวางตัวอยู่บนแนวแกนกลางของกรุงปักกิ่งอย่างเคร่งครัด สะท้อนโลกทัศน์ "ฟ้าและมนุษย์รวมเป็นหนึ่ง" อย่างสมบูรณ์' },
        { speaker: 'A', cn: '六百年的红墙黄瓦，不仅是凝固的史诗，更是中华文明生生不息的精神载体。', pinyin: 'Liùbǎi nián de hóng qiáng huáng wǎ, bùjǐn shì nínggù de shǐshī, gèng shì Zhōnghuá wénmíng shēngshēngbùxī de jīngshén zàitǐ.', th: 'กำแพงสีแดงและกระเบื้องสีเหลืองตลอด 600 ปี ไม่เพียงเป็นมหากาพย์ประวัติศาสตร์ แต่ยังเป็นจิตวิญญาณแห่งอารยธรรมจีนที่สืบทอดอย่างไม่รู้จบ' }
      ],
      keyVocab: [
        { cn: '太和殿', pinyin: 'Tàihédiàn', th: 'พระที่นั่งไท่เหอ' },
        { cn: '绝无仅有', pinyin: 'juéwújǐnyǒu', th: 'หนึ่งเดียวไม่มีสอง' },
        { cn: '风调雨顺', pinyin: 'fēngtiáo-yǔshùn', th: 'ดินฟ้าอากาศสมบูรณ์ ฝนตกต้องตามฤดูกาล' },
        { cn: '中轴线', pinyin: 'zhōngzhóuxiàn', th: 'แนวแกนกลางของเมือง' },
        { cn: '天人合一', pinyin: 'tiān rén hé yī', th: 'ฟ้าและมนุษย์ผสานเป็นหนึ่งเดียว (ปรัชญาจีน)' }
      ],
      tip: '"天人合一" (tiān rén hé yī) เป็นปรัชญาโบราณที่ลึกซึ้งที่สุดของจีน หมายถึง ความกลมกลืนเป็นหนึ่งเดียวกันระหว่างธรรมชาติกับมนุษย์'
    },

    // --- หมวดในที่ทำงาน (เพิ่มเติม) ---
    {
      id: 'work-e3',
      categoryKey: 'workplace',
      category: 'ในที่ทำงาน',
      level: 'easy',
      levelLabel: 'ง่าย',
      levelNum: 1,
      badgeColor: 'emerald',
      icon: '📮',
      titleCn: '去邮局寄明信片给远方的朋友',
      titlePinyin: 'Qù yóujú jì míngxìnpiàn gěi yuǎnfāng de péngyou',
      titleTh: 'ไปที่ทำการไปรษณีย์ส่งโปสการ์ดให้เพื่อนที่อยู่แดนไกล',
      situation: 'การซื้อแสตมป์ การเขียนรหัสไปรษณีย์ และการหยอดตู้ไปรษณีย์สีเขียว',
      roles: {
        A: { name: '寄信人 (คนส่งจดหมาย)', avatar: '👦', label: 'ผู้ส่ง' },
        B: { name: '邮局营业员 (เจ้าหน้าที่ไปรษณีย์)', avatar: '👩‍💼', label: 'พนักงานไปรษณีย์' }
      },
      lines: [
        { speaker: 'A', cn: '阿姨您好，我想买两张寄往泰国的航空邮票，贴在明信片上。', pinyin: 'Āyí nín hǎo, wǒ xiǎng mǎi liǎng zhāng jì wǎng Tàiguó de hángkōng yóupiào, tiē zài míngxìnpiàn shang.', th: 'คุณน้าสวัสดีครับ ผมอยากซื้อแสตมป์ไปรษณีย์อากาศส่งไปประเทศไทย 2 ดวง เพื่อติดบนโปสการ์ดครับ' },
        { speaker: 'B', cn: '国际明信片航空邮票是四块五一张，两张一共九块钱。', pinyin: 'Guójì míngxìnpiàn hángkōng yóupiào shì sì kuài wǔ yì zhāng, liǎng zhāng yígòng jiǔ kuài qián.', th: 'แสตมป์ไปรษณีย์อากาศระหว่างประเทศดวงละ 4.5 หยวนจ้ะ 2 ดวง รวมเป็น 9 หยวน' },
        { speaker: 'A', cn: '好的，请问邮政编码写在右上角还是左上角？', pinyin: 'Hǎo de, qǐngwèn yóuzhèng biānmǎ xiě zài yòushàngjiǎo háishì zuǒshàngjiǎo?', th: 'ครับ รบกวนถามหน่อยรหัสไปรษณีย์ต้องเขียนตรงมุมบนขวาหรือมุมบนซ้ายครับ?' },
        { speaker: 'B', cn: '六位邮政编码填在左上角的红色格子里，收件人地址写在右侧。', pinyin: 'Liù wèi yóuzhèng biānmǎ tián zài zuǒshàngjiǎo de hóngsè gézi lǐ, shōujiànrén dìzhǐ xiě zài yòucè.', th: 'รหัสไปรษณีย์ 6 หลักกรอกในช่องสี่เหลี่ยมสีแดงมุมบนซ้ายจ้ะ ส่วนที่อยู่ผู้รับเขียนฝั่งขวามือนะ' },
        { speaker: 'A', cn: '粘好邮票了，可以直接投进门外的绿色邮箱吗？', pinyin: 'Zhān hǎo yóupiào le, kěyǐ zhíjiē tóujìn ménwài de lǜsè yóuxiāng ma?', th: 'ติดแสตมป์เรียบร้อยแล้ว หยอดลงตู้ไปรษณีย์สีเขียวหน้าประตูได้เลยไหมครับ?' },
        { speaker: 'B', cn: '可以的，每天下午四点邮递员叔叔会准时开箱取信！', pinyin: 'Kěyǐ de, měitiān xiàwǔ sì diǎn yóudìyuán shūshu huì zhǔnshí kāixiāng qǔxìn!', th: 'หยอดได้เลยจ้ะ ทุกบ่าย 4 โมง บุรุษไปรษณีย์จะมาเปิดตู้เก็บจดหมายตรงเวลาจ้ะ!' }
      ],
      keyVocab: [
        { cn: '邮局', pinyin: 'yóujú', th: 'ที่ทำการไปรษณีย์' },
        { cn: '明信片', pinyin: 'míngxìnpiàn', th: 'โปสการ์ด' },
        { cn: '邮票', pinyin: 'yóupiào', th: 'แสตมป์' },
        { cn: '邮政编码', pinyin: 'yóuzhèng biānmǎ', th: 'รหัสไปรษณีย์' },
        { cn: '邮箱', pinyin: 'yóuxiāng', th: 'ตู้จดหมาย / ตู้ไปรษณีย์' }
      ],
      tip: 'ตู้ไปรษณีย์และเครื่องแบบบุรุษไปรษณีย์ของประเทศจีนเป็น "สีเขียว" (绿色) อันเป็นเอกลักษณ์'
    },
    {
      id: 'work-m5',
      categoryKey: 'workplace',
      category: 'ในที่ทำงาน',
      level: 'medium',
      levelLabel: 'ปานกลาง',
      levelNum: 2,
      badgeColor: 'amber',
      icon: '🏦',
      titleCn: '去银行柜台办理一张儿童储蓄卡',
      titlePinyin: 'Qù yínháng guìtái bànlǐ yì zhāng értóng chǔxùkǎ',
      titleTh: 'ไปที่เคาน์เตอร์ธนาคารเปิดบัตรเดบิตออมทรัพย์สำหรับเด็ก',
      situation: 'การเปิดบัญชีเงินฝาก การฝากเงินอั่งเปาของเด็กๆ และการตั้งรหัสผ่าน 6 หลัก',
      roles: {
        A: { name: '妈妈带孩子 (แม่และลูก)', avatar: '👩‍👦', label: 'ผู้มาเปิดบัญชี' },
        B: { name: '银行柜员 (พนักงานธนาคาร)', avatar: '🧑‍💼', label: 'พนักงานเคาน์เตอร์' }
      },
      lines: [
        { speaker: 'A', cn: '您好，我想带孩子开一张专属的儿童压岁钱储蓄卡，培养他的理财意识。', pinyin: 'Nín hǎo, wǒ xiǎng dài háizi kāi yì zhāng zhuānshǔ de értóng yāsuìqián chǔxùkǎ, péiyǎng tā de lǐcái yìshí.', th: 'สวัสดีค่ะ ฉันอยากพาลูกมาเปิดบัตรออมทรัพย์เงินอั่งเปาสำหรับเด็ก เพื่อปลูกฝังวินัยการเงินให้เขาค่ะ' },
        { speaker: 'B', cn: '太有远见了！请出示户口本、家长的身份证，并在申请表上签字确认。', pinyin: 'Tài yǒu yuǎnjiàn le! Qǐng chūshì hùkǒuběn, jiāzhǎng de shēnfènzhèng, bìng zài shēnqǐngbiǎo shang qiānzì quèrèn.', th: 'มีวิสัยทัศน์มากครับ! รบกวนแสดงทะเบียนบ้าน บัตรประชาชนผู้ปกครอง และเซ็นชื่อในใบสมัครครับ' },
        { speaker: 'A', cn: '这是孩子积攒的一千块压岁钱，今天一起存进去。', pinyin: 'Zhè shì háizi jīzǎn de yìqiān kuài yāsuìqián, jīntiān yìqǐ cún jìnqu.', th: 'นี่คือเงินอั่งเปา 1,000 หยวนที่ลูกสะสมไว้ วันนี้ฝากเข้าบัญชีพร้อมกันเลยค่ะ' },
        { speaker: 'B', cn: '好的，小朋友请看密码键盘，按下六位数字作为你的银行卡取款密码。', pinyin: 'Hǎo de, xiǎopéngyou qǐng kàn mìmǎ jiànpán, ànxià liù wèi shùzì zuòwéi nǐ de yínhángkǎ qǔkuǎn mìmǎ.', th: 'ได้ครับ หนูน้อยมองที่แป้นกดรหัสนะ กดตัวเลข 6 หลักเพื่อตั้งเป็นรหัสผ่านถอนเงินของบัตรหนูนะ' },
        { speaker: 'A', cn: '办好了，卡面是可爱的生肖图案，孩子特别喜欢！', pinyin: 'Bàn hǎo le, kǎmiàn shì kě’ài de shēngxiào tú’àn, háizi tèbié xǐhuan!', th: 'เรียบร้อยแล้ว หน้าบัตรเป็นลาย 12 นักษัตรน่ารักมากลูกชอบมากค่ะ!' }
      ],
      keyVocab: [
        { cn: '储蓄卡', pinyin: 'chǔxùkǎ', th: 'บัตรเดบิต / บัตรเงินฝาก' },
        { cn: '压岁钱', pinyin: 'yāsuìqián', th: 'เงินอั่งเปาตรุษจีน' },
        { cn: '理财', pinyin: 'lǐcái', th: 'การบริหารจัดการเงิน' },
        { cn: '存钱', pinyin: 'cún qián', th: 'ฝากเงิน' },
        { cn: '密码', pinyin: 'mìmǎ', th: 'รหัสผ่าน' }
      ],
      tip: 'รหัสบัตร ATM/เดบิตของธนาคารในประเทศจีนมาตรฐานจะเป็นตัวเลข "6 หลัก" (六位密码)'
    },
    {
      id: 'work-h3',
      categoryKey: 'workplace',
      category: 'ในที่ทำงาน',
      level: 'hard',
      levelLabel: 'ยาก',
      levelNum: 3,
      badgeColor: 'rose',
      icon: '🌱',
      titleCn: '企业社会责任与低碳环保公益项目的立项汇报',
      titlePinyin: 'Qǐyè shèhuì zérèn yǔ dītàn huánbǎo gōngyì xiàngmù de lìxiàng huìbào',
      titleTh: 'การนำเสนอโครงการความรับผิดชอบต่อสังคม (CSR) และนวัตกรรมสิ่งแวดล้อมคาร์บอนต่ำ',
      situation: 'การนำเสนอโครงการส่งเสริมการศึกษาและปลูกป่าลดคาร์บอนในที่ประชุมผู้บริหารระดับสูง',
      roles: {
        A: { name: 'CSR总监 (ผู้อำนวยการ CSR)', avatar: '🌿', label: 'ผู้นำเสนอโครงการ' },
        B: { name: '执行总裁 (ประธานฝ่ายบริหาร)', avatar: '👔', label: 'ผู้บริหารสูงสุด' }
      },
      lines: [
        { speaker: 'A', cn: '各位董事，我们团队今天提议启动“绿茵未来”乡村教育数字化与零碳校园公益工程。', pinyin: 'Gèwèi dǒngshì, wǒmen tuánduì jīntiān tíyì qǐdòng "Lǜyīn Wèilái" xiāngcūn jiàoyù shùzìhuà yǔ língtàn xiàoyuán gōngyì gōngchéng.', th: 'เรียนท่านคณะกรรมการ ทีมงานขอเสนอเปิดตัวโครงการสาธารณประโยชน์ "อนาคตสีเขียว" เพื่อการศึกษาชนบทดิจิทัลและโรงเรียนคาร์บอนสุทธิเป็นศูนย์ครับ' },
        { speaker: 'B', cn: '这个方案切中可持续发展的时代脉搏。请问具体的实施路径与社会效益如何量化评估？', pinyin: 'Zhège fāng’àn qièzhòng kěchíxù fāzhǎn de shídài màibó. Qǐngwèn jùtǐ de shíshī lùjìng yǔ shèhuì xiàoyì rúhé liànghuà pínggū?', th: 'ข้อเสนอนี้ตอบโจทย์กระแสการพัฒนาอย่างยั่งยืนอย่างยิ่ง ช่วยแจกแจงแนวทางการปฏิบัติจริงและการประเมินผลลัพธ์ทางสังคมเชิงปริมาณด้วยครับ' },
        { speaker: 'A', cn: '我们计划首期援建五十所太阳能智能图书室，通过回收旧数码产品减少两千吨碳排放，并惠及数万名边远山区学童。', pinyin: 'Wǒmen jìhuà shǒuqī yuánjiàn wǔshí suǒ tàiyángnéng zhìnéng túshūshì, tōngguò huíshōu jiù shùmǎ chǎnpǐn jiǎnshǎo liǎngqiān dūn tàn páifàng, bìng huìjí shùwàn míng biānyuǎn shānqū xuétóng.', th: 'ในระยะแรกมีแผนสร้างห้องสมุดอัจฉริยะพลังงานแสงอาทิตย์ 50 แห่ง รีไซเคิลอุปกรณ์ดิจิทัลเก่าลดการปล่อยคาร์บอน 2,000 ตัน และส่งต่อประโยชน์ให้เด็กๆ ในพื้นที่ห่างไกลนับหมื่นคนครับ' },
        { speaker: 'B', cn: '既履行了企业的社会公民责任，又深化了品牌的绿色美誉度，董事会全票通过，全额拨付专项启动基金！', pinyin: 'Jì lǚxíng le qǐyè de shèhuì gōngmín zérèn, yòu shēnhuà le pǐnpái de lǜsè měiyùdù, dǒngshìhuì quánpiào tōngguò, quán’é bōfù zhuānxiàng qǐdòng jījīn!', th: 'ทั้งตอบสนองความรับผิดชอบต่อพลเมืองสังคม และยกระดับชื่อเสียงแบรนด์สีเขียว คณะกรรมการมีมติเอกฉันท์อนุมัติงบประมาณกองทุนเริ่มต้นเต็มจำนวน!' },
        { speaker: 'A', cn: '感谢董事会的高瞻远瞩，我们将秉持公开透明原则，定期向全社会公示项目进展与审计账目！', pinyin: 'Gǎnxiè dǒngshìhuì de gāozhānyuǎnzhǔ, wǒmen jiāng bǐngchí gōngkāi tòumíng yuánzé, dìngqī xiàng quán shèhuì gōngshì xiàngmù jìndù yǔ shěnjì zhàngmù!', th: 'ขอบพระคุณวิสัยทัศน์อันกว้างไกลของคณะกรรมการ ทางเราจะยึดมั่นหลักความโปร่งใส รายงานความคืบหน้าและบัญชีตรวจสอบต่อสาธารณะเป็นประจำครับ!' }
      ],
      keyVocab: [
        { cn: '可持续发展', pinyin: 'kěchíxù fāzhǎn', th: 'การพัฒนาอย่างยั่งยืน (Sustainability)' },
        { cn: '碳排放', pinyin: 'tàn páifàng', th: 'การปล่อยก๊าซคาร์บอนไดออกไซด์' },
        { cn: '高瞻远瞩', pinyin: 'gāozhānyuǎnzhǔ', th: 'มีวิสัยทัศน์กว้างไกล' },
        { cn: '公益', pinyin: 'gōngyì', th: 'สาธารณกุศล / ประโยชน์ส่วนรวม' },
        { cn: '透明', pinyin: 'tòumíng', th: 'โปร่งใส ตรวจสอบได้' }
      ],
      tip: '"高瞻远瞩" (gāozhānyuǎnzhǔ) เป็นสุภาษิตจีนยกย่องผู้นำที่มีสายตากว้างไกล มองเห็นอนาคตได้อย่างแม่นยำ'
    },

    // --- 3 บทสนทนายอดนิยมครบ 50 บทบริบูรณ์ ---
    {
      id: 'school-e7',
      categoryKey: 'school',
      category: 'ในโรงเรียน',
      level: 'easy',
      levelLabel: 'ง่าย',
      levelNum: 1,
      badgeColor: 'emerald',
      icon: '🤸‍♂️',
      titleCn: '大课间在操场做眼保健操和跳绳',
      titlePinyin: 'Dàkèjiān zài cāochǎng zuò yǎnbǎojiàncāo hé tiàoshéng',
      titleTh: 'ช่วงพักเบรกใหญ่ทำกายบริหารดวงตาและกระโดดเชือกที่สนาม',
      situation: 'กิจกรรมพักเบรกใหญ่ของโรงเรียนจีน การพักสายตาและออกกำลังกายกระโดดเชือกกับเพื่อน',
      roles: {
        A: { name: '小红 (เสี่ยวหง)', avatar: '👧', label: 'เพื่อน A' },
        B: { name: '小华 (เสี่ยวหัว)', avatar: '👦', label: 'เพื่อน B' }
      },
      lines: [
        { speaker: 'A', cn: '小华，广播里播放眼保健操音乐了，快闭上眼睛跟着节奏按穴位。', pinyin: 'Xiǎohuá, guǎngbō lǐ bōfàng yǎnbǎojiàncāo yīnyuè le, kuài bì shàng yǎnjing gēnzhe jiézòu àn xuéwèi.', th: 'เสี่ยวหัว เสียงเพลงกายบริหารดวงตาดังขึ้นในลำโพงแล้ว รีบหลับตาแล้วนวดตามจังหวะนะ' },
        { speaker: 'B', cn: '做完眼保健操，眼睛感觉特别舒服、特别明亮！', pinyin: 'Zuò wán yǎnbǎojiàncāo, yǎnjing gǎnjué tèbié shūfu, tèbié míngliàng!', th: 'พอนวดกายบริหารตาเสร็จแล้ว รู้สึกสบายตาและตาสว่างขึ้นเยอะเลย!' },
        { speaker: 'A', cn: '大课间还有二十分钟自由活动时间，我们去操场比赛跳绳吧？', pinyin: 'Dàkèjiān hái yǒu èrshí fēnzhōng zìyóu huódòng shíjiān, wǒmen qù cāochǎng bǐsài tiàoshéng ba?', th: 'ช่วงพักเบรกใหญ่ยังมีเวลาอิสระอีก 20 นาที พวกเราไปแข่งกระโดดเชือกที่สนามกันไหม?' },
        { speaker: 'B', cn: '好啊！看谁一分钟能跳一百五十个，输的人请喝酸奶！', pinyin: 'Hǎo a! Kàn shéi yì fēnzhōng néng tiào yìbǎi wǔshí gè, shū de rén qǐng hē suānnǎi!', th: 'ได้เลย! ดูสิว่าใครจะกระโดดได้ 150 ครั้งใน 1 นาที คนแพ้เลี้ยงนมเปรี้ยวนะ!' },
        { speaker: 'A', cn: '一言为定，拿起跳绳出发！', pinyin: 'Yì yán wéi dìng, ná qǐ tiàoshéng chūfā!', th: 'ตกลงตามนี้ หยิบเชือกกระโดดแล้วไปกันเลย!' }
      ],
      keyVocab: [
        { cn: '眼保健操', pinyin: 'yǎnbǎojiàncāo', th: 'กายบริหารดวงตา' },
        { cn: '大课间', pinyin: 'dàkèjiān', th: 'ช่วงพักเบรกใหญ่ระหว่างคาบเรียน' },
        { cn: '跳绳', pinyin: 'tiàoshéng', th: 'กระโดดเชือก' },
        { cn: '酸奶', pinyin: 'suānnǎi', th: 'โยเกิร์ต / นมเปรี้ยว' }
      ],
      tip: '"眼保健操" (กายบริหารดวงตา) คือ กิจกรรมที่นักเรียนจีนทุกคนต้องทำวันละ 2 ครั้งเพื่อถนอมสายตา'
    },
    {
      id: 'food-m5',
      categoryKey: 'food-shopping',
      category: 'ซื้อของ-สั่งอาหาร',
      level: 'medium',
      levelLabel: 'ปานกลาง',
      levelNum: 2,
      badgeColor: 'amber',
      icon: '🥭',
      titleCn: '在生鲜水果超市挑选热带水果',
      titlePinyin: 'Zài shēngxiān shuǐguǒ chāoshì tiāoxuǎn rèdài shuǐguǒ',
      titleTh: 'เลือกซื้อผลไม้เมืองร้อนสดใหม่ที่ซูเปอร์มาร์เก็ตผลไม้',
      situation: 'การเลือกซื้อมะม่วง ทุเรียน มังคุด และการสอบถามความสดและการชั่งน้ำหนัก',
      roles: {
        A: { name: '挑水果的客人 (ลูกค้า)', avatar: '👩', label: 'ลูกค้า' },
        B: { name: '水果理货员 (พนักงานดูแลผลไม้)', avatar: '🧑‍🌾', label: 'พนักงานร้าน' }
      },
      lines: [
        { speaker: 'A', cn: '师傅，今天刚到的泰国金枕头榴莲怎么挑？帮我看一个肉多的。', pinyin: 'Shīfu, jīntiān gāng dào de Tàiguó jīnlǐngtou liúlián zěnme tiāo? Bāng wǒ kàn yí gè ròu duō de.', th: 'พี่คะ ทุเรียนหมอนทองไทยที่เพิ่งมาถึงวันนี้เลือกยังไงคะ? ช่วยดูลูกที่เนื้อเยอะๆ ให้หน่อยค่ะ' },
        { speaker: 'B', cn: '您看这个，果形匀称鼓包多，捏一下相邻的尖刺能轻松捏动，说明熟透了，皮薄肉厚！', pinyin: 'Nín kàn zhège, guǒxíng yúnchèn gǔbāo duō, niē yíxià xiānglín de jiāncì néng qīngsōng niēdòng, shuōmíng shú tòu le, pí báo ròu hòu!', th: 'คุณดูผลนี้นะครับ พูโป่งสม่ำเสมอ หนามที่ติดกันบีบเข้าหากันได้สบาย แสดงว่าสุกเต็มที่ เปลือกบางเนื้อแน่นครับ!' },
        { speaker: 'A', cn: '太专业了！那旁边的山竹和芒果新鲜吗？', pinyin: 'Tài zhuānyè le! Nà pángbiān de shānzhú hé mángguǒ xīnxiān ma?', th: 'มืออาชีพมากเลยค่ะ! แล้วมังคุดกับมะม่วงข้างๆ สดไหมคะ?' },
        { speaker: 'B', cn: '都是今天清晨空运直达的，山竹外壳软软的，蒂头是鲜绿色，特别甜多汁。', pinyin: 'Dōu shì jīntiān qīngchén kōngyùn zhídá de, shānzhú wàiké ruǎnruǎn de, dìtóu shì xiānlǜsè, tèbié tián duō zhī.', th: 'ส่งตรงทางเครื่องบินเมื่อเช้ามืดนี้เลยครับ เปลือกมังคุดนิ่มกำลังดี ขั้วผลสีเขียวสด หวานฉ่ำน้ำมากครับ' },
        { speaker: 'A', cn: '那帮我称一个榴莲和两斤山竹，今天全家有口福了！', pinyin: 'Nà bāng wǒ chēng yí gè liúlián hé liǎng jīn shānzhú, jīntiān quánjiā yǒu kǒufú le!', th: 'งั้นช่วยชั่งทุเรียน 1 ลูกกับมังคุด 2 จิน (1 กก.) ให้ด้วยค่ะ วันนี้ทุกคนในบ้านได้อิ่มอร่อยกันเต็มที่เลย!' }
      ],
      keyVocab: [
        { cn: '榴莲', pinyin: 'liúlián', th: 'ทุเรียน' },
        { cn: '山竹', pinyin: 'shānzhú', th: 'มังคุด (ราชินีผลไม้)' },
        { cn: '皮薄肉厚', pinyin: 'pí báo ròu hòu', th: 'เปลือกบางเนื้อหนาแน่น' },
        { cn: '多汁', pinyin: 'duō zhī', th: 'ฉ่ำน้ำ' },
        { cn: '有口福', pinyin: 'yǒu kǒufú', th: 'มีลาภปาก / โชคดีได้กินของอร่อย' }
      ],
      tip: '"有口福" (yǒu kǒufú) เป็นสำนวนจีนยอดนิยม หมายถึง โชคดีที่มีโอกาสได้ลิ้มรสอาหารอร่อย'
    },
    {
      id: 'work-m6',
      categoryKey: 'workplace',
      category: 'ในที่ทำงาน',
      level: 'medium',
      levelLabel: 'ปานกลาง',
      levelNum: 2,
      badgeColor: 'amber',
      icon: '📦',
      titleCn: '在前台签收快递包裹与核对单号',
      titlePinyin: 'Zài qiántái qiānshōu kuàidì bāoguǒ yǔ héduì dānhào',
      titleTh: 'เซ็นรับพัสดุด่วนที่เคาน์เตอร์ต้อนรับและตรวจสอบหมายเลขพัสดุ',
      situation: 'การรับพัสดุเอกสารสัญญาสำคัญที่ส่งมาถึงออฟฟิศ และการเซ็นชื่อส่งมอบ',
      roles: {
        A: { name: '公司前台秘书 (เลขาหน้าฟรอนต์)', avatar: '👩‍💼', label: 'เจ้าหน้าที่ฟรอนต์' },
        B: { name: '快递派送员 (พนักงานส่งพัสดุ)', avatar: '🛵', label: 'พนักงานขนส่ง' }
      },
      lines: [
        { speaker: 'B', cn: '您好，顺丰特快！这里有两件给法务部王总监的加急保价文件，需要前台签收。', pinyin: 'Nín hǎo, Shùnfēng tèkuài! Zhèlǐ yǒu liǎng jiàn gěi fǎwùbù Wáng zhǒngjiān de jiājí bǎojià wénjiàn, xūyào qiántái qiānshōu.', th: 'สวัสดีครับ SF Express ครับ! มีเอกสารด่วนพิเศษมีประกันส่งถึงผู้อำนวยการหวังฝ่ายกฎหมาย 2 ซอง รบกวนฟรอนต์เซ็นรับครับ' },
        { speaker: 'A', cn: '您好，请稍等，我先核对一下运单号码和外包装是否完好无损。', pinyin: 'Nín hǎo, qǐng shāoděng, wǒ xiān héduì yíxià yùndān hàomǎ hé wài bāozhuāng shìfǒu wánhǎo-wúsǔn.', th: 'สวัสดีค่ะ รอสักครู่นะคะ ขอตรวจเช็คเลขพัสดุและสภาพซองภายนอกว่าสมบูรณ์เรียบร้อยดีไหมก่อนค่ะ' },
        { speaker: 'B', cn: '文件封条完好，请在巴枪手写屏幕上签您的姓名。', pinyin: 'Wénjiàn fēngtiáo wánhǎo, qǐng zài bāqiāng shǒuxiě píngmù shang qiān nín de xìngmíng.', th: 'แถบซีลปิดผนึกสมบูรณ์ดีครับ รบกวนเซ็นชื่อบนหน้าจอเครื่องสแกนบาร์โค้ดได้เลยครับ' },
        { speaker: 'A', cn: '已经签好了，我会立刻在内部办公软件上发消息通知王总监来取件。', pinyin: 'Yǐjīng qiān hǎo le, wǒ huì lìkè zài nèibù bàngōng ruǎnjiàn shang fā xiāoxi tōngzhī Wáng zhǒngjiān lái qǔ jiàn.', th: 'เซ็นเรียบร้อยแล้วค่ะ เดี๋ยวฉันจะส่งข้อความแจ้งผู้อำนวยการหวังผ่านระบบออฟฟิศให้มารับเอกสารทันทีค่ะ' },
        { speaker: 'B', cn: '非常感谢配合，祝您工作顺利！', pinyin: 'Fēicháng gǎnxiè pèihé, zhù nín gōngzuò shùnlì!', th: 'ขอบพระคุณที่ให้ความร่วมมือ ขอให้การงานราบรื่นครับ!' }
      ],
      keyVocab: [
        { cn: '签收', pinyin: 'qiānshōu', th: 'เซ็นรับพัสดุ' },
        { cn: '加急', pinyin: 'jiājí', th: 'ด่วนพิเศษ' },
        { cn: '完好无损', pinyin: 'wánhǎo-wúsǔn', th: 'สมบูรณ์ไร้ร่องรอยเสียหาย' },
        { cn: '通知', pinyin: 'tōngzhī', th: 'แจ้งเตือน / ประกาศ' },
        { cn: '工作顺利', pinyin: 'gōngzuò shùnlì', th: 'การงานราบรื่น' }
      ],
      tip: '"工作顺利" (gōngzuò shùnlì) เป็นคำอวยพรมาตรฐานที่ใช้ในชีวิตการทำงานของคนจีน'
    }
  ];
})();
