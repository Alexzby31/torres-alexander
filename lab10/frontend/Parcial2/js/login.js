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

// Manejar el evento de envío del formulario de login
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Obtener los valores de los campos del formulario de login
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    // Obtener los usuarios almacenados en localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Buscar el usuario por el nombre de usuario
    const user = users.find(user => user.username === username);

    // Verificar si el usuario existe
    if (!user) {
        return alert('Usuario y/o contraseña incorrectos');
    }

    // Verificar la contraseña
    if (!verifyPassword(password, user.password)) {
        return alert('Usuario y/o contraseña incorrectos');
    }

    // Si el usuario y la contraseña son correctos, redirigir al usuario a la página de inicio
    alert(`¡Bienvenido ${user.name}!`);
    localStorage.setItem('login_success', JSON.stringify(user));
    window.location.href = 'index.html'; // Cambia "index.html" por la página a la que deseas redirigir al usuario
});
