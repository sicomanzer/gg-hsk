// conversations_data.js - Daily Chinese Conversations Data (3 Levels: Easy, Medium, Hard)
(function() {
  window.DAILY_CONVERSATIONS = [
    // =========================================================================
    // LEVEL 1: EASY (ง่าย) - คำศัพท์และประโยคพื้นฐานในชีวิตประจำวัน
    // =========================================================================
    {
      id: 'easy-1',
      level: 'easy',
      levelLabel: 'ง่าย',
      levelNum: 1,
      badgeColor: 'emerald',
      category: 'ทักทาย & แนะนำตัว',
      icon: '👋',
      titleCn: '你好！很高兴认识你',
      titlePinyin: 'Nǐ hǎo! Hěn gāoxìng rènshi nǐ',
      titleTh: 'สวัสดี! ยินดีที่ได้รู้จักเธอ',
      situation: 'การพบกันครั้งแรก แนะนำชื่อ สัญชาติ และแสดงความยินดีที่ได้รู้จัก',
      roles: {
        A: { name: '小明 (เสี่ยวหมิง)', avatar: '👦', label: 'ผู้พูด A' },
        B: { name: '大卫 (เดวิด)', avatar: '👱‍♂️', label: 'ผู้พูด B' }
      },
      lines: [
        {
          speaker: 'A',
          cn: '你好！请问你叫什么名字？',
          pinyin: 'Nǐ hǎo! Qǐngwèn nǐ jiào shénme míngzi?',
          th: 'สวัสดีครับ! ขอถามหน่อยคุณชื่ออะไรครับ?'
        },
        {
          speaker: 'B',
          cn: '你好！我叫大卫。你呢？',
          pinyin: 'Nǐ hǎo! Wǒ jiào Dàwèi. Nǐ ne?',
          th: 'สวัสดีครับ! ผมชื่อเดวิดครับ แล้วคุณล่ะครับ?'
        },
        {
          speaker: 'A',
          cn: '我叫小明。你是哪国人？',
          pinyin: 'Wǒ jiào Xiǎomíng. Nǐ shì nǎ guó rén?',
          th: 'ผมชื่อเสี่ยวหมิงครับ คุณเป็นคนประเทศไหนครับ?'
        },
        {
          speaker: 'B',
          cn: '我是美国人。你是中国人吗？',
          pinyin: 'Wǒ shì Měiguó rén. Nǐ shì Zhōngguó rén ma?',
          th: 'ผมเป็นคนอเมริกันครับ คุณเป็นคนจีนใช่ไหมครับ?'
        },
        {
          speaker: 'A',
          cn: '是的，我是中国人。很高兴认识你！',
          pinyin: 'Shì de, wǒ shì Zhōngguó rén. Hěn gāoxìng rènshi nǐ!',
          th: 'ใช่แล้วครับ ผมเป็นคนจีน ยินดีที่ได้รู้จักนะครับ!'
        },
        {
          speaker: 'B',
          cn: '我也很高兴认识你！',
          pinyin: 'Wǒ yě hěn gāoxìng rènshi nǐ!',
          th: 'ผมก็ยินดีมากเช่นกันที่ได้รู้จักคุณครับ!'
        }
      ],
      keyVocab: [
        { cn: '请问', pinyin: 'qǐngwèn', th: 'ขอถามหน่อย' },
        { cn: '名字', pinyin: 'míngzi', th: 'ชื่อ' },
        { cn: '哪国人', pinyin: 'nǎ guó rén', th: 'คนประเทศไหน' },
        { cn: '认识', pinyin: 'rènshi', th: 'รู้จัก' },
        { cn: '高兴', pinyin: 'gāoxìng', th: 'ดีใจ / ยินดี' }
      ],
      tip: 'สำนวน "很高兴认识你" (Hěn gāoxìng rènshi nǐ) เป็นประโยคสุภาพมาตรฐานที่ใช้พูดเมื่อพบเจอกันเป็นครั้งแรก'
    },
    {
      id: 'easy-2',
      level: 'easy',
      levelLabel: 'ง่าย',
      levelNum: 1,
      badgeColor: 'emerald',
      category: 'สั่งอาหารในร้าน',
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
        {
          speaker: 'A',
          cn: '服务员，请给我看一下菜单。',
          pinyin: 'Fúwùyuán, qǐng gěi wǒ kàn yíxià càidān.',
          th: 'บริกรครับ ขอดูเมนูหน่อยครับ'
        },
        {
          speaker: 'B',
          cn: '好的，这是菜单。请问您想吃什么？',
          pinyin: 'Hǎo de, zhè shì càidān. Qǐngwèn nín xiǎng chī shénme?',
          th: 'ได้เลยครับ นี่คือเมนูครับ ไม่ทราบว่าคุณลูกค้าอยากทานอะไรครับ?'
        },
        {
          speaker: 'A',
          cn: '我要一份牛肉炒饭和一碗鸡蛋汤。',
          pinyin: 'Wǒ yào yí fèn niúròu chǎofàn hé yì wǎn jīdàntāng.',
          th: 'ผมขอข้าวผัดเนื้อหนึ่งจาน กับซุปไข่หนึ่งถ้วยครับ'
        },
        {
          speaker: 'B',
          cn: '好的。请问喝什么饮料？',
          pinyin: 'Hǎo de. Qǐngwèn hē shénme yǐnliào?',
          th: 'รับทราบครับ ดื่มเครื่องดื่มอะไรดีครับ?'
        },
        {
          speaker: 'A',
          cn: '请给我一杯热茶，不要加糖。',
          pinyin: 'Qǐng gěi wǒ yì bēi rè chá, bú yào jiā táng.',
          th: 'ขอชาร้อนหนึ่งแก้วครับ ไม่ต้องใส่น้ำตาลนะ'
        },
        {
          speaker: 'B',
          cn: '好的，请稍等，菜马上来！',
          pinyin: 'Hǎo de, qǐng shāoděng, cài mǎshàng lái!',
          th: 'ได้เลยครับ กรุณารอสักครู่ อาหารจะมาเสิร์ฟทันทีครับ!'
        }
      ],
      keyVocab: [
        { cn: '服务员', pinyin: 'fúwùyuán', th: 'บริกร / พนักงานเสิร์ฟ' },
        { cn: '菜单', pinyin: 'càidān', th: 'เมนูอาหาร' },
        { cn: '炒饭', pinyin: 'chǎofàn', th: 'ข้าวผัด' },
        { cn: '稍等', pinyin: 'shāoděng', th: 'รอสักครู่' },
        { cn: '马上', pinyin: 'mǎshàng', th: 'ทันที / เดี๋ยวนี้' }
      ],
      tip: 'คำลักษณนามในภาษาจีนสำคัญมาก: ข้าวผัดใช้ "一份" (หนึ่งจาน/ชุด), ซุปใช้ "一碗" (หนึ่งถ้วย), ชาใช้ "一杯" (หนึ่งแก้ว)'
    },
    {
      id: 'easy-3',
      level: 'easy',
      levelLabel: 'ง่าย',
      levelNum: 1,
      badgeColor: 'emerald',
      category: 'ซื้อของ & ถามราคา',
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
        {
          speaker: 'A',
          cn: '老板，请问这件衣服多少钱？',
          pinyin: 'Lǎobǎn, qǐngwèn zhè jiàn yīfu duōshao qián?',
          th: 'เถ้าแก่คะ เสื้อตัวนี้ราคาเท่าไหร่คะ?'
        },
        {
          speaker: 'B',
          cn: '这件衣服一百块。',
          pinyin: 'Zhè jiàn yīfu yìbǎi kuài.',
          th: 'เสื้อตัวนี้ 100 หยวนครับ'
        },
        {
          speaker: 'A',
          cn: '太贵了！能便宜一点儿吗？',
          pinyin: 'Tài guì le! Néng piányi yìdiǎnr ma?',
          th: 'แพงเกินไปแล้วค่ะ! ลดราคาให้หน่อยได้ไหมคะ?'
        },
        {
          speaker: 'B',
          cn: '八十块怎么样？不能再少了。',
          pinyin: 'Bāshí kuài zěnmeyàng? Bù néng zài shǎo le.',
          th: '80 หยวนเป็นอย่างไรครับ? ลดกว่านี้ไม่ได้แล้วนะ'
        },
        {
          speaker: 'A',
          cn: '好的，我要了。可以微信支付吗？',
          pinyin: 'Hǎo de, wǒ yào le. Kěyǐ Wēixìn zhīfù ma?',
          th: 'ตกลงค่ะ เอาตัวนี้ จ่ายผ่าน WeChat Pay ได้ไหมคะ?'
        },
        {
          speaker: 'B',
          cn: '当然可以，请扫这里的二维码。',
          pinyin: 'Dāngrán kěyǐ, qǐng sǎo zhèlǐ de èrwéimǎ.',
          th: 'ได้แน่นอนครับ เชิญสแกนคิวอาร์โค้ดตรงนี้เลยครับ'
        }
      ],
      keyVocab: [
        { cn: '多少钱', pinyin: 'duōshao qián', th: 'ราคาเท่าไหร่' },
        { cn: '便宜', pinyin: 'piányi', th: 'ถูก / ราคาไม่แพง' },
        { cn: '贵', pinyin: 'guì', th: 'แพง' },
        { cn: '微信支付', pinyin: 'Wēixìn zhīfù', th: 'จ่ายผ่านวีแชท' },
        { cn: '二维码', pinyin: 'èrwéimǎ', th: 'คิวอาร์โค้ด' }
      ],
      tip: 'ในจีน การพูดต่อราคาอย่างสุภาพนิยมใช้ "能便宜一点儿吗？" (Néng piányi yìdiǎnr ma?) และการจ่ายเงินเกือบ 100% ใช้การสแกน QR Code (扫码)'
    },
    {
      id: 'easy-4',
      level: 'easy',
      levelLabel: 'ง่าย',
      levelNum: 1,
      badgeColor: 'emerald',
      category: 'ถามทางเบื้องต้น',
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
        {
          speaker: 'A',
          cn: '你好，请问附近的地铁站在哪儿？',
          pinyin: 'Nǐ hǎo, qǐngwèn fùjìn de dìtiězhàn zài nǎr?',
          th: 'สวัสดีครับ ขอถามหน่อยสถานีรถไฟใต้ดินแถวนี้อยู่ตรงไหนครับ?'
        },
        {
          speaker: 'B',
          cn: '地铁站离这儿不远。你看前面那个超市了吗？',
          pinyin: 'Dìtiězhàn lí zhèr bù yuǎn. Nǐ kàn qiánmiàn nàge chāoshì le ma?',
          th: 'สถานีรถไฟใต้ดินอยู่ไม่ไกลจากตรงนี้ คุณเห็นซูเปอร์มาร์เก็ตข้างหน้านั่นไหมครับ?'
        },
        {
          speaker: 'A',
          cn: '看到了，在那家超市旁边吗？',
          pinyin: 'Kàndào le, zài nà jiā chāoshì pángbiān ma?',
          th: 'เห็นแล้วครับ อยู่ข้างๆ ซูเปอร์มาร์เก็ตแห่งนั้นใช่ไหมครับ?'
        },
        {
          speaker: 'B',
          cn: '对，一直往前走，到了超市向右拐就到了。',
          pinyin: 'Duì, yìzhí wǎng qián zǒu, dào le chāoshì xiàng yòu guǎi jiù dào le.',
          th: 'ใช่แล้วครับ เดินตรงไปเรื่อยๆ พอถึงซูเปอร์มาร์เก็ตแล้วเลี้ยวขวา ก็ถึงแล้วครับ'
        },
        {
          speaker: 'A',
          cn: '太感谢你了！',
          pinyin: 'Tài gǎnxiè nǐ le!',
          th: 'ขอบคุณคุณมากๆ เลยครับ!'
        },
        {
          speaker: 'B',
          cn: '不客气，慢走！',
          pinyin: 'Bú kèqi, màn zǒu!',
          th: 'ยินดีครับ เดินทางปลอดภัยครับ!'
        }
      ],
      keyVocab: [
        { cn: '地铁站', pinyin: 'dìtiězhàn', th: 'สถานีรถไฟใต้ดิน' },
        { cn: '附近', pinyin: 'fùjìn', th: 'แถวนี้ / ละแวกใกล้เคียง' },
        { cn: '一直往前走', pinyin: 'yìzhí wǎng qián zǒu', th: 'เดินตรงไปเรื่อยๆ' },
        { cn: '向右拐', pinyin: 'xiàng yòu guǎi', th: 'เลี้ยวขวา' },
        { cn: '不客气', pinyin: 'bú kèqi', th: 'ไม่ต้องเกรงใจ / ไม่เป็นไร' }
      ],
      tip: '"向右拐" (xiàng yòu guǎi) แปลว่า เลี้ยวขวา ส่วน "向左拐" (xiàng zuǒ guǎi) แปลว่า เลี้ยวซ้าย จำง่ายและใช้บ่อยมาก'
    },
    {
      id: 'easy-5',
      level: 'easy',
      levelLabel: 'ง่าย',
      levelNum: 1,
      badgeColor: 'emerald',
      category: 'ถามเวลา & นัดหมาย',
      icon: '⏰',
      titleCn: '现在几点？我们几点见面？',
      titlePinyin: 'Xiànzài jǐ diǎn? Wǒmen jǐ diǎn jiànmiàn?',
      titleTh: 'ตอนนี้กี่โมงแล้ว? พวกเราเจอกันกี่โมง?',
      situation: 'การเช็คเวลาปัจจุบัน และตกลงนัดพบกันช่วงบ่าย',
      roles: {
        A: { name: '欢欢 (ฮวนฮวน)', avatar: '👧', label: 'เพื่อน A' },
        B: { name: '乐乐 (เล่อเล่อ)', avatar: '👦', label: 'เพื่อน B' }
      },
      lines: [
        {
          speaker: 'A',
          cn: '乐乐，你看看手表，现在几点了？',
          pinyin: 'Lèlè, nǐ kànkan shǒubiǎo, xiànzài jǐ diǎn le?',
          th: 'เล่อเล่อ เธอดูนาฬิกาข้อมือหน่อย ตอนนี้กี่โมงแล้วจ๊ะ?'
        },
        {
          speaker: 'B',
          cn: '现在差十分两点。',
          pinyin: 'Xiànzài chà shí fēn liǎng diǎn.',
          th: 'ตอนนี้อีก 10 นาทีบ่าย 2 โมง (13:50 น.)'
        },
        {
          speaker: 'A',
          cn: '我们今天下午几点去图书馆？',
          pinyin: 'Wǒmen jīntiān xiàwǔ jǐ diǎn qù túshūguǎn?',
          th: 'วันนี้ช่วงบ่ายพวกเราจะไปห้องสมุดกันกี่โมงดี?'
        },
        {
          speaker: 'B',
          cn: '三点半怎么样？我们在学校门口见。',
          pinyin: 'Sān diǎn bàn zěnmeyàng? Wǒmen zài xuéxiào ménkǒu jiàn.',
          th: 'บ่าย 3 โมงครึ่งเป็นอย่างไร? พวกเราเจอกันที่ประตูโรงเรียนนะ'
        },
        {
          speaker: 'A',
          cn: '好的，没问题！三点半见！',
          pinyin: 'Hǎo de, méi wèntí! Sān diǎn bàn jiàn!',
          th: 'ตกลง ไม่มีปัญหา! บ่ายสามโมงครึ่งเจอกันจ้า!'
        },
        {
          speaker: 'B',
          cn: '一会儿见！',
          pinyin: 'Yíhuìr jiàn!',
          th: 'เดี๋ยวเจอกันนะ!'
        }
      ],
      keyVocab: [
        { cn: '手表', pinyin: 'shǒubiǎo', th: 'นาฬิกาข้อมือ' },
        { cn: '几点', pinyin: 'jǐ diǎn', th: 'กี่โมง' },
        { cn: '差十分', pinyin: 'chà shí fēn', th: 'ขาดอีกสิบนาที' },
        { cn: '图书馆', pinyin: 'túshūguǎn', th: 'ห้องสมุด' },
        { cn: '学校门口', pinyin: 'xuéxiào ménkǒu', th: 'ประตูโรงเรียน' }
      ],
      tip: 'การบอกเวลาภาษาจีน: "两点半" คือ 2:30 น., "差十分两点" คือ ขาดอีก 10 นาทีจะบ่ายสอง (1:50 น.)'
    },
    {
      id: 'easy-6',
      level: 'easy',
      levelLabel: 'ง่าย',
      levelNum: 1,
      badgeColor: 'emerald',
      category: 'ขอโทษ & ขอบคุณ',
      icon: '🙏',
      titleCn: '对不起，我迟到了',
      titlePinyin: 'Duìbuqǐ, wǒ chídào le',
      titleTh: 'ขอโทษนะ ฉันมาสายแล้ว',
      situation: 'การมาสายเนื่องจากรถติด การขอโทษ และการให้อภัยอย่างสุภาพ',
      roles: {
        A: { name: '李明 (หลี่หมิง)', avatar: '🏃‍♂️', label: 'คนมาสาย' },
        B: { name: '王芳 (หวังฟาง)', avatar: '👩', label: 'คนรอ' }
      },
      lines: [
        {
          speaker: 'A',
          cn: '王芳，真对不起，我迟到了！让你久等了。',
          pinyin: 'Wáng Fāng, zhēn duìbuqǐ, wǒ chídào le! Ràng nǐ jiǔ děng le.',
          th: 'หวังฟาง ขอโทษจริงๆ นะ ฉันมาสายแล้ว! ทำให้เธอต้องรอนานเลย'
        },
        {
          speaker: 'B',
          cn: '没关系，我也刚到几分钟。路上堵车吗？',
          pinyin: 'Méi guānxi, wǒ yě gāng dào jǐ fēnzhōng. Lùshang dǔchē ma?',
          th: 'ไม่เป็นไรเลย ฉันเองก็เพิ่งมาถึงไม่กี่นาที บนถนนรถติดเหรอ?'
        },
        {
          speaker: 'A',
          cn: '是啊，今天路上的车特别多。谢谢你的理解！',
          pinyin: 'Shì a, jīntiān lùshang de chē tèbié duō. Xièxie nǐ de lǐjiě!',
          th: 'ใช่แล้ว วันนี้รถบนถนนเยอะเป็นพิเศษเลย ขอบคุณที่เข้าใจนะ!'
        },
        {
          speaker: 'B',
          cn: '不用客气，我们快进去吧，电影要开始了。',
          pinyin: 'Bú yòng kèqi, wǒmen kuài jìnqù ba, diànyǐng yào kāishǐ le.',
          th: 'ไม่ต้องเกรงใจเลย พวกเรารีบเข้าไปข้างในกันเถอะ หนังใกล้จะเริ่มแล้ว'
        },
        {
          speaker: 'A',
          cn: '好的，走吧！我请你喝奶茶。',
          pinyin: 'Hǎo de, zǒu ba! Wǒ qǐng nǐ hē nǎichá.',
          th: 'ได้เลย ไปกัน! เดี๋ยวฉันเลี้ยงชานมเธอเองนะ'
        },
        {
          speaker: 'B',
          cn: '太好了，谢谢你！',
          pinyin: 'Tài hǎo le, xièxie nǐ!',
          th: 'เยี่ยมเลย ขอบใจมากนะ!'
        }
      ],
      keyVocab: [
        { cn: '迟到', pinyin: 'chídào', th: 'มาสาย' },
        { cn: '久等', pinyin: 'jiǔ děng', th: 'รอนาน' },
        { cn: '堵车', pinyin: 'dǔchē', th: 'รถติด' },
        { cn: '特别', pinyin: 'tèbié', th: 'เป็นพิเศษ' },
        { cn: '我请你', pinyin: 'wǒ qǐng nǐ', th: 'ฉันเลี้ยงเธอเอง' }
      ],
      tip: '"让你久等了" (Ràng nǐ jiǔ děng le) เป็นมารยาทที่ดีเยี่ยมเมื่อไปถึงสาย แปลว่า "ทำให้คุณต้องรอนานเลย"'
    },

    // =========================================================================
    // LEVEL 2: MEDIUM (ปานกลาง) - ประโยคเชื่อมโยงและสถานการณ์ชีวิตประจำวัน
    // =========================================================================
    {
      id: 'med-1',
      level: 'medium',
      levelLabel: 'ปานกลาง',
      levelNum: 2,
      badgeColor: 'amber',
      category: 'เรียกรถแท็กซี่',
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
        {
          speaker: 'A',
          cn: '师傅，您好！我去首都机场三号航站楼，请打表。',
          pinyin: 'Shīfu, nín hǎo! Wǒ qù Shǒudū Jīchǎng sānhào hángzhànlóu, qǐng dǎbiǎo.',
          th: 'คนขับครับ สวัสดีครับ! ผมจะไปอาคารผู้โดยสาร 3 สนามบินโส่วตู รบกวนกดมิเตอร์ด้วยครับ'
        },
        {
          speaker: 'B',
          cn: '好的，请系好安全带。您几点的飞机？',
          pinyin: 'Hǎo de, qǐng jìhǎo ānquándài. Nín jǐ diǎn de fēijī?',
          th: 'ได้ครับ รบกวนคาดเข็มขัดนิรภัยด้วยครับ คุณมีเที่ยวบินกี่โมงครับ?'
        },
        {
          speaker: 'A',
          cn: '下午四点半的，现在有点赶时间，能走高速公路吗？',
          pinyin: 'Xiàwǔ sì diǎn bàn de, xiànzài yǒudiǎn gǎn shíjiān, néng zǒu gāosù gōnglù ma?',
          th: 'เที่ยวบินบ่ายสี่โมงครึ่งครับ ตอนนี้ค่อนข้างรีบ วิ่งขึ้นทางด่วนได้ไหมครับ?'
        },
        {
          speaker: 'B',
          cn: '没问题，走机场高速大概四十分钟能到，过路费要加在车费里。',
          pinyin: 'Méi wèntí, zǒu jīchǎng gāosù dàgài sìshí fēnzhōng néng dào, guòlùfèi yào jiā zài chēfèi lǐ.',
          th: 'ไม่มีปัญหาครับ วิ่งทางด่วนสนามบินประมาณ 40 นาทีถึง ค่าผ่านทางจะคิดรวมในค่าโดยสารนะครับ'
        },
        {
          speaker: 'A',
          cn: '可以的。到了之后请给我打一张发票。',
          pinyin: 'Kěyǐ de. Dào le zhīhòu qǐng gěi wǒ dǎ yì zhāng fāpiào.',
          th: 'ได้เลยครับ พอถึงแล้วรบกวนพิมพ์ใบเสร็จให้ผมหนึ่งใบด้วยนะครับ'
        },
        {
          speaker: 'B',
          cn: '放心吧，没问题！',
          pinyin: 'Fàngxīn ba, méi wèntí!',
          th: 'วางใจได้เลยครับ ไม่มีปัญหา!'
        }
      ],
      keyVocab: [
        { cn: '师傅', pinyin: 'shīfu', th: 'พี่คนขับ / ช่าง (คำเรียกสุภาพ)' },
        { cn: '打表', pinyin: 'dǎbiǎo', th: 'กดมิเตอร์' },
        { cn: '航站楼', pinyin: 'hángzhànlóu', th: 'อาคารผู้โดยสารสนามบิน (Terminal)' },
        { cn: '赶时间', pinyin: 'gǎn shíjiān', th: 'รีบ / กำลังแข่งกับเวลา' },
        { cn: '发票', pinyin: 'fāpiào', th: 'ใบเสร็จรับเงิน' }
      ],
      tip: 'ในประเทศจีน เรียกคนขับรถแท็กซี่ว่า "师傅" (shīfu) และถ้าต้องการใบเสร็จรับเงินให้พูดว่า "请开发票" หรือ "打一张发票"'
    },
    {
      id: 'med-2',
      level: 'medium',
      levelLabel: 'ปานกลาง',
      levelNum: 2,
      badgeColor: 'amber',
      category: 'ไปหาหมอ & สุขภาพ',
      icon: '🏥',
      titleCn: '医生，我身体有点不舒服',
      titlePinyin: 'Yīshēng, wǒ shēntǐ yǒudiǎn bù shūfu',
      titleTh: 'คุณหมอครับ ร่างกายผมรู้สึกไม่ค่อยสบายครับ',
      situation: 'การอธิบายอาการป่วย ปวดหัว มีไข้ ไอ และคำแนะนำในการทานยาของแพทย์',
      roles: {
        A: { name: '患者 (คนไข้)', avatar: '🤒', label: 'คนไข้' },
        B: { name: '医生 (คุณหมอ)', avatar: '👩‍⚕️', label: 'คุณหมอ' }
      },
      lines: [
        {
          speaker: 'B',
          cn: '请坐。你怎么了？哪儿不舒服？',
          pinyin: 'Qǐng zuò. Nǐ zěnme le? Nǎr bù shūfu?',
          th: 'เชิญนั่งครับ คุณเป็นอะไรมาครับ? ไม่สบายตรงไหน?'
        },
        {
          speaker: 'A',
          cn: '医生，我从昨天晚上开始头疼，而且有点发烧和咳嗽。',
          pinyin: 'Yīshēng, wǒ cóng zuótiān wǎnshang kāishǐ tóuténg, érqiě yǒudiǎn fāshāo hé késou.',
          th: 'คุณหมอครับ ผมเริ่มปวดหัวตั้งแต่เมื่อคืน และยังมีไข้กับไอด้วยครับ'
        },
        {
          speaker: 'B',
          cn: '量个体温吧……三十八度二，确实发烧了。嗓子疼吗？',
          pinyin: 'Liáng gè tǐwēn ba... Sānshíbā dù èr, quèshí fāshāo le. Sǎngzi téng ma?',
          th: 'วัดไข้หน่อยนะ... 38.2 องศา มีไข้จริงๆ ด้วย เจ็บคอไหมครับ?'
        },
        {
          speaker: 'A',
          cn: '有一点儿疼，最近天气变冷，可能着凉感冒了。',
          pinyin: 'Yǒu yìdiǎnr téng, zuìjìn tiānqì biàn lěng, kěnéng zháoliáng gǎnmào le.',
          th: 'เจ็บนิดหน่อยครับ ช่วงนี้อากาศหนาวขึ้น อาจจะเป็นเพราะโดนลมหนาวเลยเป็นหวัดครับ'
        },
        {
          speaker: 'B',
          cn: '不要紧，是普通感冒。我给你开点感冒药，一天吃三次，饭后吃。',
          pinyin: 'Bú yàojǐn, shì pǔtōng gǎnmào. Wǒ gěi nǐ kāi diǎn gǎnmàoyào, yì tiān chī sān cì, fànhòu chī.',
          th: 'ไม่เป็นไรมากครับ เป็นไข้หวัดธรรมดา หมอจะสั่งยาแก้หวัดให้ ทานวันละ 3 ครั้งหลังอาหารนะ'
        },
        {
          speaker: 'A',
          cn: '好的，谢谢医生！',
          pinyin: 'Hǎo de, xièxie yīshēng!',
          th: 'รับทราบครับ ขอบคุณคุณหมอมากครับ!'
        }
      ],
      keyVocab: [
        { cn: '头疼', pinyin: 'tóuténg', th: 'ปวดหัว' },
        { cn: '发烧', pinyin: 'fāshāo', th: 'มีไข้ / ตัวร้อน' },
        { cn: '咳嗽', pinyin: 'késou', th: 'ไอ' },
        { cn: '嗓子', pinyin: 'sǎngzi', th: 'ลำคอ / เสียง' },
        { cn: '开药', pinyin: 'kāi yào', th: 'สั่งจ่ายยา' }
      ],
      tip: 'ไวยากรณ์การกินยาในภาษาจีนใช้คำว่า "吃药" (chī yào = กินยา) ไม่ใช้คำว่า 喝 (ดื่ม)'
    },
    {
      id: 'med-3',
      level: 'medium',
      levelLabel: 'ปานกลาง',
      levelNum: 2,
      badgeColor: 'amber',
      category: 'การเรียน & เตรียมสอบ',
      icon: '📚',
      titleCn: '下个月就要考HSK了，好紧张！',
      titlePinyin: 'Xià gè yuè jiù yào kǎo HSK le, hǎo jǐnzhāng!',
      titleTh: 'เดือนหน้าก็ต้องสอบ HSK แล้ว ตื่นเต้นจังเลย!',
      situation: 'การปรึกษาเรื่องการเตรียมตัวสอบ HSK เทคนิคการจำศัพท์ และการฝึกทำข้อสอบเก่า',
      roles: {
        A: { name: '安娜 (แอนนา)', avatar: '👩‍🎓', label: 'เพื่อน A' },
        B: { name: '张伟 (จางเหว่ย)', avatar: '🧑‍🎓', label: 'เพื่อน B' }
      },
      lines: [
        {
          speaker: 'A',
          cn: '张伟，下个月就要考HSK三级了，我听力和阅读还有很多题做不对。',
          pinyin: 'Zhāng Wěi, xià gè yuè jiù yào kǎo HSK sān jí le, wǒ tīnglì hé yuèdú hái yǒu hěn duō tí zuò bú duì.',
          th: 'จางเหว่ย เดือนหน้าต้องสอบ HSK ระดับ 3 แล้ว พาร์ทการฟังและการอ่านฉันยังทำผิดตั้งหลายข้อเลย'
        },
        {
          speaker: 'B',
          cn: '别担心，还有一个月时间。生词表上的六百个词你都背熟了吗？',
          pinyin: 'Bié dānxīn, hái yǒu yí gè yuè shíjiān. Shēngcíbǐao shang de liùbǎi gè cí nǐ dōu bèi shú le ma?',
          th: 'อย่ากังวลเลย ยังมีเวลาอีกตั้งเดือนนึง คำศัพท์ 600 คำในตารางเธอท่องจนขึ้นใจหรือยัง?'
        },
        {
          speaker: 'A',
          cn: '大部分都记住了，但是听力录音一快，我就反应不过来。',
          pinyin: 'Dà bùfen dōu jìzhù le, dànshì tīnglì lùyīn yí kuài, wǒ jiù fǎnyìng bú guòlái.',
          th: 'ส่วนใหญ่จำได้แล้วล่ะ แต่พอเสียงไฟล์การฟังพูดเร็วปุ๊บ ฉันก็แปลไม่ทันเลย'
        },
        {
          speaker: 'B',
          cn: '你可以每天早上听半小时真题录音，边听边跟读，这样进步最快。',
          pinyin: 'Nǐ kěyǐ měitiān zǎoshang tīng bàn xiǎoshí zhēntí lùyīn, biān tīng biān gēndú, zhèyàng jìnbù zuì kuài.',
          th: 'เธอลองฟังเทปข้อสอบจริงวันละ 30 นาทีทุกเช้าสิ ฟังไปด้วยแล้วพูดตามไปด้วย วิธีนี้ก้าวหน้าเร็วที่สุดเลย'
        },
        {
          speaker: 'A',
          cn: '这个办法真好！明天开始我们每天放学后一起复习吧！',
          pinyin: 'Zhège bànfǎ zhēn hǎo! Míngtiān kāishǐ wǒmen měitiān fàngxué hòu yìqǐ fùxí ba!',
          th: 'วิธีนี้ดีจริงๆ! ตั้งแต่พรุ่งนี้เป็นต้นไป หลังเลิกเรียนพวกเรามาทบทวนด้วยกันทุกวันเถอะ!'
        },
        {
          speaker: 'B',
          cn: '好啊，加油，我们一定能考过的！',
          pinyin: 'Hǎo a, jiāyóu, wǒmen yídìng néng kǎo guò de!',
          th: 'ได้เลย สู้ๆ นะ พวกเราต้องสอบผ่านได้อย่างแน่นอน!'
        }
      ],
      keyVocab: [
        { cn: '紧张', pinyin: 'jǐnzhāng', th: 'ตื่นเต้น / เครียด' },
        { cn: '听力', pinyin: 'tīnglì', th: 'ทักษะการฟัง' },
        { cn: '阅读', pinyin: 'yuèdú', th: 'ทักษะการอ่าน' },
        { cn: '真题', pinyin: 'zhēntí', th: 'ข้อสอบจริงเก่า' },
        { cn: '加油', pinyin: 'jiāyóu', th: 'สู้ๆ / เติมพลัง' }
      ],
      tip: '"边……边……" (biān... biān...) เป็นโครงสร้างบอกการกระทำสองอย่างพร้อมกัน เช่น "边听边读" (ฟังไปด้วย อ่านไปด้วย)'
    },
    {
      id: 'med-4',
      level: 'medium',
      levelLabel: 'ปานกลาง',
      levelNum: 2,
      badgeColor: 'amber',
      category: 'จองโรงแรม & ที่พัก',
      icon: '🏨',
      titleCn: '我在网上预订了一间大床房',
      titlePinyin: 'Wǒ zài wǎngshang yùdìng le yì jiān dàchuángfáng',
      titleTh: 'ฉันจองห้องเตียงเดี่ยวใหญ่ไว้ทางอินเทอร์เน็ต',
      situation: 'การเช็คอินที่ล็อบบี้โรงแรม ตรวจสอบเอกสาร และสอบถามเวลาอาหารเช้าและรหัส Wi-Fi',
      roles: {
        A: { name: '住客 (แขกผู้เข้าพัก)', avatar: '🧳', label: 'ผู้เข้าพัก' },
        B: { name: '前台接待 (พนักงานต้อนรับ)', avatar: '👩‍💼', label: 'พนักงานต้อนรับ' }
      },
      lines: [
        {
          speaker: 'A',
          cn: '你好，我办理入住。我在网上预订了房间，叫李华。',
          pinyin: 'Nǐ hǎo, wǒ bànlǐ rùzhù. Wǒ zài wǎngshang yùdìng le fángjiān, jiào Lǐ Huá.',
          th: 'สวัสดีครับ ผมมาเช็คอินครับ ผมจองห้องไว้ทางเน็ต ชื่อหลี่หัวครับ'
        },
        {
          speaker: 'B',
          cn: '您好，李先生，查到了，是一间大床房，住两晚。请出示您的护照。',
          pinyin: 'Nín hǎo, Lǐ xiānsheng, chádào le, shì yì jiān dàchuángfáng, zhù liǎng wǎn. Qǐng chūshì nín de hùzhào.',
          th: 'สวัสดีค่ะ คุณหลี่ ค้นเจอแล้วค่ะ เป็นห้องเตียงใหญ่ 1 ห้อง พัก 2 คืนนะคะ รบกวนแสดงหนังสือเดินทางด้วยค่ะ'
        },
        {
          speaker: 'A',
          cn: '好的，给您护照。请问房费里包含早餐吗？',
          pinyin: 'Hǎo de, gěi nín hùzhào. Qǐngwèn fángfèi lǐ bāohán zǎocān ma?',
          th: 'นี่ครับพาสปอร์ต ไม่ทราบว่าค่าห้องพักรวมอาหารเช้าไหมครับ?'
        },
        {
          speaker: 'B',
          cn: '包含的。每天早上七点到十点在二楼餐厅享用自助早餐。',
          pinyin: 'Bāohán de. Měitiān zǎoshang qī diǎn dào shí diǎn zài èr lóu cāntīng xiǎngyòng zìzhù zǎocān.',
          th: 'รวมค่ะ ทุกเช้า 07:00 - 10:00 น. สามารถรับประทานบุฟเฟต์อาหารเช้าได้ที่ห้องอาหารชั้น 2 ค่ะ'
        },
        {
          speaker: 'A',
          cn: '太好了，房间里的无线网络密码是多少？',
          pinyin: 'Tài hǎo le, fángjiān lǐ de wúxiàn wǎngluò mìmǎ shì duōshao?',
          th: 'เยี่ยมเลยครับ แล้วรหัส Wi-Fi ในห้องคืออะไรครับ?'
        },
        {
          speaker: 'B',
          cn: '这是您的房卡，房号是806，WiFi密码印在房卡套背面了。',
          pinyin: 'Zhè shì nín de fángkǎ, fánghào shì bābǎilíngliù, WiFi mìmǎ yìn zài fángkǎtào bèimiàn le.',
          th: 'นี่คือคีย์การ์ดของคุณค่ะ ห้อง 806 รหัส Wi-Fi พิมพ์อยู่ด้านหลังซองใส่คีย์การ์ดนะคะ'
        }
      ],
      keyVocab: [
        { cn: '办理入住', pinyin: 'bànlǐ rùzhù', th: 'เช็คอินเข้าพัก' },
        { cn: '预订', pinyin: 'yùdìng', th: 'จองล่วงหน้า' },
        { cn: '护照', pinyin: 'hùzhào', th: 'หนังสือเดินทาง (Passport)' },
        { cn: '包含', pinyin: 'bāohán', th: 'ครอบคลุม / รวมอยู่ด้วย' },
        { cn: '房卡', pinyin: 'fángkǎ', th: 'คีย์การ์ดห้องพัก' }
      ],
      tip: 'คำว่า "大床房" (dàchuángfáng) คือห้องเตียงใหญ่เดี่ยว (King/Queen size) ส่วนห้องเตียงคู่แยกกันเรียกว่า "双床房" (shuāngchuángfáng)'
    },
    {
      id: 'med-5',
      level: 'medium',
      levelLabel: 'ปานกลาง',
      levelNum: 2,
      badgeColor: 'amber',
      category: 'วางแผนเที่ยววันหยุด',
      icon: '🏖️',
      titleCn: '这个周末你有什么打算？',
      titlePinyin: 'Zhège zhōumò nǐ yǒu shénme dǎsuan?',
      titleTh: 'สุดสัปดาห์นี้เธอมีแผนจะทำอะไรเหรอ?',
      situation: 'การพูดคุยถึงแผนการพักผ่อนวันหยุด เช็คสภาพอากาศ และการชวนกันไปปั่นจักรยาน',
      roles: {
        A: { name: '小雨 (เสี่ยวอวี่)', avatar: '👧', label: 'เพื่อน A' },
        B: { name: '浩浩 (ฮ่าวฮ่าว)', avatar: '🧒', label: 'เพื่อน B' }
      },
      lines: [
        {
          speaker: 'A',
          cn: '浩浩，这个周末天气特别晴朗，你打算去哪儿玩？',
          pinyin: 'Hàohao, zhège zhōumò tiānqì tèbié qínglǎng, nǐ dǎsuan qù nǎr wán?',
          th: 'ฮ่าวฮ่าว สุดสัปดาห์นี้อากาศแจ่มใสเป็นพิเศษ เธอมีแผนจะไปเที่ยวที่ไหนไหม?'
        },
        {
          speaker: 'B',
          cn: '我还没想好呢。在家看书有点无聊，你想出去走走吗？',
          pinyin: 'Wǒ hái méi xiǎng hǎo ne. Zài jiā kànshū yǒudiǎn wúliáo, nǐ xiǎng chūqù zǒuzou ma?',
          th: 'ฉันยังคิดไม่ออกเลย อยู่บ้านอ่านหนังสือก็แอบน่าเบื่อนิดหน่อย เธออยากออกไปเดินเล่นข้างนอกไหม?'
        },
        {
          speaker: 'A',
          cn: '我们去奥林匹克森林公园骑自行车吧，那里的风景很美。',
          pinyin: 'Wǒmen qù Àolínpǐkè sēnlín gōngyuán qí zìxíngchē ba, nàlǐ de fēngjǐng hěn měi.',
          th: 'พวกเราไปปั่นจักรยานที่สวนป่าโอลิมปิกกันเถอะ วิวทิวทัศน์ที่นั่นสวยมากเลย'
        },
        {
          speaker: 'B',
          cn: '好主意！我们还可以带一些面包和水果，在草地上野餐。',
          pinyin: 'Hǎo zhǔyi! Wǒmen hái kěyǐ dài yìxiē miànbāo hé shuǐguǒ, zài cǎodì shang yěcān.',
          th: 'ความคิดดีมาก! พวกเรายังสามารถพกขนมปังกับผลไม้ไปปิกนิกบนสนามหญ้าได้ด้วยนะ'
        },
        {
          speaker: 'A',
          cn: '太棒了！那周六早上九点我们在公园南门见吧！',
          pinyin: 'Tài bàng le! Nà zhōuliù zǎoshang jiǔ diǎn wǒmen zài gōngyuán nánmén jiàn ba!',
          th: 'สุดยอดเลย! งั้นวันเสาร์ 9 โมงเช้าเจอกันที่ประตูทิศใต้ของสวนสาธารณะนะ!'
        },
        {
          speaker: 'B',
          cn: '一言为定，不见不散！',
          pinyin: 'Yì yán wéi dìng, bú jiàn bú sàn!',
          th: 'ตกลงตามนี้ สัญญากันแล้วไม่เจอกันไม่แยกย้าย!'
        }
      ],
      keyVocab: [
        { cn: '打算', pinyin: 'dǎsuan', th: 'วางแผน / ตั้งใจว่าจะ' },
        { cn: '晴朗', pinyin: 'qínglǎng', th: 'ท้องฟ้าแจ่มใส ปลอดโปร่ง' },
        { cn: '骑自行车', pinyin: 'qí zìxíngchē', th: 'ปั่นจักรยาน' },
        { cn: '野餐', pinyin: 'yěcān', th: 'ปิกนิก' },
        { cn: '不见不散', pinyin: 'bú jiàn bú sàn', th: 'ไม่เจอกันไม่เลิกรา (สำนวนนัดพบ)' }
      ],
      tip: '"不见不散" (Bú jiàn bú sàn) เป็นสำนวนจีนยอดนิยมเวลาทำนัดหมาย แปลว่า "ถ้ายังไม่เจอกันก็จะไม่กลับบ้านหรือยอมยกเลิก"'
    },
    {
      id: 'med-6',
      level: 'medium',
      levelLabel: 'ปานกลาง',
      levelNum: 2,
      badgeColor: 'amber',
      category: 'สั่งเครื่องดื่ม & ชานม',
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
        {
          speaker: 'B',
          cn: '欢迎光临！请问今天想喝点什么？',
          pinyin: 'Huānyíng guānglín! Qǐngwèn jīntiān xiǎng hē diǎn shénme?',
          th: 'ยินดีต้อนรับครับ! วันนี้รับเครื่องดื่มอะไรดีครับ?'
        },
        {
          speaker: 'A',
          cn: '你好，我要一杯招牌珍珠奶茶，大杯的。',
          pinyin: 'Nǐ hǎo, wǒ yào yì bēi zhāopai zhēnzhū nǎichá, dà bēi de.',
          th: 'สวัสดีครับ ผมขอชานมไข่มุกซิกเนเจอร์ 1 แก้ว ไซส์ใหญ่ครับ'
        },
        {
          speaker: 'B',
          cn: '甜度和冰块怎么选？我们有全糖、半糖和微糖。',
          pinyin: 'Tiándù hé bīngkuài zěnme xuǎn? Wǒmen yǒu quántáng, bàntáng hé wēitáng.',
          th: 'ความหวานและน้ำแข็งรับระดับไหนดีครับ? มีหวานปกติ (100%), หวานครึ่งเดียว (50%) และหวานน้อย (30%) ครับ'
        },
        {
          speaker: 'A',
          cn: '微糖，三分甜就好。冰块要少冰。',
          pinyin: 'Wēi táng, sān fēn tián jiù hǎo. Bīngkuài yào shǎo bīng.',
          th: 'หวานน้อยครับ เอาแค่ 30% พอ ส่วนน้ำแข็งขอน้ำแข็งน้อยครับ'
        },
        {
          speaker: 'B',
          cn: '好的，需要加布丁或者椰果吗？',
          pinyin: 'Hǎo de, xūyào jiā bùdīng huòzhě yēguǒ ma?',
          th: 'รับทราบครับ ต้องการเพิ่มพุดดิ้งหรือวุ้นมะพร้าวเพิ่มไหมครับ?'
        },
        {
          speaker: 'A',
          cn: '不用了，打包带走，谢谢！',
          pinyin: 'Bú yòng le, dǎbāo dài zǒu, xièxie!',
          th: 'ไม่เพิ่มแล้วครับ ใส่ถุงกลับบ้านครับ ขอบคุณครับ!'
        }
      ],
      keyVocab: [
        { cn: '欢迎光临', pinyin: 'huānyíng guānglín', th: 'ยินดีต้อนรับ' },
        { cn: '招牌', pinyin: 'zhāopai', th: 'เมนูเด็ด / เมนูซิกเนเจอร์' },
        { cn: '微糖', pinyin: 'wēitáng', th: 'หวานน้อย (ประมาณ 30%)' },
        { cn: '少冰', pinyin: 'shǎobīng', th: 'น้ำแข็งน้อย' },
        { cn: '打包', pinyin: 'dǎbāo', th: 'ห่อกลับบ้าน (Takeaway)' }
      ],
      tip: 'ศัพท์สั่งชานมในจีน: หวานปกติ = 全糖 (quántáng), หวาน 50% = 半糖 (bàntáng), หวานน้อย 30% = 微糖 (wēitáng), ไม่ใส่น้ำตาล = 无糖 (wútáng)'
    },

    // =========================================================================
    // LEVEL 3: HARD (ยาก) - บทสนทนาเชิงลึก ภาษาทางการ สำนวน และการสื่อสารขั้นสูง
    // =========================================================================
    {
      id: 'hard-1',
      level: 'hard',
      levelLabel: 'ยาก',
      levelNum: 3,
      badgeColor: 'rose',
      category: 'การสัมภาษณ์งาน',
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
        {
          speaker: 'A',
          cn: '您好，李先生。我看过您的简历，请先简要谈谈您最大的竞争优势是什么？',
          pinyin: 'Nín hǎo, Lǐ xiānsheng. Wǒ kànguò nín de jiǎnlì, qǐng xiān jiǎnyào tántan nín zuì dà de jìngzhēng yōushì shì shénme?',
          th: 'สวัสดีครับคุณหลี่ ผมได้อ่านเรซูเม่ของคุณแล้ว ช่วยสรุปสั้นๆ ให้ฟังหน่อยได้ไหมครับว่าจุดแข็งทางการแข่งขันที่โดดเด่นที่สุดของคุณคืออะไร?'
        },
        {
          speaker: 'B',
          cn: '我认为自己最大的优势在于跨文化沟通能力与快速学习新技术的能力。',
          pinyin: 'Wǒ rènwéi zìjǐ zuì dà de yōushì zàiyú kuà wénhuà gōutōng nénglì yǔ kuàisù xuéxí xīn jìshù de nénglì.',
          th: 'ผมคิดว่าจุดแข็งที่สุดของผมคือความสามารถในการสื่อสารข้ามวัฒนธรรม และการเรียนรู้เทคโนโลยีใหม่ๆ ได้อย่างรวดเร็วครับ'
        },
        {
          speaker: 'A',
          cn: '面对工作中的突发挑战或团队成员意见分歧时，您通常如何协调解决？',
          pinyin: 'Miànduì gōngzuò zhōng de tūfā tiǎozhàn huò tuánduì chéngyuán yìjiàn fēnqí shí, nín tōngcháng rúhé xiétiáo jiějué?',
          th: 'เวลาที่เผชิญกับความท้าทายกะทันหันในการทำงาน หรือความเห็นที่ไม่ตรงกันของสมาชิกในทีม โดยปกติคุณมีวิธีประสานและแก้ไขอย่างไรครับ?'
        },
        {
          speaker: 'B',
          cn: '首先，我会保持客观理智，倾听各方的顾虑；其次，围绕共同目标寻找最优解，确保项目按期交付。',
          pinyin: 'Shǒuxiān, wǒ huì bǎochí kèguān lǐzhì, qīngtīng gè fāng de gùlǜ; qícì, wéirào gòngtóng mùbiāo xúnzhǎo zuì yōujiě, quèbǎo xiàngmù ànqī jiāofù.',
          th: 'อันดับแรก ผมจะรักษาความเป็นกลางและมีเหตุผล รับฟังข้อกังวลของทุกฝ่าย จากนั้นจะยึดเป้าหมายร่วมเป็นหลักเพื่อหาทางออกที่ดีที่สุด เพื่อให้มั่นใจว่าส่งมอบโครงการได้ทันเวลาครับ'
        },
        {
          speaker: 'A',
          cn: '回答得非常专业。我们会在三个工作日内通过邮件通知您终审结果。',
          pinyin: 'Huídá de fēicháng zhuānyè. Wǒmen huì zài sān gè gōngzuòrì nèi tōngguò yóujiàn tōngzhī nín zhōngshěn jiéguǒ.',
          th: 'ตอบได้เป็นมืออาชีพมากครับ พวกเราจะแจ้งผลการพิจารณารอบสุดท้ายผ่านทางอีเมลภายใน 3 วันทำการครับ'
        },
        {
          speaker: 'B',
          cn: '非常感谢各位面试官的时间与指点，期待有机会加入贵公司！',
          pinyin: 'Fēicháng gǎnxiè gèwèi miànshìguān de shíjiān yǔ zhǐdiǎn, qīdài yǒu jīhuì jiārù guì gōngsī!',
          th: 'ขอบพระคุณสำหรับเวลาและคำชี้แนะจากคณะกรรมการทุกท่านเป็นอย่างสูง หวังเป็นอย่างยิ่งว่าจะมีโอกาสได้ร่วมงานกับบริษัทของท่านครับ!'
        }
      ],
      keyVocab: [
        { cn: '简历', pinyin: 'jiǎnlì', th: 'ประวัติย่อ / เรซูเม่' },
        { cn: '竞争优势', pinyin: 'jìngzhēng yōushì', th: 'ความได้เปรียบทางการแข่งขัน' },
        { cn: '跨文化沟通', pinyin: 'kuà wénhuà gōutōng', th: 'การสื่อสารข้ามวัฒนธรรม' },
        { cn: '意见分歧', pinyin: 'yìjiàn fēnqí', th: 'ความคิดเห็นไม่ลงรอยกัน' },
        { cn: '贵公司', pinyin: 'guì gōngsī', th: 'บริษัทของท่าน (คำยกย่องทางการ)' }
      ],
      tip: 'ในการสัมภาษณ์งานภาษาจีน การใช้โครงสร้าง "首先……其次……" (อันดับแรก... ถัดมา...) ช่วยให้คำตอบมีตรรกะและโครงสร้างที่ดูเป็นมืออาชีพมาก'
    },
    {
      id: 'hard-2',
      level: 'hard',
      levelLabel: 'ยาก',
      levelNum: 3,
      badgeColor: 'rose',
      category: 'ให้คำปรึกษา & กำลังใจ',
      icon: '🤝',
      titleCn: '别给自己太大压力，循序渐进才能成功',
      titlePinyin: 'Bié gěi zìjǐ tài dà yālì, xúnxùjiànjìn cái néng chénggōng',
      titleTh: 'อย่ากดดันตัวเองมากเกินไป ค่อยเป็นค่อยไปจึงจะประสบความสำเร็จ',
      situation: 'การปลอบใจเพื่อนที่กำลังเผชิญกับความเครียดสูง การแนะนำวิธีบริหารเวลาและจัดระเบียบความคิด',
      roles: {
        A: { name: '晓峰 (เสี่ยวเฟิง)', avatar: '😔', label: 'เพื่อนที่เครียด' },
        B: { name: '志强 (จื้อเฉียง)', avatar: '😊', label: 'เพื่อนที่ให้คำปรึกษา' }
      },
      lines: [
        {
          speaker: 'A',
          cn: '志强，我最近感到身心俱疲，手头的事情越积越多，总担心自己做不好。',
          pinyin: 'Zhìqiáng, wǒ zuìjìn gǎndào shēnxīn jù pí, shǒutóu de shìqing yuè jī yuè duō, zǒng dānxīn zìjǐ zuò bù hǎo.',
          th: 'จื้อเฉียง ช่วงนี้ฉันรู้สึกเหนื่อยล้าทั้งกายทั้งใจ งานในมือก็กองพอกพูนขึ้นเรื่อยๆ กังวลตลอดเวลาว่าจะทำได้ไม่ดี'
        },
        {
          speaker: 'B',
          cn: '你的心情我很能理解。人不是机器，遇到瓶颈期感到焦虑是很正常的反应。',
          pinyin: 'Nǐ de xīnqíng wǒ hěn néng lǐjiě. Rén bú shì jīqì, yùdào píngjǐngqī gǎndào jiāolǜ shì hěn zhèngcháng de fǎnyìng.',
          th: 'ความรู้สึกของนายฉันเข้าใจดีเลย คนเราไม่ใช่หุ่นยนต์ เวลาเจอกับช่วงติดคอขวดแล้วเกิดความวิตกกังวลเป็นเรื่องปกติมาก'
        },
        {
          speaker: 'A',
          cn: '可是期限一天天临近，我常常整夜失眠，不知道该从何入手。',
          pinyin: 'Kěshì qīxiàn yì tiāntiān línjìn, wǒ chángcháng zhěng yè shīmián, bù zhīdào gāi cóng hé rùshǒu.',
          th: 'แต่เดดไลน์ก็กระชั้นชิดเข้ามาทุกวัน ฉันมักจะนอนไม่หลับทั้งคืน ไม่รู้ว่าจะเริ่มลงมือจากตรงไหนก่อนดี'
        },
        {
          speaker: 'B',
          cn: '试着把大任务拆解成若干个微小步骤吧，分清轻重缓急，一口吃不成胖子。',
          pinyin: 'Shìzhe bǎ dà rènwu chāijiě chéng ruògān gè wēixiǎo bùzhòu ba, fēnqīng qīngzhòng huǎnjí, yì kǒu chī bù chéng pàngzi.',
          th: 'ลองย่อยภารกิจใหญ่ให้เป็นขั้นตอนเล็กๆ ดูสิ แยกแยะความสำคัญและความเร่งด่วน กินคำเดียวไม่อาจอ้วนได้ในพริบตาหรอก'
        },
        {
          speaker: 'A',
          cn: '听你这么一分析，我心里踏实多了。今晚我就先把头绪理一理。',
          pinyin: 'Tīng nǐ zhème yì fēnxī, wǒ xīnlǐ tàshi duō le. Jīnwǎn wǒ jiù xiān bǎ tóuxù lǐyìlǐ.',
          th: 'พอได้ฟังนายวิเคราะห์แบบนี้ ใจฉันสงบมั่นคงขึ้นเยอะเลย คืนนี้ฉันจะจัดระเบียบความคิดก่อนเป็นอันดับแรก'
        },
        {
          speaker: 'B',
          cn: '放宽心，有什么困难随时找我，我们共同分担！',
          pinyin: 'Fàngkuān xīn, yǒu shénme kùnnan suíshí zhǎo wǒ, wǒmen gòngtóng fēndān!',
          th: 'ผ่อนคลายจิตใจนะ มีปัญหาอะไรติดต่อฉันได้ตลอดเวลา พวกเราช่วยกันแบกรับ!'
        }
      ],
      keyVocab: [
        { cn: '身心俱疲', pinyin: 'shēnxīn jù pí', th: 'เหนื่อยล้าทั้งร่างกายและจิตใจ' },
        { cn: '瓶颈期', pinyin: 'píngjǐngqī', th: 'ช่วงทางตัน / จุดคอขวดของการพัฒนา' },
        { cn: '轻重缓急', pinyin: 'qīngzhòng huǎnjí', th: 'ความหนักเบาและความเร่งด่วน (ลำดับความสำคัญ)' },
        { cn: '一口吃不成胖子', pinyin: 'yì kǒu chī bù chéng pàngzi', th: 'กินคำเดียวไม่อ้วน (สุภาษิต: ความสำเร็จต้องใช้เวลา)' },
        { cn: '踏实', pinyin: 'tàshi', th: 'สบายใจ / มั่นคงปลอดภัย' }
      ],
      tip: '"一口吃不成胖子" เป็นสุภาษิตจีนคลาสสิก หมายถึง สิ่งใหญ่ๆ ต้องค่อยๆ สั่งสมและทำทีละก้าว ไม่สามารถเร่งรัดให้สำเร็จได้ในทันที'
    },
    {
      id: 'hard-3',
      level: 'hard',
      levelLabel: 'ยาก',
      levelNum: 3,
      badgeColor: 'rose',
      category: 'สภาพภูมิอากาศ & สิ่งแวดล้อม',
      icon: '🍂',
      titleCn: '北京的秋天秋高气爽，是一年中最宜人的季节',
      titlePinyin: 'Běijīng de qiūtiān qiūgāoqìshuǎng, shì yì nián zhōng zuì yírén de jìjié',
      titleTh: 'ฤดูใบไม้ร่วงของปักกิ่งท้องฟ้าโปร่งอากาศเย็นสบาย เป็นฤดูที่น่ารื่นรมย์ที่สุดในรอบปี',
      situation: 'การสนทนาแลกเปลี่ยนเกี่ยวกับความแตกต่างของสภาพอากาศ 4 ฤดู และผลกระทบต่อวิถีชีวิต',
      roles: {
        A: { name: '马克 (มาร์ก)', avatar: '👱', label: 'ชาวต่างชาติ' },
        B: { name: '晨晨 (เฉินเฉิน)', avatar: '👩', label: 'ชาวปักกิ่ง' }
      },
      lines: [
        {
          speaker: 'A',
          cn: '晨晨，我发现最近北京的气候格外舒适，早晚微凉，没有夏天的酷暑了。',
          pinyin: 'Chénchen, wǒ fāxiàn zuìjìn Běijīng de qìhòu géwài shūshì, zǎowǎn wēiliáng, méiyǒu xiàtiān de kùshǔ le.',
          th: 'เฉินเฉิน ผมสังเกตว่าช่วงนี้อากาศของปักกิ่งสบายเป็นพิเศษ เช้าค่ำอากาศเย็นสบาย ไม่มีไอร้อนอบอ้าวของฤดูร้อนแล้ว'
        },
        {
          speaker: 'B',
          cn: '没错，中国人常说“秋高气爽”，九月和十月正是北京观赏红叶的最佳时期。',
          pinyin: 'Méi cuò, Zhōngguó rén cháng shuō "qiūgāoqìshuǎng", jiǔ yuè hé shí yuè zhèng shì Běijīng guānshǎng hóngyè de zuì jiā shíqī.',
          th: 'ใช่เลย คนจีนมักพูดว่า "ชิวเกาชี่ส่วง" (ฟ้าโปร่งลมสบาย) เดือนกันยายนและตุลาคมเป็นช่วงเวลาทองในการชมใบไม้เปลี่ยนสีที่ปักกิ่งเลยล่ะ'
        },
        {
          speaker: 'A',
          cn: '不过空气似乎越来越干燥了，我的皮肤很不习惯，得经常喝水和涂保湿霜。',
          pinyin: 'Búguò kōngqì sìhū yuèláiyuè gānzào le, wǒ de pífū hěn bù xíguàn, děi chīngcháng hēshuǐ hé tú bǎoshīshuāng.',
          th: 'แต่อากาศดูเหมือนจะแห้งขึ้นเรื่อยๆ ผิวผมไม่ค่อยชินเลย ต้องคอยดื่มน้ำและทาครีมบำรุงผิวอยู่บ่อยๆ'
        },
        {
          speaker: 'B',
          cn: '北方气候确实比南方干燥得多。到了十一月下旬还会供暖，室内更加温热干燥。',
          pinyin: 'Běifāng qìhòu quèshí bǐ nánfāng gānzào de duō. Dào le shíyī yuè xiàxún hái huì gōngnuǎn, shìnèi gèngjiā wēnrè gānzào.',
          th: 'ภูมิอากาศทางตอนเหนือแห้งกว่าทางใต้มากจริงๆ พอถึงปลายเดือนพฤศจิกายนจะเริ่มเปิดระบบทำความร้อน (ฮีตเตอร์) ในอาคารจะยิ่งอุ่นและแห้งขึ้นอีก'
        },
        {
          speaker: 'A',
          cn: '听起来冬天很有特色！希望今年冬天下雪的时候能去故宫看看雪景。',
          pinyin: 'Tīng qǐlai dōngtiān hěn yǒu tèsè! Xīwàng jīnnián dōngtiān xiàxuě de shíhou néng qù Gùgōng kànkan xuějǐng.',
          th: 'ฟังดูแล้วฤดูหนาวมีเอกลักษณ์มากเลย! หวังว่าฤดูหนาวปีนี้ตอนที่หิมะตก จะได้ไปชมวิวหิมะที่พระราชวังต้องห้ามสักครั้ง'
        },
        {
          speaker: 'B',
          cn: '“白雪镶红墙”的故宫简直绝美，到时候我一定陪你一起去！',
          pinyin: '"Bái xuě xiāng hóng qiáng" de Gùgōng jiǎnzhí juéměi, dào shíhou wǒ yídìng péi nǐ yìqǐ qù!',
          th: 'ภาพ "หิมะขาวตัดกับกำแพงสีแดง" ของพระราชวังต้องห้ามนั้นงดงามตระการตามาก ถึงเวลานั้นฉันจะไปเป็นเพื่อนเธอแน่นอน!'
        }
      ],
      keyVocab: [
        { cn: '秋高气爽', pinyin: 'qiūgāoqìshuǎng', th: 'อากาศฤดูใบไม้ร่วงที่โปร่งโล่ง เย็นสบาย สดชื่น' },
        { cn: '干燥', pinyin: 'gānzào', th: 'แห้งแล้ง / ขาดความชื้น' },
        { cn: '供暖', pinyin: 'gōngnuǎn', th: 'การจ่ายระบบทำความร้อนส่วนกลาง (Heating)' },
        { cn: '故宫', pinyin: 'Gùgōng', th: 'พระราชวังต้องห้าม (กู้กง)' },
        { cn: '绝美', pinyin: 'juéměi', th: 'งดงามไร้ที่ติ' }
      ],
      tip: '"秋高气爽" เป็นสำนวนสี่ตัวอักษรยอดนิยมที่ใช้บรรยายสภาพอากาศที่ดีที่สุดของประเทศจีนตอนเหนือในช่วงฤดูใบไม้ร่วง'
    },
    {
      id: 'hard-4',
      level: 'hard',
      levelLabel: 'ยาก',
      levelNum: 3,
      badgeColor: 'rose',
      category: 'เจรจาธุรกิจ & บริการหลังการขาย',
      icon: '📦',
      titleCn: '关于商品质量问题的协商与退换货处理',
      titlePinyin: 'Guānyú shāngpǐn zhìliàng wèntí de xiéshāng yǔ tuìhuànhuò chǔlǐ',
      titleTh: 'การเจรจาต่อรองเรื่องปัญหาคุณภาพสินค้าและการขอเปลี่ยนคืนสินค้า',
      situation: 'การติดต่อฝ่ายบริการลูกค้าเพื่อแจ้งปัญหา ได้รับสินค้าไม่ตรงตามคำสั่งซื้อ และเจรจาขอรับการชดเชย',
      roles: {
        A: { name: '买家客户 (ลูกค้า)', avatar: '📱', label: 'ผู้ซื้อ' },
        B: { name: '售后主管 (หัวหน้าฝ่ายบริการ)', avatar: '🎧', label: 'ฝ่ายบริการหลังการขาย' }
      },
      lines: [
        {
          speaker: 'A',
          cn: '客服主管您好，我昨天收到了你们寄出的智能设备，但拆封后发现外壳有明显划痕且无法正常开机。',
          pinyin: 'Kèfù zhǔguǎn nín hǎo, wǒ zuótiān shōudào le nǐmen jìchū de zhìnéng shèbèi, dàn chāifēng hòu fāxiàn wàiké yǒu míngxiǎn huáhén qiě wúfǎ zhèngcháng kāijī.',
          th: 'เรียนหัวหน้าฝ่ายบริการลูกค้าครับ เมื่อวานนี้ผมได้รับอุปกรณ์สมาร์ทดีไวซ์ที่ทางร้านจัดส่งมา แต่หลังจากแกะกล่องพบว่าตัวเครื่องมีรอยขีดข่วนชัดเจนและไม่สามารถเปิดเครื่องได้ตามปกติครับ'
        },
        {
          speaker: 'B',
          cn: '非常抱歉给您带来如此糟糕的体验！请您先上传受损部位的照片及订单编号，我立刻为您核实。',
          pinyin: 'Fēicháng bàoqiàn gěi nín dàilái rúcǐ zāogāo de tǐyàn! Qǐng nín xiān shàngchuán shòusǔn bùwèi de zhàopiàn jí dìngdān biānhào, wǒ lìkè wèi nín héshí.',
          th: 'ต้องขออภัยเป็นอย่างยิ่งที่ทำให้ท่านได้รับประสบการณ์ที่ไม่ราบรื่นเช่นนี้ครับ! รบกวนท่านอัปโหลดรูปถ่ายส่วนที่เสียหายพร้อมหมายเลขคำสั่งซื้อ ผมจะตรวจสอบให้ท่านทันทีครับ'
        },
        {
          speaker: 'A',
          cn: '凭据我已经发送至对话框。由于该设备急需在下周的项目展示中使用，我希望能够加急更换新品。',
          pinyin: 'Píngjù wǒ yǐjīng fāsòng zhì duìhuàkuāng. Yóuyú gāi shèbèi jíxū zài xià zhōu de xiàngmù zhǎnshì zhōng shǐyòng, wǒ xīwàng nénggòu jiājí gēnghuàn xīnpǐn.',
          th: 'หลักฐานผมได้ส่งเข้าไปในช่องแชทเรียบร้อยแล้วครับ เนื่องจากอุปกรณ์ตัวนี้จำเป็นต้องใช้งานด่วนในการพรีเซนต์โปรเจกต์สัปดาห์หน้า ผมจึงต้องการขอเปลี่ยนเครื่องใหม่แบบด่วนพิเศษครับ'
        },
        {
          speaker: 'B',
          cn: '情况属实，确实是物流运输途中碰撞所致。我们今天内会为您顺丰特快补发一台全新未拆封机器。',
          pinyin: 'Qíngkuàng shǔshí, quèshí shì wùliú yùnshū túzhōng pèngzhuàng suǒ zhì. Wǒmen jīntiān nèi huì wèi nín Shùnfēng tèkuài bǔfā yì tái quánxīn wèi chāifēng jīqì.',
          th: 'ตรวจสอบข้อมูลแล้วเป็นความจริงครับ เกิดจากการกระแทกในกระบวนการขนส่ง ทางเราจะจัดส่งเครื่องใหม่แกะกล่องชดเชยให้ท่านผ่าน SF Express แบบด่วนพิเศษภายในวันนี้ครับ'
        },
        {
          speaker: 'A',
          cn: '那旧机器需要我如何寄回？运费由谁承担？',
          pinyin: 'Nà jiù jīqì xūyào wǒ rúhé jìhuí? Yùnfèi yóu shéi chéngdān?',
          th: 'แล้วเครื่องเดิมต้องให้ผมส่งกลับอย่างไรครับ? ใครจะเป็นผู้รับผิดชอบค่าขนส่งครับ?'
        },
        {
          speaker: 'B',
          cn: '快递员上门派送新机的同时会直接取回旧件，所有运费均由我们全额承担，并额外附赠一年延保。',
          pinyin: 'Kuàidìyuán shàngmén pàisòng xīn jī de tóngshí huì zhíjiē qǔhuí jiù jiàn, suǒyǒu yùnfèi jūn yóu wǒmen quán’é chéngdān, bìng éwài fùzèng yì nián yánbǎo.',
          th: 'พนักงานส่งของจะไปรับเครื่องเดิมกลับพร้อมกับตอนนำส่งเครื่องใหม่ ค่าขนส่งทั้งหมดทางเรารับผิดชอบ 100% พร้อมมอบประกันขยายเวลาเพิ่มอีก 1 ปีเป็นกรณีพิเศษครับ'
        }
      ],
      keyVocab: [
        { cn: '售后', pinyin: 'shòuhòu', th: 'บริการหลังการขาย' },
        { cn: '拆封', pinyin: 'chāifēng', th: 'เปิดกล่อง / แกะซีล' },
        { cn: '凭据', pinyin: 'píngjù', th: 'หลักฐานอ้างอิง' },
        { cn: '顺丰特快', pinyin: 'Shùnfēng tèkuài', th: 'ขนส่ง SF Express แบบด่วนพิเศษ' },
        { cn: '承担', pinyin: 'chéngdān', th: 'รับภาระ / รับผิดชอบค่าใช้จ่าย' }
      ],
      tip: 'ในการเจรจาภาษาจีนเชิงธุรกิจ วลี "给您带来不便，深表歉意" หรือ "由我方全额承担" แสดงถึงความเป็นมืออาชีพและความรับผิดชอบขั้นสูง'
    },
    {
      id: 'hard-5',
      level: 'hard',
      levelLabel: 'ยาก',
      levelNum: 3,
      badgeColor: 'rose',
      category: 'ภาพยนตร์ วรรณกรรม & วัฒนธรรม',
      icon: '🎬',
      titleCn: '这部电影探讨的人性与传统文化内涵令人深思',
      titlePinyin: 'Zhè bù diànyǐng tàntǎo de rénxìng yǔ chuántǒng wénhuà nèihán lìng rén shēnsī',
      titleTh: 'ภาพยนตร์เรื่องนี้สะท้อนธรรมชาติของมนุษย์และคุณค่าวัฒนธรรมดั้งเดิมได้อย่างลึกซึ้งน่าคิด',
      situation: 'การวิจารณ์ภาพยนตร์แนวชีวิต การแลกเปลี่ยนความประทับใจเกี่ยวกับบทบาทและการแสดงออกทางวัฒนธรรม',
      roles: {
        A: { name: '子轩 (จื่อเซวียน)', avatar: '👓', label: 'นักวิจารณ์ภาพยนตร์' },
        B: { name: '雨婷 (อวี่ถิง)', avatar: '🎨', label: 'ผู้ชื่นชอบศิลปะ' }
      },
      lines: [
        {
          speaker: 'A',
          cn: '雨婷，周末你看最近热映的那部现实主义题材影片了吗？视觉语言和叙事节奏极其震撼。',
          pinyin: 'Yǔtíng, zhōumò nǐ kàn zuìjìn rèyìng de nà bù xiànshízhǔyì tícái yǐngpiàn le ma? Shìjué yǔyán hé xùshì jiézòu jíqí zhènhàn.',
          th: 'อวี่ถิง เมื่อวันหยุดเธอได้ดูหนังแนวดราม่าสมจริงที่กำลังฉายอยู่เรื่องนั้นหรือยัง? ภาษาภาพและจังหวะการเล่าเรื่องทรงพลังสะเทือนอารมณ์มาก'
        },
        {
          speaker: 'B',
          cn: '看了！尤其是片中关于几代人之间情感羁绊与价值观冲突的刻画，细腻得令人动容。',
          pinyin: 'Kàn le! Yóuqí shì piān zhōng guānyú jǐ dài rén zhījiān qínggǎn jībàn yǔ jiàzhíguān chōngtū de kèhuà, xìnì de lìng rén dòngróng.',
          th: 'ดูแล้ว! โดยเฉพาะการถ่ายทอดสายสัมพันธ์ความผูกพันและความขัดแย้งทางค่านิยมระหว่างคนหลายรุ่นในเรื่อง ทำได้อย่างประณีตลึกซึ้งจนน้ำตาซึม'
        },
        {
          speaker: 'A',
          cn: '男主角最后在风雨中做出的抉择，深刻诠释了责任与牺牲的真谛，让人意犹未尽。',
          pinyin: 'Nánzhǔjué zuìhòu zài fēngyǔ zhōng zuòchū de juézé, shēnkè quánshì le zérèn yǔ xīshēng de zhēndì, ràng rén yìyóuwèijìn.',
          th: 'การตัดสินใจของพระเอกท่ามกลางพายุฝนในฉากสุดท้าย ได้อธิบายความหมายที่แท้จริงของความรับผิดชอบและการเสียสละได้อย่างลึกซึ้ง ทำให้ดูจบแล้วอารมณ์ยังค้างไม่รู้คลาย'
        },
        {
          speaker: 'B',
          cn: '很多优秀的艺术作品之所以能够引起广泛共鸣，正是因为它触及了人类共通的情感底色。',
          pinyin: 'Hěn duō yōuxiù de yìshù zuòpǐn zhī suǒyǐ nénggòu yǐnqǐ guǎngfàn gòngmíng, zhèng shì yīnwèi tā chùjí le rénlèi gòngtōng de qínggǎn dǐsè.',
          th: 'งานศิลปะชั้นยอดจำนวนมากที่สามารถสร้างแรงกระเพื่อมสะท้อนใจผู้คนได้อย่างกว้างขวาง ก็เพราะมันได้สัมผัสเข้าถึงแก่นแท้ของอารมณ์ร่วมที่มนุษย์ทุกคนมีเหมือนกัน'
        },
        {
          speaker: 'A',
          cn: '分析得太透彻了！优秀的文化传播往往就是润物细无声地触动人心。',
          pinyin: 'Fēnxī de tài tòuchè le! Yōuxiù de wénhuà chuánbō wǎngwǎng jiùshì rùnwùxìwúshēng de chùdòng rénxīn.',
          th: 'วิเคราะห์ได้เฉียบขาดลึกซึ้งมาก! การส่งต่อวัฒนธรรมที่ดีงาม มักจะสัมผัสหัวใจผู้คนได้อย่างนุ่มนวลเงียบสงบดุจสายฝนหล่อเลี้ยงผืนดิน'
        },
        {
          speaker: 'B',
          cn: '期待导演未来的下一部力作，能带给我们更多思想上的启迪。',
          pinyin: 'Qīdài dǎoyǎn wèilái de xià yí bù lìzuò, néng dài gěi wǒmen gèng duō sīxiǎng shang de qǐdí.',
          th: 'ตั้งตารอผลงานชิ้นเอกเรื่องต่อไปของผู้กำกับท่านนี้ หวังว่าจะมอบแรงบันดาลใจทางความคิดให้พวกเรายิ่งขึ้นไปอีก'
        }
      ],
      keyVocab: [
        { cn: '细腻', pinyin: 'xìnì', th: 'ประณีต / ลึกซึ้งละเอียดอ่อน' },
        { cn: '情感羁绊', pinyin: 'qínggǎn jībàn', th: 'สายใยความผูกพันทางอารมณ์' },
        { cn: '意犹未尽', pinyin: 'yìyóuwèijìn', th: 'อารมณ์ค้าง / ยังดื่มด่ำไม่รู้เบื่อ' },
        { cn: '共鸣', pinyin: 'gòngmíng', th: 'ความรู้สึกร่วม / เสียงสะท้อนในใจ' },
        { cn: '润物细无声', pinyin: 'rùnwùxìwúshēng', th: 'หล่อเลี้ยงสรรพสิ่งอย่างเงียบงัน (สุภาษิต: การส่งอิทธิพลดีๆ อย่างนุ่มนวล)' }
      ],
      tip: '"润物细无声" มาจากบทกวีของตู้ฝู่ (杜甫) กวีเอกสมัยราชวงศ์ถัง ปัจจุบันนิยมใช้เปรียบเปรยถึงการศึกษาหรือศิลปะที่ขัดเกลาจิตใจคนอย่างค่อยเป็นค่อยไป'
    },
    {
      id: 'hard-6',
      level: 'hard',
      levelLabel: 'ยาก',
      levelNum: 3,
      badgeColor: 'rose',
      category: 'การเช่าคอนโด & ทำสัญญา',
      icon: '🏠',
      titleCn: '咨询租房合同细节与物业费承担方式',
      titlePinyin: 'Zīxún zūfáng hétong xìjié yǔ wùyèfèi chéngdān fāngshì',
      titleTh: 'การปรึกษารายละเอียดสัญญาเช่าห้องพักและวิธีแบ่งเบาค่าส่วนกลาง',
      situation: 'การติดต่อเอเจนต์อสังหาริมทรัพย์เพื่อเช่าคอนโด ตรวจสอบระยะเวลาสัญญา เงินประกัน และสิ่งอำนวยความสะดวก',
      roles: {
        A: { name: '租客 (ผู้เช่า)', avatar: '💼', label: 'ผู้เช่าห้อง' },
        B: { name: '房产经纪人 (นายหน้า)', avatar: '🏢', label: 'นายหน้าอสังหาฯ' }
      },
      lines: [
        {
          speaker: 'A',
          cn: '经纪人您好，昨天实地看过的这套精装修两居室，我对整体户型和采光非常满意，想了解一下具体的租赁条款。',
          pinyin: 'Jīngjìrén nín hǎo, zuótiān shídì kànguò de zhè tào jīngzhuāngxiū liǎngjūshì, wǒ duì zhěngtǐ hùxíng hé cǎiguāng fēicháng mǎnyì, xiǎng liǎojiě yíxià jùtǐ de zūlìn tiáokuǎn.',
          th: 'สวัสดีครับคุณนายหน้า คอนโด 2 ห้องนอนตกแต่งครบที่ไปดูหน้างานจริงเมื่อวาน ผมพอใจกับผังห้องและการรับแสงธรรมชาติมากครับ อยากทราบเงื่อนไขสัญญาเช่าโดยละเอียดครับ'
        },
        {
          speaker: 'B',
          cn: '房东要求的付款方式是押一付三，租期至少一年起签。月租金包含物业费和取暖费，水电燃气自理。',
          pinyin: 'Fángdōng yāoqiú de fùkuǎn fāngshì shì yā yī fù sān, zūqī zhìshǎo yì nián qǐ qiān. Yuè zūjīn bāohán wùyèfèi hé qǔnuǎnfèi, shuǐ diàn ránqì zìlǐ.',
          th: 'เงื่อนไขการชำระเงินของเจ้าของห้องคือ มัดจำ 1 เดือน จ่ายล่วงหน้า 3 เดือน สัญญาขั้นต่ำ 1 ปี ค่าเช่ารายเดือนรวมค่าส่วนกลางและค่าทำความร้อนแล้ว ส่วนค่าน้ำ ค่าไฟ และค่าแก๊สผู้เช่าดูแลเองครับ'
        },
        {
          speaker: 'A',
          cn: '如果中途由于工作变动等不可抗力需要提前解约，押金该如何退还？',
          pinyin: 'Rúguǒ zhōngtú yóuyú gōngzuò biàndòng děng bùkěkànglì xūyào tíqián jiěyuē, yājīn gāi rúhé tuìhuán?',
          th: 'หากระหว่างสัญญาจำเป็นต้องยกเลิกสัญญาก่อนกำหนดด้วยเหตุสุดวิสัย เช่น มีการย้ายงาน เงินมัดจำจะคืนอย่างไรครับ?'
        },
        {
          speaker: 'B',
          cn: '合同中会明确规定：提前一个月书面通知房东并协助找到转租租客，便可全额退还押金，无需承担违约金。',
          pinyin: 'Hétong zhōng huì míngquè guīdìng: tíqián yí gè yuè shūmiàn tōngzhī fángdōng bìng xiézhù zhǎodào zhuǎnzū zūkè, biàn kě quán’é tuìhuán yājīn, wúxū chéngdān wéiyuējīn.',
          th: 'ในสัญญาระบุไว้อย่างชัดเจนครับว่า หากแจ้งเจ้าของเป็นลายลักษณ์อักษรล่วงหน้า 1 เดือน และช่วยหาผู้เช่าต่อได้ จะได้รับเงินมัดจำคืนเต็มจำนวนโดยไม่ต้องเสียค่าปรับผิดสัญญาครับ'
        },
        {
          speaker: 'A',
          cn: '那家具电器的维修责任呢？非人为损坏由谁负责修缮？',
          pinyin: 'Nà jiājù diànqì de wéixiū zérèn ne? Fēi rénwéi sǔnhuài yóu shéi fùzé xiūshàn?',
          th: 'แล้วความรับผิดชอบในการซ่อมแซมเฟอร์นิเจอร์และเครื่องใช้ไฟฟ้าล่ะครับ? หากชำรุดจากการใช้งานตามปกติ ใครเป็นผู้รับผิดชอบซ่อมครับ?'
        },
        {
          speaker: 'B',
          cn: '签约当天会附带详细的屋内设施清单。正常损耗由房东负责免费维修，双方权益都有充分保障。',
          pinyin: 'Qiānyuē dāngtiān huì fùdài xiángxì de wūnèi shèshī qīngdān. Zhèngcháng sǔnhào yóu fángdōng fùzé miǎnfèi wéixiū, shuāngfāng quányì dōu yǒu chōngfèn bǎozhàng.',
          th: 'ในวันเซ็นสัญญาจะมีเอกสารรายการสิ่งอำนวยความสะดวกแนบให้ตรวจนับครับ หากสึกหรอตามปกติเจ้าของจะดูแลซ่อมแซมให้ฟรี มีการคุ้มครองสิทธิของทั้งสองฝ่ายอย่างเต็มที่ครับ'
        }
      ],
      keyVocab: [
        { cn: '精装修', pinyin: 'jīngzhuāngxiū', th: 'ตกแต่งพร้อมอยู่ (Fully furnished)' },
        { cn: '押一付三', pinyin: 'yā yī fù sān', th: 'มัดจำ 1 เดือน จ่ายล่วงหน้าทุกๆ 3 เดือน' },
        { cn: '不可抗力', pinyin: 'bùkěkànglì', th: 'เหตุสุดวิสัย (Force majeure)' },
        { cn: '解约', pinyin: 'jiěyuē', th: 'ยกเลิกสัญญา' },
        { cn: '违约金', pinyin: 'wéiyuējīn', th: 'ค่าปรับผิดสัญญา' }
      ],
      tip: '"押一付三" เป็นรูปแบบการเช่าบ้านมาตรฐานที่สุดในเมืองใหญ่ของจีน แปลว่า จ่ายเงินมัดจำ 1 เดือน และจ่ายค่าเช่าล่วงหน้าครั้งละ 3 เดือน'
    }
  ];
})();
