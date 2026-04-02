function validateForm(){
clearErrors();
const username = document.getElementById("username").value;
const password = document.getElementById("password").value;
const cpassword = document.getElementById("cpassword").value;
const email = document.getElementById("email").value;
let isValid = true;
if(username == ""){
document.getElementById("nameerror").textContent = "* Username is required";
isValid = false;
}
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
if(!emailPattern.test(email)){
document.getElementById("emailerror").textContent = "* Please enter a valid email address";
isValid = false;
}
if (password == "" || password.length < 8){
document.getElementById("passworderror").textContent = "* Please enter a valid password";
isValid = false;
}
if (cpassword == "" || cpassword !== password){
document.getElementById("cpassworderror").textContent = "* Please enter a valid confirmation password";
isValid = false;
}
return isValid;
}
function clearErrors(){
const errorElements = document.querySelectorAll(".error");
errorElements.forEach(error => {
error.textContent = "";
});
}