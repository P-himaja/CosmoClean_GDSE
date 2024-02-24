from flask import Flask, request, jsonify
from joblib import load
import numpy as np


app = Flask(__name__)

# Load the model
model = load('risk_model.joblib')
input_features = np.load('x_test.npy')
def make_prediction():
    prediction = model.predict(input_features)
    return prediction
prediction = model.predict(input_features)
print(prediction)

@app.route('/predict', methods=['POST'])
def predict():
    prediction = make_prediction()
    return jsonify({'prediction': prediction}), 200


if __name__ == '__main__':
    app.run(debug=True)