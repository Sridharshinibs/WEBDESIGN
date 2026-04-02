const form = document.querySelector('#form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');
const email = document.querySelector('#email');

form.addEventListener('submit',(e)=>{
              e.preventDefault()
              validateInputs();
 });

function validateInputs(){
const usernameVal = username.value.trim();
const passwordVal = password.value.trim();
const cpasswordVal = cpassword.value.trim();
const emailVal = email.value.trim();

if(usernameVal===''){
   setError(username,'* Username is required');
 }
else{
    setSuccess(username);
    }
if(passwordVal===''){
    setError(password,'*password is required');
 }
else if(password.length<8){
    setError(password,'password must be atleast 8 characters');
 }
else{
   setSuccess(password);
}
if(cpasswordVal===''){
   setError(cpassword,'*Confirm password is required');
}
else if(cpasswordVal!==passwordVal){
    setError(cpassword,'confirm password does not match with password');
}
else{
    setSuccess(cpassword);
}
if(emailVal===''){
    setError(email,'*Email is mandatory');
}
else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?w+)*(\.\w{2,3})+$/.test(email))){
     setError(email,'*email is invalid');
}
else{
  setSuccess(email);
}

function setError(element,message){
const inputGroup = element.parentElement;
const errorElement = inputGroup.querySelector('.error');

errorElement.innertext = message;
inputGroup.classList.add('error');
inputGroup.classList.remove('success');
}

function setSuccess(element,message){
const inputGroup = element.parentElement;
const errorElement = inputGroup.querySelector('.error');

errorElement.innerText = '';
inputGroup.classList.add('success');
inputGroup.classList.remove('error');
}


