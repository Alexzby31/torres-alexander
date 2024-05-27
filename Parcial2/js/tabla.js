document.addEventListener('DOMContentLoaded', function() {
    // Obtener el nombre de usuario almacenado (asumiendo que está en localStorage)
    const userlogin = JSON.parse(localStorage.getItem('login_success')) || {};
    var name = userlogin.name;

    if (!name) {
        // Si el nombre de usuario no está definido, redirigir al usuario a la página de inicio de sesión
        window.location.href = 'login.html'; // Cambia 'login.html' por la página de inicio de sesión real
        return;
    }

    // Obtener el registro actual del usuario (si existe)
    var userRecords = JSON.parse(localStorage.getItem(name)) || [];
    // Obtener el total de entradas y salidas de dinero
    var totalEntradas = 0;
    var totalSalidas = 0;

    userRecords.forEach(function(record) {
      if (record.type === 'entrada') {
        totalEntradas += record.amount;
      } else {
        totalSalidas += record.amount;
      }});

     // Llamar a la función dibujarGrafico
     window.dibujarGrafico(totalEntradas, totalSalidas);
    // Función para mostrar el registro actual en la tabla
    function displayRecords() {
        var tableBody = document.querySelector('#moneyTable tbody');
        tableBody.innerHTML = '';

        userRecords.forEach(function(record) {
            var row = document.createElement('tr');
            row.innerHTML = '<td>' + record.amount + '</td><td>' + record.type + '</td>';
            tableBody.appendChild(row);
        });
    }

    displayRecords(); // Mostrar el registro actual al cargar la página

    // Manejar el envío del formulario
    document.getElementById('moneyForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Obtener los valores del formulario
        var amount = parseFloat(document.getElementById('amount').value);
        var type = document.getElementById('type').value;

        // Crear un objeto con la entrada/salida de dinero
        var record = {
            amount: amount,
            type: type
        };

        // Agregar el registro al array del usuario
        userRecords.push(record);

        // Actualizar el registro en localStorage
        localStorage.setItem(name, JSON.stringify(userRecords));

        // Mostrar el registro actualizado
        displayRecords();

        // Limpiar el formulario
        document.getElementById('moneyForm').reset();
    });
});
