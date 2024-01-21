import { auth } from "../components/firebase-config";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { useNavigate } from "react-router-dom";

function Login() {
  // let navigate = useNavigate();
  

  const signInWithGoogle = async() => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      // .then((result) => {
      //   localStorage.setItem("isAuth", true);
      //   setIsAuth(true);
      //   navigate("/");
      // })
      // .catch((error) => {
      //   // Handle sign-in errors here
      //   console.error("Error signing in with Google:", error);
      // });
  };

  return (
    <div className="loginPage">
      <p>Sign In With Google to Continue</p>
      <button className="login-with-google-btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </div>
  );
}

export default Login;