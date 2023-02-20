import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user,dispatch } = useContext(AuthContext);
const navigate=useNavigate();

  const handlelogout=async(e)=>{

    e.preventDefault();
    
      dispatch({ type: "LOGOUT" });
  
      navigate("/login");
    
    
  }
  return (
    
    <div className="navbar">
      <div className="navContainer">
        <Link to="/home" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">BookMyRoom</span>
        </Link>
        
          <div className="navItems">
            <span>{user.username}</span>
            <button className="navButton" onClick={handlelogout}>Logout</button>
          </div>
        
      </div>
    </div>
  );
};

export default Navbar;
