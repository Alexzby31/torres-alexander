document.getElementById('signupForm').addEventListener('submit', async function(event) {
   event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional

   // Obtiene los valores de los campos del formulario
   const name = document.getElementById('name').value;
   const username = document.getElementById('username').value;
   const password = document.getElementById('password').value;
   const correo = ''; // Agrega un campo para correo si es necesario
   const tipo = ''; // Agrega un campo para tipo si es necesario

   try {
       const response = await fetch('http://localhost:3000/api/register', {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json'
           },
           body: JSON.stringify({ name, username, password, correo, tipo })
       });

       const data = await response.json();

       if (response.ok) {
           // Maneja el caso de éxito
           alert(data.msg);
           // Redirecciona o realiza otra acción
           window.location.href = 'login.html';
       } else {
           // Maneja el caso de error
           alert(data.msg || 'Error en el registro');
       }
   } catch (error) {
       console.error('Error:', error);
       alert('Error en el servidor');
   }
});





/////////////////////////////////////////////////////////////////////
