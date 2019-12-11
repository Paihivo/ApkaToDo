import clearRegions from './clear';
export default function taskView() {
  const taskBtn = document.querySelector('#taskBtn');
  const taskReg = document.querySelector('#tasks-region');

  taskBtn.addEventListener('click', e => {
    e.preventDefault();
    clearRegions();

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
                </div>
            </div>
        `;
    const taskContent = document.createElement('div');
    taskContent.innerHTML = taskView;
    taskReg.appendChild(taskContent);

    const buttonsRemove = document.querySelectorAll('[data-btn="remove"]');
    buttonsRemove.forEach(button =>
      button.addEventListener('click', function() {
        const item = document.getElementById(button.dataset.taskId);
        item.remove();
      })
    );
  });
}
