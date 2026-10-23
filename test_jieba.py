import jieba, json, sys
sys.stdout.reconfigure(encoding='utf-8')

test_sentences = [
    "我爸爸是医生。",
    "桌子上有一本书。",
    "我们坐出租车去火车站。",
    "他在打电话呢。",
    "这个苹果很大。",
    "我买了个电脑。",
    "遇到事情，不要着急。",
    "这种感冒药对我没什么作用。"
]

for s in test_sentences:
    words = list(jieba.cut(s))
    print(s, "->", words)
