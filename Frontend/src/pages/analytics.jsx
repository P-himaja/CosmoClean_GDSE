import  { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import ML from '../images/MLimg.png';
import dataset from '../images/dataset.png';

function Analytics()  {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

    
    
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    
      <div className="back_analytics">
       <div style={{ width: "75%", boxShadow: "3px 3px 6px gray", borderRadius: "2rem", display: "flex",marginLeft:"12.5%", padding: "2rem" }}>
          <div className="data-text" >
            <p style={{ color: "white", fontWeight: "500", fontSize: "26px" , background: "radial-gradient(45% 100% at 50% 50%,#fff 30%,hsla(0,0%,100%,.4) 100%)" ,backgroundClip: "text"}}>Our Project</p>
            <p style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "1.1em" }}>Our Machine Learning Model takes array of all the necessary factors to predict the collision risk and returns a bool whether collision can take place or not </p>
          </div>
          <img src={ML} alt="ML" className="analysis-image" />
        </div>
        <div className='info_analytics'>
        <p id="title_analytics">Salient Features</p>
        <div className="Features_divider__1WGjU"></div>
        <div class="content_analytics"><div>
        <div class="Features_featureTitle__oyjT_">
        <h5>Comprehensive data</h5></div><p>Includes all necessary parameters for accurate collision assessment.</p></div><div><div class="Features_featureTitle__oyjT_"><h5>Accurate Prediction</h5></div><p>Leverages historical data and analysis to predict collision risks with high precision.</p></div><div><div class="Features_featureTitle__oyjT_"><h5>Efficient analysis</h5></div><p>Presents clear and informative warnings about impending collisions, aiding decision-making.</p></div></div>
        </div>
        <p id="title_analytics">Dataset used</p>
        <div className="Features_divider__1WGjU"></div>
        <img src={dataset} alt="dataset" className="dataset" />
             </div>
  );
}

export default Analytics;
