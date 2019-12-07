import "../css/main.css";
import { login } from "./shared/login.js";
import { register } from "./shared/register.js";

const init = () => {
  const loginBtn = document.querySelector("#loginBtn");
  loginBtn.addEventListener("click", login);
};

init();
