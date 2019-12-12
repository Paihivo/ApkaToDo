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
                          <button data-task-id="task1" class="button button__edit" data-toggle="modal" data-target="#editModal1"><i class="fas fa-edit" aria-hidden="true"></i></button>
                          <button data-task-id="task1" class="button button__remove"><i class="fa fa-trash" aria-hidden="true"></i></button>
                        </li>
                        <li id="task2" class="list-group-item">
                          <p>Item 2</p>
                          <button data-task-id="task2" class="button button__edit" data-toggle="modal" data-target="#editModal2"><i class="fas fa-edit" aria-hidden="true"></i></button>
                          <button data-task-id="task2" class="button button__remove"><i class="fa fa-trash" aria-hidden="true"></i></button>
                          </li>
                        <li id="task3" class="list-group-item">
                          <p>Item 3</p>
                          <button data-task-id="task3" class="button button__edit" data-toggle="modal" data-target="#editModal3"><i class="fas fa-edit" aria-hidden="true"></i></button>
                          <button data-task-id="task3" class="button button__remove"><i class="fa fa-trash" aria-hidden="true"></i></button>
                          </li>
                        <li id="task4" class="list-group-item">
                          <p>Item 4</p>
                          <button data-task-id="task4" class="button button__edit" data-toggle="modal" data-target="#editModal4"><i class="fas fa-edit" aria-hidden="true"></i></button>
                          <button data-task-id="task4" class="button button__remove"><i class="fa fa-trash" aria-hidden="true"></i></button>
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

    const buttonEdit = document.querySelectorAll('.button__edit');
    buttonEdit.forEach(button =>
      button.addEventListener('click', function() {
        console.log(button.dataset.target);
        editTask(button.dataset.target);
      })
    );
  });
}

const editTask = id => {
  console.log(id);
  const template = `
      <div class="modal fade" id="${id}" tabindex="-1" role="dialog" aria-labelledby="editModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
              <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Edit task window</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                  </button>
              </div>
              <div class="modal-body">
                  <input class="form__input" type="text" name="edittext" id="editTaskTextForm">
                  <label class="form__label">Change Task</label>
                  <input class="form__input" type="date" name="deadline" id="editTaskDeadline">
                  <label class="form__label">Change date</label>
              </div>
              <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
      </div>
      `;
  document.querySelector('body').innerHTML += template;
//   $(document).ready(function(){
//     $(".button__edit").click(function(){
//         $(id).modal('show');
//     });
// });
$(id).modal('show');
};