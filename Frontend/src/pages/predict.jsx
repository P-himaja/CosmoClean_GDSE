import React, { useState } from 'react';
import axios from 'axios';

const Predict = () => {
  const [inputData, setInputData] = useState('');
  const [prediction, setPrediction] = useState('');

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handlePredictClick = async () => {
    try {
      const response = await axios.post('http://localhost:5000/predict', {
        input_data: inputData // Pass user input data to the backend
      });
      const result = response.data;
      setPrediction(result); // Update state with the prediction result
    } catch (error) {
      console.error('Error:', error);
    }
  };
  function MyComponent() {
    const [yLast, setYLast] = useState(null);
  
    useEffect(() => {
      fetch('/get_y_last')
        .then(response => response.json())
        .then(data => setYLast(data.y_last));
    }, []);
  }

  return (
    <div>
      <h2>Prediction</h2>
      <label>
        Input Data:
        <input className='predict_input' type="text" value={inputData} onChange={handleInputChange} />
      </label>
      <button className="predict_btn"onClick={handlePredictClick}>Predict</button>
      <div>
        {prediction && (
          <div>
            <h3>Result:</h3>
            <p>{prediction.toString()}</p> {/* Display the boolean result */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Predict;
