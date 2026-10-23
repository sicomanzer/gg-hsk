import json, sys
sys.stdout.reconfigure(encoding='utf-8')
data = json.load(open('e:/gg/HSK/hsk3_vocab.json', encoding='utf-8'))

sentences = []
for item in data:
    for e in item['entries']:
        ex = e.get('example_full', '').strip()
        if ex and len(ex) >= 4 and not ex.startswith('甲：') and not '～' in ex:
            sentences.append({
                'word_id': item['id'],
                'hanzi': item['hanzi'],
                'pinyin': item['pinyin'],
                'meaning': e['meaning'],
                'sentence': ex
            })

print('Valid full sentences count:', len(sentences))
for s in sentences[:10]:
    print(f"[{s['hanzi']}] {s['sentence']} ({s['meaning']})")
