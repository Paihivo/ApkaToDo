import clearRegions from './clear';

export const editAccount = () => {
  clearRegions();
  const accountRegion = document.querySelector('#account-region');
  const navbarTitle = document.querySelector('.title-region');

  navbarTitle.innerHTML = 'Account';

  const template = `
  <div class="container">
    <div class="card card-body">
      <form class="form form__edit">
        <label class="form__label">Name</label>
        <input class="form__input" type="text" name="name" id="name" value="John">
        <label class="form__label">Surname</label>
        <input class="form__input" type="text" name="surname" id="surname" value="Doe">
        <label class="form__label">Email</label>
        <input class="form__input" type="email" name="email" id="email" value="john@doe.com">
        <label class="form__label">New Password</label>
        <input class="form__input" type="password" name="password" id="password">
        <label class="form__label">Repeat New Password</label>
        <input class="form__input" type="password" name="passwordRepeat" id="passwordRepeat">
        <button id="saveData" class="button">Save data</button>
      </form>
    </div>
  </div>
  `;
  accountRegion.innerHTML = template;

  const saveButton = document.querySelector('#saveData');
  saveButton.addEventListener('click', e => {
    e.preventDefault();
    console.log(`Send data...`);
  });
};
