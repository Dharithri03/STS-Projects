import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterPage(){

const navigate = useNavigate();
const [role, setRole] = useState("");

const handleRegister=(e)=>{
e.preventDefault();

console.log("Selected Role:", role);

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

<input type="email" placeholder="Email" required/>

<input type="password" placeholder="Password" required/>

<input placeholder="Phone Number" required/>

<input placeholder="Company Name" required/>

<select
value={role}
onChange={(e)=>setRole(e.target.value)}
required
>
<option value="">Select Role</option>
<option value="business">Business</option>
<option value="driver">Driver</option>
<option value="customer">Customer</option>
</select>

<button type="submit">Register</button>

</form>

</div>

</div>

);

}

export default RegisterPage;