import { editAccount } from './shared/account';

const init = () => {
  const account = document.querySelector('#accountBtn');
  account.addEventListener('click', e => {
    e.preventDefault();
    editAccount();
  });
};

export default init;
