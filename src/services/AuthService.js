const login=(username,password)=>{

 if(username==="admin" && password==="admin"){
  window.location.href="/dashboard";
 }
 else if(username==="driver" && password==="driver"){
  window.location.href="/driver-dashboard";
 }
 else{
  alert("Invalid credentials");
 }

}

const AuthService={login};

export default AuthService;