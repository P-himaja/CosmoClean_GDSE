from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai

app = Flask(__name__)
CORS(app)

genai.configure(api_key='AIzaSyB1iezzoIb8qy511wjb2YRFclF27LKW0kI')
model = genai.GenerativeModel('gemini-pro')

@app.route('/api/chat', methods=['POST'])
def chat():
    user_input = request.json.get('message')

    response = model.generate_content(user_input).candidates[0].content.parts[0].text

    return jsonify({'message': response})

if __name__ == '__main__':
    app.run(debug=True)
