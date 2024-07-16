// Función hashCode
function hashCode(str) {
    let hash = 0;
    for (let i = 0, len = str.length; i < len; i++) {
        let chr = str.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
 }
 
 // Función para hashear la contraseña
 function hashPassword(password) {
    return hashCode(password).toString();
 }
// Función para verificar la contraseña
function verifyPassword(plainPassword, hashedPassword) {
    return hashPassword(plainPassword) === hashedPassword;
}

// Obtener referencia al formulario de login
const loginForm = document.querySelector('#loginForm');

// Función de login
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Credenciales incorrectas');
        }
    })
    .then(data => {
        console.log('Login exitoso:', data.msg);
        localStorage.setItem('token', data.token);
        //Guardar el nombre del usuario
        localStorage.setItem('username',username);
        //Guardar usuario en local storage
        localStorage.setItem('login_success',JSON.stringify(username));
        //Redirigir a Index.html
        window.location.href = '../Frontend/index.html'
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error: ' + error.message);
    });
}

// Manejar el evento de envío del formulario de login
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    login(); // Llama a la función login
});
