import json, sys
sys.stdout.reconfigure(encoding='utf-8')
data = json.load(open('e:/gg/HSK/hsk3_vocab.json', encoding='utf-8'))

# Check empty pinyins or empty meanings
empty_pinyin = [x for x in data if not x['pinyin']]
empty_entries = [x for x in data if not x['entries']]
no_meaning = [x for x in data if not any(e['meaning'] for e in x['entries'])]

print('Empty pinyin count:', len(empty_pinyin), [x['hanzi'] for x in empty_pinyin])
print('Empty entries count:', len(empty_entries))
print('No meaning count:', len(no_meaning), [x['hanzi'] for x in no_meaning])

for item in data[:15]:
    print(f"[{item['id']}] {item['hanzi']} | {item['pinyin']} | {item['entries'][0]['meaning']}")
