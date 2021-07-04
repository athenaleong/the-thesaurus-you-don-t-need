import requests
import nltk
from nltk.tag import pos_tag, map_tag
from nltk.tokenize import TweetTokenizer
import random

partOfSpeechMap = {
    'VERB': 'intransitive verb',
    'NOUN': 'noun',
    'ADJ': 'adjective',
    'ADP': 'prepositions',
    'CONJ': 'conjunction'
}
def getSynonym(word, tag):
    response = requests.get(f"https://api.dictionaryapi.dev/api/v1/entries/en_US/{word}").json()
    if 'title' in response or tag not in partOfSpeechMap:
        return word
    meanings = response[0]['meaning']
    synonyms = []
    definitions = meanings.get(partOfSpeechMap[tag], [])
    for d in definitions:
        synonyms.extend(d.get('synonyms', []))
    if synonyms:
        return random.choice(synonyms)
    return word


def convertSentence(sentence):
    text = TweetTokenizer().tokenize(sentence)
    posTagged = pos_tag(text)
    simplifiedTags = [(word, map_tag('en-ptb', 'universal', tag)) for word, tag in posTagged]
    newText = []
    for tag in simplifiedTags:
        print(tag)
        newText.append(getSynonym(tag[0], tag[1]))
    return ' '.join(newText)


# print(covertSentence("Every time you come around, you know I can't say no. Every time the sun goes down, I let you take control. I can feel the paradise before my world implodes. And tonight had something wonderful"))
# getSynonym(',', '.')
print(convertSentence("My name is Joey"))