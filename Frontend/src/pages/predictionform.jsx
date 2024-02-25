import React, { useState } from 'react';
import axios from 'axios';

const PredictionButton = () => {
  const [prediction, setPrediction] = useState('');

  const handlePredictClick = async () => {
    try {
      // Make an HTTP POST request to the Flask backend
      const response = await axios.post('http://127.0.0.1:5000/api/predictionform');
      // Handle the response (e.g., display the prediction)
      setPrediction(response.data.prediction);
    } catch (error) {
      // Handle any errors
      console.error('Prediction failed:', error);
    }
  };

  return (
    <div className= "predict_container">
      <button onClick={handlePredictClick}>Predict</button>
      <p>{prediction}</p>
    </div>
  );
};

export default PredictionButton;