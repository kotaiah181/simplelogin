import axios from "axios";
import { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import "./Register.css";   // <-- ADD THIS

function Register() {
  const [data, setData] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/auth/register", data);
    navigate("/login");
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Username" onChange={(e) => setData({...data, username: e.target.value})} required/>
        <input type="email"placeholder="Email" onChange={(e) => setData({...data, email: e.target.value})} required/>
        <input type="password" placeholder="Password" onChange={(e) => setData({...data, password: e.target.value})} required/>
        <button>Register</button>
      </form>
     <p className="new-user-text">
        Already have account? <Link to="/login" className="register-link">Login here</Link>
      </p>
      
    </div>
);

}

export default Register;
