from flask import Flask, jsonify, request
import joblib

app = Flask(__name__)

# Load the joblib model
model = joblib.load("your_model.joblib")

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json(force=True)
    prediction = model.predict(data['input_data'])
    return jsonify(prediction.tolist())

if __name__ == '__main__':
    app.run(debug=True)
