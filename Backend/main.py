from flask import Flask, jsonify, request
import joblib
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})

model = joblib.load(r"D:\GDSC\CosmoClean_GDSE-11\Backend\risk_model.joblib") 

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json(force=True)
    prediction = model.predict(data['input_data'])
    return jsonify(prediction.tolist())

if __name__ == '__main__':
    app.run(debug=True)
