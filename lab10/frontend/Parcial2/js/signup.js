// Obtener referencia al formulario de registro
const signupForm = document.querySelector('#signupForm');

// Manejar el evento de envío del formulario
signupForm.addEventListener('submit', (e) => {
   e.preventDefault();

   // Obtener los valores de los campos del formulario
   const name = document.querySelector('#name').value;
   const username = document.querySelector('#username').value;
   const password = document.querySelector('#password').value;

   // Obtener los usuarios almacenados en localStorage
   const users = JSON.parse(localStorage.getItem('users')) || [];

   // Verificar si el usuario ya está registrado
   const isUserRegistered = users.find(user => user.username === username);
   if (isUserRegistered) {
       return alert('El usuario ya está registrado!');
   }

   // Hashear la contraseña antes de almacenarla
   const hashedPassword = hashPassword(password);

   // Agregar el nuevo usuario al array de usuarios
   users.push({ name: name, username: username, password: hashedPassword });

   // Almacenar el array de usuarios actualizado en localStorage
   localStorage.setItem('users', JSON.stringify(users));

   // Mostrar mensaje de registro exitoso
   alert('¡Registro exitoso!');

   // Redirigir a la página de inicio de sesión
   window.location.href = 'login.html';
});

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
