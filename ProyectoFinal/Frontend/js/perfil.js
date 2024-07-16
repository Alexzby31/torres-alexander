document.addEventListener('DOMContentLoaded', () => {
    const profileForm = document.getElementById('profile-form');
  
    profileForm.addEventListener('submit', async (event) => {
      event.preventDefault();
  
      const username = document.getElementById('username').value;
      const newPassword = document.getElementById('new-password').value;
      const confirmPassword = document.getElementById('confirm-password').value;
  
      if (newPassword !== confirmPassword) {
        alert('Las contraseñas no coinciden.');
        return;
      }
  
      const userData = {
        id: 'ID_DEL_USUARIO',  // Reemplaza esto con el ID del usuario actual
        username: username,
        password: newPassword,
        // Agrega otros campos necesarios
      };
  
      try {
        const response = await fetch('http://localhost:3000/api/userUpd', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData)
        });
  
        const result = await response.json();
  
        if (response.ok) {
          alert('Perfil actualizado exitosamente');
        } else {
          alert('Error al actualizar el perfil: ' + result.message);
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Error al actualizar el perfil');
      }
    });
  });
  

