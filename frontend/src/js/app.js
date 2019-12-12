import { editAccount } from './shared/account';
<<<<<<< HEAD
<<<<<<< HEAD
import taskView from './shared/task';
=======
import { editTask } from './shared/edit-task';
>>>>>>> Initial task edit modal
=======
import { editTask } from './shared/task';
import taskView from './shared/task';
>>>>>>> Removed edit-task

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
