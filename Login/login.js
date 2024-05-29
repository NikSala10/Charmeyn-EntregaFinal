const loginForm = document.querySelector('.loginForm');
localStorage.setItem('login_success', JSON.stringify(false));

localStorage.setItem('register_success', JSON.stringify(false));


loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Verificar si el campo de correo electrónico o contraseña está vacío
    if (!email || !password) {
        return alert('Por favor, complete ambos campos antes de continuar');
    }

    const Users = JSON.parse(localStorage.getItem('users')) || [];
    const validUser = Users.find(user => user.email === email && user.password === password);
    if (!validUser) {
        return alert('Usuario y/o contraseña incorrectos!');
    }
    alert("Bienvenido a Charmeyn " + validUser.firstName);
      localStorage.setItem('login_success', JSON.stringify(validUser));

    // Verificar si ya está logueado
    if (localStorage.getItem('login_success')) {
        window.location.href = '../Myaccountpage/account.html';
    }
});

    
function redirectToSignUp() {
    window.location.href = "../Registro/registro.html";
}
function redirectToIndex() {
    window.location.href = "../index.html";
}

