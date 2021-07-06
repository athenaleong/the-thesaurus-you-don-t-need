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


async def convertSentence(sentence):
    text = TweetTokenizer().tokenize(sentence)
    posTagged = pos_tag(text)
    simplifiedTags = [(word, map_tag('en-ptb', 'universal', tag)) for word, tag in posTagged]
    newText = []
    coros = [getSynonym(tag[0], tag[1]) for tag in simplifiedTags]
    newText = await asyncio.gather(*coros)
    return ' '.join(newText)


# print(covertSentence("Every time you come around, you know I can't say no. Every time the sun goes down, I let you take control. I can feel the paradise before my world implodes. And tonight had something wonderful"))
# getSynonym(',', '.')
# asyncio.run(convertSentence("Hi babe. I am so thankful for you. I would have never imagined the kind of comfort, love and happiness you would bring into my life. Till this day I am amazed that we somehow managed to find each other in this big wide world. The universe truly has a special way of making things happen."))
loop = asyncio.get_event_loop()
print(loop.run_until_complete(convertSentence("Hi babe. I am so thankful for you. I would have never imagined the kind of comfort, love and happiness you would bring into my life. Till this day I am amazed that we somehow managed to find each other in this big wide world. The universe truly has a special way of making things happen.")))


