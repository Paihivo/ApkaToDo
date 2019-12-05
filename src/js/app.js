import "../css/main.css";
import { login } from "./shared/login.js";
import { register, registerUser } from "./shared/register.js";

const init = () => {
  const loginBtn = document.querySelector("#loginBtn");
  loginBtn.addEventListener("click", login);
  const registerNewAccountLink = document.querySelector("#register-link");
  registerNewAccountLink.addEventListener("click", register);
  document.addEventListener('click',function(e){
    if(e.target && e.target.id== 'register'){
         registerUser();
     }
 });

};

init();
