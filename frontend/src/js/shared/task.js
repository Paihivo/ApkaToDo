/* eslint-disable no-shadow */
import clearRegions from './clear';
import { postTask } from './addTaskINT';

export default function taskView() {
  const taskBtn = document.querySelector('#taskBtn');
  const taskReg = document.querySelector('#tasks-region');
  const navbarTitle = document.querySelector('.title-region');

  taskBtn.addEventListener('click', e => {
    e.preventDefault();
    clearRegions();
    navbarTitle.innerHTML = 'Tasks TO-DO';
    const taskView = `
      <div class="container">
        <div class="card card-body">
          <h2 class="title">Items</h2>
          <ul id="items" class="list-group">
            <li id="task1" class="list-group-item">
              <p>Item 1</p>
              <button data-task-id="task1" data-btn="remove">
                <i class="fa fa-trash" aria-hidden="true"></i>
              </button>
            </li>
            <li id="task2" class="list-group-item">
              <p>Item 2</p>
              <button data-task-id="task2" data-btn="remove">
                <i class="fa fa-trash" aria-hidden="true"></i>
              </button>
            </li>
            <li id="task3" class="list-group-item">
              <p>Item 3</p>
              <button data-task-id="task3" data-btn="remove">
                <i class="fa fa-trash" aria-hidden="true"></i>
              </button>
            </li>
            <li id="task4" class="list-group-item">
              <p>Item 4</p>
              <button data-task-id="task4" data-btn="remove">
                <i class="fa fa-trash" aria-hidden="true"></i>
              </button>
            </li>
          </ul>
          <form id="addForm" class="form-inline">
            <input type="text" class="form-control" id="item" value="Add New Task....">
            <input type="date" class="form-control" id="item-data" name="deadline">
            <input type="submit" id="addTaskInput" class="btn btn-dark addBtn" value="+">
          </form>
        </div>
      </div>
    `;

    const taskContent = document.createElement('div');
    taskContent.innerHTML = taskView;
    taskReg.appendChild(taskContent);

    const buttonsRemove = document.querySelectorAll('[data-btn="remove"]');
    buttonsRemove.forEach(button =>
      button.addEventListener('click', () => {
        const item = document.getElementById(button.dataset.taskId);
        item.remove();
      })
    );

    const form = document.getElementById('addForm');
    const itemList = document.getElementById('items');
    const dateList = document.getElementById('item-data');

    function addItem(event) {
      event.preventDefault();
      const newItem = document.getElementById('item').value;
      const newItemData = dateList.value;
      const li = document.createElement('li');
      li.className = 'list-group-item';
      console.log(li);
      li.appendChild(document.createTextNode(`${newItem} Deadline: ${newItemData}`));
      itemList.appendChild(li);
    }

    if (form) {
      const obj = {
        "userId": "5df3d9d0c79e8e1b8c7356a4",
        "description": "new task 1",
        "deadline": "2019-12-15",
      };
      form.addEventListener('submit',function(){
        postTask(obj);
        addItem});
    }
  });
}