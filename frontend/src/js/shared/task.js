import clearRegions from './clear';
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
                        <li class="list-group-item">Item 1</li>
                        <li class="list-group-item">Item 2</li>
                        <li class="list-group-item">Item 3</li>
                        <li class="list-group-item">Item 4</li>
                    </ul>
                    <form id="addForm" class="form-inline">
                    <input type="text" class="form-control" id="item" value="Add New Task....">
                    <input type="date" class="form-control" id="item-data" name="deadline">
                    <input type="submit" class="btn btn-dark" value="+">
                    </form>
                </div>
            </div>
        `;
        const taskContent = document.createElement('div');
        taskContent.innerHTML = taskView;
        taskReg.appendChild(taskContent);

        const form = document.getElementById('addForm');
        const itemList = document.getElementById('items');
        const dateList = document.getElementById('item-data');

        function addItem(e) {
            e.preventDefault();
            const newItem = document.getElementById('item').value;
            const newItemData = dateList.value;
            let li = document.createElement('li');
            li.className = 'list-group-item';
            console.log(li);
            li.appendChild(document.createTextNode(`${newItem} Deadline: ${newItemData}`));
            itemList.appendChild(li);
        }

        if(form) {
            form.addEventListener('submit', addItem);
        }
    });
}