from flask import Flask, request, jsonify
from joblib import load
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
classification_threshold = 0.25
# Load the model
model = load('risk_model.joblib')
input_features = np.load('x_test.npy')
def make_prediction():
    predictions = model.predict(input_features)
    threshold = classification_threshold  # You can adjust this threshold as needed
    y_last_pred = (predictions > threshold).astype(int)
    num = y_last_pred[0][0]  # Accessing the value at the first row and first column
    if num == 1:
        return "High risk"
    else:
        return "Low risk"
# prediction = model.predict(input_features)
# print(prediction)

@app.route('/api/predictionform', methods=['POST'])
def predict():
    prediction = make_prediction()
    return jsonify({'prediction': prediction})


if __name__ == '__main__':
    app.run(debug=True)