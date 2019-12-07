// import "../css/main.css";
// import login from "./shared/login.js";
// import register from "./shared/register.js";

// login();
// register();

const inputEmail = document.getElementById("inputEmail");
    const inputPassword = document.getElementById("inputPassword");
    const url = 'http://5de6a20bb1ad690014a4dc65.mockapi.io/users';
    const account = document.querySelector('#accountBtn');
    const accountReg = document.querySelector('#account-region');

    account.addEventListener('click', e => {
      e.preventDefault();

      const logView = `
      <div class="container">
        <div class="row">
          <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div class="card card-signin my-5">
                <div class="card-body">
                    <h5 class="card-title text-center">Sign In</h5>
                    <div class="form-signin">
                        <div class="form-label-group">
                            <input type="email" id="inputEmail" class="form-control" placeholder="Email address"
                                required autofocus>
                            <label for="inputEmail">Email address</label>
                        </div>

                        <div class="form-label-group">
                            <input type="password" id="inputPassword" class="form-control" placeholder="Password"
                                required>
                            <label for="inputPassword">Password</label>
                        </div>
                        <div class="form-label-group" id="confirm-passoword">
                        </div>
                        <div class="register-new-account">
                            <p id="register-link">Register a new account</p>
                        </div>
                        <button id="loginBtn" class="btn btn-lg btn-primary btn-block text-uppercase">Sign
                            in</button>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
        </div>
      `;
      const loginContent = document.createElement('div');
      loginContent.innerHTML = logView;
      accountReg.appendChild(loginContent);
    });
    if (inputEmail && inputPassword) {
        fetch(url)
        .then(response => {
            return response.json()
        }).then(function(data) {
            findUser(data);
      });
    }
  
  function findUser(data) {
    const user = data.find(x => x.mail === inputEmail.value);
    if (user && inputPassword.value === user.password) {
        // jak zalogowany
    } else {
       // jak nie zalogowany
    }
  }