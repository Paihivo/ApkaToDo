function register() {
    const inputEmail = document.getElementById("inputEmail");
    const inputPassword = document.getElementById("inputPassword");
    const confirmInputPassword = document.getElementById("confirmInputPassword");
    console.log('tf');
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
      // location.reload();
    });
}
  }