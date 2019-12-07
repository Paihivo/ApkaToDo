import { login } from './shared/login';
import { register } from './shared/register';

const init = () => {
  const loginBtn = document.querySelector('#loginBtn');
  loginBtn.addEventListener('click', login);
};

export default init;
