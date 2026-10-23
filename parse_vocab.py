# parse_vocab.py
import sys, pypdf, re, json

sys.stdout.reconfigure(encoding='utf-8')

reader = pypdf.PdfReader('E:/File HSK/Vocabulary_HSK_3.pdf')
full_text = ''
for page in reader.pages:
    full_text += '\n' + page.extract_text()

# Clean page headers and numbers
full_text = re.sub(r'\s*\d+\s*/\s*37\s*', '\n', full_text)
full_text = re.sub(r'新\s*HSK（三级）词汇[^\n]*\n', '', full_text)
full_text = re.sub(r'ค\s*ำ\s*ศัพท์\s*HSK[^\n]*\n', '', full_text)
full_text = re.sub(r'序号\s*ล\s*ำ\s*ดับที่\s*词\s*ค\s*ำ\s*ศัพท์\s*拼音\s*พินอิน\s*词类\s*ประเภทข\s*องค\s*ำ\s*词译文\s*คว\s*ำ\s*มหม\s*ำ\s*ย\s*例句\s*ตัวอย\s*่\s*ำงประโยค', '', full_text)

matches = list(re.finditer(r'(?:^|\n)\s*(\d+)\s*【([^】]+)】\s*([^\n\r]+)?', full_text))

POS_LIST = ['ก.', 'น.', 'ค.', 'วิ.', 'ส.', 'เลข.', 'ลน.', 'ลก.', 'บ.', 'สัน.', 'ชค.', 'ชส.', 'ช.', 'อ.', 'ปร.', 'กย.']

def clean_thai(t):
    t = re.sub(r'([ก-ฮ])\s+ำ', r'\1ำ', t)
    t = re.sub(r'([ก-ฮ])\s+([่้๊๋์])', r'\1\2', t)
    t = re.sub(r'([ก-ฮ]ั)\s+([ก-ฮ])', r'\1\2', t)
    t = re.sub(r'น\s+้า|น้า', 'น้ำ', t)
    t = re.sub(r'ทั\s*ง', 'ทั้ง', t)
    t = re.sub(r'ชิ\s*น', 'ชิ้น', t)
    t = re.sub(r'ตั\s*ง', 'ตั้ง', t)
    t = re.sub(r'ครั\s*ง', 'ครั้ง', t)
    t = re.sub(r'วันนี\s*', 'วันนี้', t)
    t = re.sub(r'พรุ่งนี\s*', 'พรุ่งนี้', t)
    t = re.sub(r'ตอนนี\s*', 'ตอนนี้', t)
    t = re.sub(r'ซื\s*อ', 'ซื้อ', t)
    t = re.sub(r'จ้\s*านวน|จ้านวน', 'จำนวน', t)
    t = re.sub(r'ค้\s*า|ค้า', 'คำ', t)
    t = re.sub(r'เต้นร้า', 'เต้นรำ', t)
    t = re.sub(r'ตู้\s*', 'ตู้', t)
    t = re.sub(r'ขึ\s*น', 'ขึ้น', t)
    t = re.sub(r'ห้\s*อง', 'ห้อง', t)
    t = re.sub(r'ร้\s*อน', 'ร้อน', t)
    t = re.sub(r'ช้\s*า', 'ช้า', t)
    t = re.sub(r'ใหม\s*่', 'ใหม่', t)
    t = re.sub(r'ใหญ\s*่', 'ใหญ่', t)
    t = re.sub(r'ใส\s*่', 'ใส่', t)
    t = re.sub(r'ใช\s*้', 'ใช้', t)
    t = re.sub(r'ให\s*้', 'ให้', t)
    t = re.sub(r'ได\s*้', 'ได้', t)
    t = re.sub(r'ไม\s*่', 'ไม่', t)
    t = re.sub(r'ไว\s*้', 'ไว้', t)
    t = re.sub(r'ใกล\s*้', 'ใกล้', t)
    t = re.sub(r'เก้\s*าอี\s*้|เก้าอี\s*้', 'เก้าอี้', t)
    t = re.sub(r'หน้\s*า', 'หน้า', t)
    t = re.sub(r'ชื\s*อ', 'ชื่อ', t)
    t = re.sub(r'เสื\s*อ', 'เสื้อ', t)
    t = re.sub(r'ข้\s*าง', 'ข้าง', t)
    t = re.sub(r'\s+', ' ', t)
    return t.strip()

def clean_pinyin(p):
    p = p.strip()
    p = re.sub(r'([a-zA-Zāáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ])\s+([a-zA-Zāáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ])', r'\1\2', p)
    p = re.sub(r'\s+', ' ', p)
    return p.strip()

vocab_list = []

for i in range(len(matches)):
    start = matches[i].start()
    end = matches[i+1].start() if i + 1 < len(matches) else len(full_text)
    chunk = full_text[start:end].strip()
    
    m = matches[i]
    num = int(m.group(1))
    hanzi = m.group(2).strip()
    first_line_rest = (m.group(3) or '').strip()
    other_lines = chunk.split('\n')[1:]
    
    # Regex to capture pinyin allowing dots, parentheses, ellipses
    pinyin_match = re.match(r'^([a-zA-Zāáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ\s’\'\(\)\…\.\–\—\-（）]+?)(?=(?:' + '|'.join([re.escape(pos) for pos in POS_LIST]) + r'|[ก-๙]|$))', first_line_rest)
    
    pinyin = ''
    rest_of_first = ''
    if pinyin_match:
        pinyin = clean_pinyin(pinyin_match.group(1))
        rest_of_first = first_line_rest[pinyin_match.end():].strip()
    else:
        rest_of_first = first_line_rest
    
    content_lines = []
    if rest_of_first:
        content_lines.append(rest_of_first)
    for l in other_lines:
        l = l.strip()
        if l:
            content_lines.append(l)
            
    entries = []
    for line in content_lines:
        pos = ''
        line_clean = line
        for p in POS_LIST:
            if line_clean.startswith(p):
                pos = p
                line_clean = line_clean[len(p):].strip()
                break
        
        ex_match = re.search(r'([\u4e00-\u9fff～].*)$', line_clean)
        meaning = ''
        example = ''
        if ex_match:
            example = ex_match.group(1).strip()
            meaning = line_clean[:ex_match.start()].strip()
        else:
            meaning = line_clean.strip()
            
        meaning = clean_thai(meaning)
        # normalize tilde in example
        clean_hanzi_for_replace = re.sub(r'（.*|….*', '', hanzi).strip()
        example_full = example.replace('～', clean_hanzi_for_replace).replace('~', clean_hanzi_for_replace)
        
        entries.append({
            'pos': pos,
            'meaning': meaning,
            'example': example,
            'example_full': example_full
        })
        
    level = 1 if num <= 150 else (2 if num <= 300 else 3)
    
    vocab_list.append({
        'id': num,
        'hanzi': hanzi,
        'pinyin': pinyin,
        'level': level,
        'entries': entries
    })

print(f'Successfully parsed {len(vocab_list)} words.')

with open('e:/gg/HSK/hsk3_vocab.json', 'w', encoding='utf-8') as f:
    json.dump(vocab_list, f, ensure_ascii=False, indent=2)

print('Saved to e:/gg/HSK/hsk3_vocab.json')
