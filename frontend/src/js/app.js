import login from './shared/login';
// import register from './shared/register';
import taskView from './shared/task';

const init = () => {
  login();
  taskView();
};

export default init;
