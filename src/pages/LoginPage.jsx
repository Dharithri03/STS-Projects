import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Auth.css";

function LoginPage() {

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (

    <div className="login-container">

      <div className="login-box">


        <img
        src="https://cdn-icons-png.flaticon.com/512/1995/1995574.png"
        alt="Logistics"
        />

        <h1 className="logo-text">🚚 LogiTrack System</h1>

        <p className="tagline">
        Smart Logistics & Cargo Management Platform
        </p>

        <form onSubmit={handleLogin}>

          <input type="email" placeholder="Enter Email" required/>

          <input type="password" placeholder="Enter Password" required/>

          <button>Login</button>

        </form>

        <p className="register-text">
        New User ?

        <Link to="/register"> Create Account</Link>

        </p>

      </div>

    </div>

  );
}

export default LoginPage;