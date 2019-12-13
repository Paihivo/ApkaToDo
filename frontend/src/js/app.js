import { editAccount } from './shared/account';
import taskView from './shared/task';

const init = () => {
  taskView();
  const account = document.querySelector('#accountBtn');
  account.addEventListener('click', e => {
    e.preventDefault();
    editAccount();
  });
};

export default init;
