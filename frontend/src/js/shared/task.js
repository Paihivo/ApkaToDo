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
                        <li class="list-group-item">Item 1</li>
                        <li class="list-group-item">Item 2</li>
                        <li class="list-group-item">Item 3</li>
                        <li class="list-group-item">Item 4</li>
                    </ul>
                </div>
            </div>
        `;
        const taskContent = document.createElement('div');
        taskContent.innerHTML = taskView;
        taskReg.appendChild(taskContent);
    });
}