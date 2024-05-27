// Obtener referencia al formulario de perfil
const profileForm = document.querySelector('#profile-form');

// Manejar el evento de envío del formulario de perfil
profileForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Obtener los valores de los campos del formulario de perfil
    const username = document.querySelector('#username').value;
    const newPassword = document.querySelector('#new-password').value;
    const confirmPassword = document.querySelector('#confirm-password').value;


    // Verificar si las contraseñas coinciden
    if (newPassword !== confirmPassword) {

        return alert('Las contraseñas no coinciden');
    }

    // Actualizar la contraseña en localStorage
    updatePassword(username, newPassword);
});

// Función para actualizar la contraseña en localStorage
function updatePassword(username, newPassword) {

    // Obtener los usuarios almacenados en localStorage
    const userlogin = JSON.parse(localStorage.getItem('login_success')) || [];
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Buscar el usuario por el nombre de usuario
    const userIndex = users.findIndex(user => user.name === userlogin.name);
    console.log(userlogin.name);
    console.log(username);
    console.log("funcion de actualizar pass");

    // Verificar si el usuario existe
    if (userIndex === -1) {
        return alert('Usuario no encontrado');
    }

    // Actualizar la contraseña del usuario
    users[userIndex].password = hashPassword(newPassword);
    users[userIndex].username = username;

    // Guardar los usuarios actualizados en localStorage
    localStorage.setItem('users', JSON.stringify(users));
    alert('Contraseña actualizada correctamente');

}

 // Función para hashear la contraseña
 function hashPassword(password) {
    return hashCode(password).toString();
 }

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

