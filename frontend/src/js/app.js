import { editAccount } from './shared/account';
import taskView from './shared/task';
import { editTask } from './shared/task';

const init = () => {
  taskView();
  const account = document.querySelector('#accountBtn');
  account.addEventListener('click', e => {
    e.preventDefault();
    editAccount();
  });
  taskView();
  /*
  const testButton = document.querySelector('#testBtn');
  testButton.addEventListener('click', e => {
    e.preventDefault();
    editTask();
  });*/
};

export default init;
