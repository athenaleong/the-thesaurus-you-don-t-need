import requests
import nltk
from nltk.tag import pos_tag, map_tag
from nltk.tokenize import TweetTokenizer
import random
import asyncio
import aiohttp
import json

partOfSpeechMap = {
    'VERB': 'intransitive verb',
    'NOUN': 'noun',
    'ADJ': 'adjective',
    'ADP': 'prepositions',
    'CONJ': 'conjunction'
}


async def getSynonym(word, tag):
    if tag not in partOfSpeechMap:
                return word
    url = f"https://api.dictionaryapi.dev/api/v1/entries/en_US/{word}"
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as response:
            response = await response.json(content_type=None)
            if 'title' in response:
                return word
            meanings = response[0]['meaning']
            synonyms = []
            definitions = meanings.get(partOfSpeechMap[tag], [])
            for d in definitions:
                synonyms.extend(d.get('synonyms', []))
            if synonyms:
                return random.choice(synonyms)
            return word


async def convertSentence(text):
    length = [len(list(filter(None, TweetTokenizer().tokenize(s)))) for s in text.split('\n')]
    words = TweetTokenizer().tokenize(text)
    posTagged = pos_tag(words)
    simplifiedTags = [(word, map_tag('en-ptb', 'universal', tag)) for word, tag in posTagged]
    coros = [getSynonym(tag[0], tag[1]) for tag in simplifiedTags]
    newSentence = await asyncio.gather(*coros)

    #Combine sentence with whitespace
    for i in range(0, len(length) - 1):
        newSentence.insert(length[i], '\n')
        length[i+1] += length[i] + 1

    return ' '.join(newSentence)

def main(sentence):
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)
    result = loop.run_until_complete(convertSentence(sentence))
    return result




