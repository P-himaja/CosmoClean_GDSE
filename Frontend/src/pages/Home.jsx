import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Home_info from '../components/Home_info';
import space from '../images/space.jpg';


// import img1 from '../images/BrainPeace11.png';


const Home = () => {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    fetchJoke();
  }, []);

  const fetchJoke = async () => {
    try {
      const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
      setJoke(response.data.setup + ' ' + response.data.punchline);
    } catch (error) {
      console.error('Error fetching joke:', error);
    }
  };

    return (  
      <div className="home-content">
     <div className="space-pic">
      <div class="text">
        <h1>Cosmo Clean</h1>
        <p>The escalating volume of space debris poses a critical global challenge and thus demands immediate attention.By acknowledging the gravity of the situation we are on a mission to safeguard new space sexplorations.</p>
      </div>
     
     
     </div>
     <svg xmlns="http://www.w3.org/2000/svg" className="wave" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,128L40,117.3C80,107,160,85,240,90.7C320,96,400,128,480,122.7C560,117,640,75,720,90.7C800,107,880,181,960,213.3C1040,245,1120,235,1200,202.7C1280,171,1360,117,1400,90.7L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
     <Home_info />
     </div>
     
     
    );
  }; 
export default Home;

