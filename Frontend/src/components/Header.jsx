import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import logo from "../images/logo11.png";

const Header = () => {
  return (
    <header>
      <div class="wrap">

      <div className="nav-area">
        <Link to="/" className="logo">
          <img src={logo} alt="Logo" />
        </Link>
        <Navbar />
      </div>
    </div>
    </header>
  );
};

export default Header;
