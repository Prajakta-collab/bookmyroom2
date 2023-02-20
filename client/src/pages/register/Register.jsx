import axios from 'axios';
import React, { useContext } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import "./register.css";

function Register() {

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    phone:"",
    city:"",
    country:"",
    email:"",
    isAdmin:false,


  });

  const navigate = useNavigate();

  const handleRegister=async(e)=>{
    e.preventDefault();
    dispatch({ type: "REGISTER_START" });
    try {
      const res = await axios.post("/auth/register", credentials);
      dispatch({ type: "REGISTER_SUCCESS", payload: res.data.details });
      navigate("/login")
    } catch (err) {
      dispatch({ type: "REGISTER_FAILURE", payload: err.response.data });
    }


    
  }
const handleSelect=()=>{
  setCredentials((prev) => ({ ...prev, isAdmin: true }));
}
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const {dispatch,lodading,error}=useContext(AuthContext);
  return (
    <div className="register">
     <div className="registerContainer">
     <h1 className="registerTitle">Register </h1>
     <input
     type="text"
     placeholder="username"
     id="username"
     onChange={handleChange}
     className="rInput"
     value={credentials.username}
   />
   <input
     type="email"
     placeholder="email"
     id="email"
     onChange={handleChange}
     className="rInput"
     value={credentials.email}
   />
   <input
     type="password"
     placeholder="password"
     id="password"
     onChange={handleChange}
     className="rInput"
     value={credentials.password}
   />

   <input
     type="text"
     placeholder="city"
     id="city"
     onChange={handleChange}
     className="rInput"
     value={credentials.city}
   />

   <input
     type="phone"
     placeholder="phone"
     id="phone"
     onChange={handleChange}
     className="rInput"
     value={credentials.phone}
   />

   <input
   type="text"
   placeholder="country"
   id="country"
   onChange={handleChange}
   className="rInput"
   value={credentials.country}
 />
<div className="checkAdmin">
<label>Admin Register ? </label> <input onChange={handleSelect} type="checkbox"/>

</div>
  
   <button  onClick={handleRegister} className="rButton">
   Register
 </button>
   {error && <span>{error.message}</span>}

     </div>
    </div>
  )
}

export default Register
