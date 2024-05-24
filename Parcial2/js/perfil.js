const signupForm = document.querySelector('#perfilForm')
perfilForm.addEventListener('submit',(e)=>{
 e.preventDefault()
 const name = document.querySelector('#name').value
 const password = document.querySelector('#password').value

 const Users = JSON.parse(localStorage.getItem('users'))  || []

 //Actualizar DATOS
 Users.push({name: name,username: username, password: password})
 localStorage.setItem('users',JSON.stringify(Users))
 
 alert('Actualizacion Exitosa!')
 //window.location.href = 'login.html'

})