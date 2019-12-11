import { editAccount } from './shared/account';
<<<<<<< HEAD
import taskView from './shared/task';
=======
import { editTask } from './shared/edit-task';
>>>>>>> Initial task edit modal

const init = () => {
  taskView();
  const account = document.querySelector('#accountBtn');
  account.addEventListener('click', e => {
    e.preventDefault();
    editAccount();
  });
  const testButton = document.querySelector('#testBtn');
  testButton.addEventListener('click', e => {
    e.preventDefault();
    editTask();
  });
};

export default init;
