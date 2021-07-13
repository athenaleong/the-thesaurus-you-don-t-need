import os 
from flask import Flask, send_from_directory, jsonify, request
import asyncio
from flask_cors import CORS
from . transform import main


app = Flask(__name__, static_folder="../frontend/build", static_url_path="/static")
CORS(app)

@app.route('/health', methods=[ 'GET' ])
def health():
    return jsonify(status=200)

@app.route('/transform', methods=['GET','POST'])
def register():
    if request.method == 'POST':
        sentence = request.json.get('sentence')
        return main(sentence)
    return "Unsuccesful", 418
