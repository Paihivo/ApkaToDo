export function login() {
    const inputEmail = document.getElementById("inputEmail");
    const inputPassword = document.getElementById("inputPassword");
    const url = 'http://5de6a20bb1ad690014a4dc65.mockapi.io/users'

    if (inputEmail && inputPassword) {
        fetch(url)
        .then(response => {
            return response.json()
        }).then(function(data) {
            findUser(data);
      });
    }
    
  }
  
  function findUser(data) {
    const user = data.find(x => x.mail === inputEmail.value);
    if (user && inputPassword.value === user.password) {
        // jak zalogowany
    } else {
       // jak nie zalogowany
    }
  }