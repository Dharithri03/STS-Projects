import React from "react";
import { useNavigate } from "react-router-dom";

function RegisterPage(){

const navigate = useNavigate();

const handleRegister=(e)=>{
e.preventDefault();
navigate("/dashboard");
};

return(

<div className="login-container">

<div className="login-box">

<img
src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
alt="Register"
/>

<h2>Create LogiTrack Account</h2>

<form onSubmit={handleRegister}>

<input placeholder="Full Name" required/>

<input placeholder="Email" required/>

<input placeholder="Password" required/>

<input placeholder="Phone Number" required/>

<input placeholder="Company Name" required/>

<button>Register</button>

</form>

</div>

</div>

);

}

export default RegisterPage;