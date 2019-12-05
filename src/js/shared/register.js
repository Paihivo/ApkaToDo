export function register() {
    const detailsDiv = document.getElementById('confirm-passoword');
    console.log(detailsDiv);
    detailsDiv.innerHTML = `<input type="password" id="confirmInputPassword" class="form-control" placeholder="Confirm password"
    required>
    <label for="confirmInputPassword">Confirm password</label>`
    const link = document.getElementById('register-link');
    link.innerHTML = '<p onclick="location.reload()">Already have the account? Sign in<p>'
    const loginBtn = document.querySelector("#loginBtn");
    loginBtn.innerHTML = '<p class="btn btn-lg btn-primary btn-block text-uppercase" id="register"> Register </p>';
  }

export function registerUser() {
    const inputEmail = document.getElementById("inputEmail");
    const inputPassword = document.getElementById("inputPassword");
    const confirmInputPassword = document.getElementById("confirmInputPassword");

    if(inputPassword.value !== confirmInputPassword.value) {
        alert('password doesnt match');
    } else {
      const url = 'http://5de6a20bb1ad690014a4dc65.mockapi.io/users';
    fetch(url, {
      method: 'post',
      body: JSON.stringify({mail: inputEmail, password: inputPassword})
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      //po rejestracji 
      location.reload();
    });
}
  }