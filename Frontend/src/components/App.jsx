import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import CreatePost from "../pages/CreatePost";
import Login from "../pages/Login";
import Blogs from "../pages/BlogsHome";
import Layout from "./Layout";
import Home from "../pages/Home";
import Volunteer from "../pages/Volunteer";
import ContactUs from "../pages/ContactUs";
import SignUp from "../pages/SignUp";
import Selectmenu from "../pages/Research";
import Chat from "../pages/chat";
import PredictionForm from "../pages/predictionform";
import Community from "../pages/Community";
const App = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const [prediction, setPrediction] = useState('');
  const [inputData, setInputData] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.post('http://localhost:5000/predict', {
        input_data: [inputData] // Pass user input as input data for prediction
      });
      setPrediction(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs isAuth={isAuth} />} />
         <Route path="Research" element={<Selectmenu  />} />
          <Route path="volunteer" element={<Volunteer />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="createpost" element={<CreatePost isAuth={isAuth} />} />
          <Route path="login" element={<Login setIsAuth={setIsAuth} />} />
          <Route path="predictionform" element= {<PredictionForm/>}/>
          <Route path="chat" element={<Chat />}/>
          <Route path="community" element={<Community />}/>

        </Route>
      </Routes>
    </>
  );
};

export default App;
