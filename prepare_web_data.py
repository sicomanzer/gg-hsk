# prepare_web_data.py
import json, sys, re, jieba

sys.stdout.reconfigure(encoding='utf-8')

# Load the verified vocab
with open('e:/gg/HSK/hsk3_vocab.json', 'r', encoding='utf-8') as f:
    vocab = json.load(f)

# Build categorized sentences for writing & reading
sentences = []
sentence_id = 1

def chunk_sentence(text, target_word):
    # Remove period or question mark at end for chunking
    text_clean = text.strip()
    end_punct = ''
    if text_clean.endswith(('。', '？', '！', '.', '?', '!')):
        end_punct = text_clean[-1]
        text_clean = text_clean[:-1]
    
    # Split by comma if present
    clauses = re.split(r'([，,])', text_clean)
    all_chunks = []
    
    # Helper to merge tokens into 3 to 5 chunks
    for clause in clauses:
        if not clause or clause in ['，', ',']:
            if clause:
                if all_chunks:
                    all_chunks[-1] += clause
                else:
                    all_chunks.append(clause)
            continue
        words = list(jieba.cut(clause))
        all_chunks.extend(words)
        
    # Now merge if there are too many small single-character chunks
    merged = []
    curr = ''
    for token in all_chunks:
        if len(curr) + len(token) <= 4 and len(all_chunks) > 4:
            curr += token
        else:
            if curr:
                merged.append(curr)
            curr = token
    if curr:
        merged.append(curr)
        
    # Ensure between 3 and 5 chunks if possible
    while len(merged) > 5:
        # Merge the two shortest adjacent chunks
        min_idx = 0
        min_len = 999
        for i in range(len(merged) - 1):
            combined_len = len(merged[i]) + len(merged[i+1])
            if combined_len < min_len:
                min_len = combined_len
                min_idx = i
        merged[min_idx] = merged[min_idx] + merged[min_idx+1]
        del merged[min_idx+1]
        
    if end_punct and merged:
        merged[-1] += end_punct
        
    return merged

for item in vocab:
    for e in item['entries']:
        ex_full = e.get('example_full', '').strip()
        meaning = e.get('meaning', '').strip()
        if ex_full and len(ex_full) >= 4 and not ex_full.startswith('甲：') and '～' not in ex_full:
            # Generate sentence chunks
            try:
                chunks = chunk_sentence(ex_full, item['hanzi'])
            except Exception:
                chunks = [ex_full]
                
            sentences.append({
                'id': sentence_id,
                'wordId': item['id'],
                'targetWord': item['hanzi'],
                'targetPinyin': item['pinyin'],
                'meaning': meaning,
                'rawExample': e.get('example', ''),
                'fullSentence': ex_full,
                'chunks': chunks
            })
            sentence_id += 1

print(f"Prepared {len(vocab)} words and {len(sentences)} sentence exercises.")

# Write as JavaScript files so they can be loaded both via HTTP and directly as file://
with open('e:/gg/HSK/vocab_data.js', 'w', encoding='utf-8') as f:
    f.write('// HSK Level 3 Vocabulary Data (600 Words)\n')
    f.write('window.HSK_VOCAB = ' + json.dumps(vocab, ensure_ascii=False, indent=2) + ';\n')

with open('e:/gg/HSK/sentences_data.js', 'w', encoding='utf-8') as f:
    f.write('// HSK Level 3 Sentence Exercises Data\n')
    f.write('window.HSK_SENTENCES = ' + json.dumps(sentences, ensure_ascii=False, indent=2) + ';\n')

print("Saved vocab_data.js and sentences_data.js successfully.")
