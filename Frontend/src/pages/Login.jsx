import { auth } from "../components/firebase-config";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login({ setIsAuth }) {
  let navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        localStorage.setItem("isAuth", true);
        setIsAuth(true);
        navigate("/");
      })
      .catch((error) => {
        // Handle sign-in errors here
        console.error("Error signing in with Google:", error);
      });
  };

  return (
    <div className="login_back">
    <div className="Sign_container">
      <div className="Sign_full_box">
        <div className="Sign_form-container">
          <form action="user_login.php" method="post">
            <h2>Sign In</h2>
            <input type="text" placeholder="Username or Email" name="uname" id="username" required />
            <input type="password" placeholder="Password" name="psw" id="password" required />
            <button type="submit" id="sign-up">Sign In</button>
          </form>
        </div>

        <div className="Sign_google">
          <p>OR</p>
          <div className="Sign_signin">
            <button type="button" className="login-with-google-btn" id="googlee" onClick={signInWithGoogle}>
              Sign in with Google
            </button>
          </div>
        </div>
      </div>

      <div className="Sign_title">
        <span>Welcome to </span>
        <b id="main_login">CosmoClean!</b>
      </div>
    </div>
    </div>
  );
}
export default Login;
// return (
//   <div className="loginPage">
//     <p>Sign In With Google to Continue</p>
//     <button className="login-with-google-btn" onClick={signInWithGoogle}>
//       Sign in with Google
//     </button>
//   </div>
// );
// }
