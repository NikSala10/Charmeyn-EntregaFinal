const signupForm = document.querySelector('#signupForm');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const firstName = document.querySelector('#firstName').value;
    const lastName = document.querySelector('#lastName').value;
    const phoneNumber = document.querySelector('#phoneNumber').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const confirmPassword = document.querySelector('#confirmPassword').value;

    // Verificar si algún campo está vacío
    if (!firstName || !lastName || !phoneNumber || !email || !password || !confirmPassword) {
        return alert('Por favor, completa todos los campos');
    }

    // Validar que las contraseñas coincidan
    if (password !== confirmPassword) {
        return alert('Las contraseñas no coinciden');
    }

    const Users = JSON.parse(localStorage.getItem('users')) || [];
    const isUserRegistered = Users.find(user => user.email === email);
    if (isUserRegistered) {
        alert('El usuario ya está registrado. Serás redirigido al inicio de sesión.');
    } else {
        Users.push({ firstName: firstName, lastName: lastName, phoneNumber: phoneNumber, email: email, password: password });
        localStorage.setItem('users', JSON.stringify(Users));
        alert('Registro Exitoso. Serás redirigido al inicio de sesión.');
    }
    
    window.location.href = '../Login/login.html'; // Redireccionar al login después de cualquier acción
});
function redirectToIndex() {
    window.location.href = "../index.html";
}
function redirectToLogin() {
    window.location.href = "../Login/login.html";
}