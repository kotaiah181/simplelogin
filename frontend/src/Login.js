import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [data, setData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Extra JS Validation
    if (!data.email.includes("@")) {
      return alert("Enter a valid email");
    }
    if (data.password.length < 1) {
      return alert("Password must be at least 6 characters");
    }

    const res = await axios.post("http://localhost:5000/auth/login", data);

    if (res.data.user) {
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/welcome");
    }
    else{
      alert("Invalid email or password");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setData({ ...data, email: e.target.value })}
          required
        />

        <input
          type="password"
          placeholder="Password"
          minLength={1}
          onChange={(e) => setData({ ...data, password: e.target.value })}
          required
        />

        <button>Login</button>
      </form>

      <p className="new-user-text">
        New user? <Link to="/" className="register-link">Register here</Link>
      </p>
    </div>
  );
}

export default Login;
