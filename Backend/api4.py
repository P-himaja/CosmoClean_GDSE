from joblib import load
import numpy as np
classification_threshold = 0.25
x = np.array([[1]])
num = x[0][0]
if num == 1:
    print("High risk")
else:
    print("Low risk")

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
prediction = make_prediction()
print(prediction)



