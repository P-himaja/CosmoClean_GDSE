import  { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import ML from '../images/MLimg.png';
import dataset from '../images/dataset_4.png';

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
        
      {/* //   <p className='form-title'>Satellite Information</p>
      //   <form onSubmit={handleSubmit}>
      //     <div className="form-group">
      //       <label htmlFor="Event_id">Event Id</label>
      //       <input
      //         type="text"
      //         id="event_id"
      //         name="event_id"
      //         value={formData.name}
      //         onChange={handleChange}
      //         required
      //       />
      //     </div>
      //     <div className="form-group">
      //       <label htmlFor="time">Time to Tca</label>
      //       <input
      //         type="number"
      //         id="number"
      //         name="time"
      //         value={formData.email}
      //         onChange={handleChange}
      //         required
      //       />
      //     </div>
      //     <div className="form-group">
      //       <label htmlFor="Risk">Risk</label>
      //       <textarea
      //         id="message"
      //         name="message"
      //         rows="4"
      //         value={formData.message}
      //         onChange={handleChange}
      //         required
      //       ></textarea>
      //     </div>
      //     <div className="form-group">
      //       <label htmlFor="time">Time to Tca</label>
      //       <input
      //         type="number"
      //         id="number"
      //         name="time"
      //         value={formData.email}
      //         onChange={handleChange}
      //         required
      //       />
      //     </div>
      //     <div className="form-group">
      //       <label htmlFor="time">Time to Tca</label>
      //       <input
      //         type="number"
      //         id="number"
      //         name="time"
      //         value={formData.email}
      //         onChange={handleChange}
      //         required
      //       />
      //     </div><div className="form-group">
      //       <label htmlFor="time">Time to Tca</label>
      //       <input
      //         type="number"
      //         id="number"
      //         name="time"
      //         value={formData.email}
      //         onChange={handleChange}
      //         required
      //       />
      //     </div><div className="form-group">
      //       <label htmlFor="time">Time to Tca</label>
      //       <input
      //         type="number"
      //         id="number"
      //         name="time"
      //         value={formData.email}
      //         onChange={handleChange}
      //         required
      //       />
      //     </div>
      //     <button type="submit">Submit</button>
      //   </form> */}
      </div>
  );
}

export default Analytics;
