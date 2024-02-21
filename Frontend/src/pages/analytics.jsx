import  { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';

const analytics = () => {
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
      <div className="Analysis-form">
        <p className='form-title'>Satellite Information</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="Event_id">Event Id</label>
            <input
              type="text"
              id="event_id"
              name="event_id"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="time">Time to Tca</label>
            <input
              type="number"
              id="number"
              name="time"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="Risk">Risk</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="time">Time to Tca</label>
            <input
              type="number"
              id="number"
              name="time"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="time">Time to Tca</label>
            <input
              type="number"
              id="number"
              name="time"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div><div className="form-group">
            <label htmlFor="time">Time to Tca</label>
            <input
              type="number"
              id="number"
              name="time"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div><div className="form-group">
            <label htmlFor="time">Time to Tca</label>
            <input
              type="number"
              id="number"
              name="time"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
  );
};

export default analytics;
