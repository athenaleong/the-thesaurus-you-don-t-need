import os 
from flask import Flask, send_from_directory, jsonify, request
import asyncio
from . transform import main
from flask_cors import CORS


app = Flask(__name__)
CORS(app)


@app.route('/health', methods=[ 'GET' ])
def health():
    return jsonify(status=200)

@app.route('/transform', methods=['GET','POST'])
def register():
    if request.method == 'POST':
        sentence = request.form.get('sentence')
        return main(sentence)
    return "Unsuccesful", 418
