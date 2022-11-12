// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        } else {
          RegistrarUsuario()
          event.preventDefault()          
        }

        form.classList.add('was-validated')
      }, false)
    })
})()

function RegistrarUsuario() {
  let cedula = document.querySelector("#txtCedula").value;
  let nombres = document.querySelector("#txtNombre").value;
  let apellidos = document.querySelector("#txtApellido").value;
  let correo = document.querySelector("#txtCorreo").value;
  let telefono = document.querySelector("#txtTelefono").value;
  let rol = document.querySelector("#txtRol").value;

  let url = 'http://localhost:3000/usuarios';

  let datos = {
    Cedula: cedula,
    Nombre: nombres,
    Apellido: apellidos,
    Correo: correo,
    Telefono: telefono,
    Rol: rol
  };

  fetch(url, {
    method: 'POST',
    body: JSON.stringify(datos),
    headers:{
    'Content-Type': 'application/json'
  
  }}).then(res => res.json())
  .then(mensaje => {
    console.log(mensaje)
  })

}