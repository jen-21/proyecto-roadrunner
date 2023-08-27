function toggleMenu(e) {
    e.classList.toggle("active");
  }
  
  
  
  
  
  
  const inputStyleCorreo = document.getElementById("input-source-correo");
  const inputStyleContrasena = document.getElementById("input-source-contrasena");
  const inputStyleContrasenaRepetir = document.getElementById("input-source-contrasena-repetir");
  const inputStyleNombres = document.getElementById("input-source-nombres");
  const inputStyleApellidos = document.getElementById("input-source-apellidos");
  const inputStylePostal = document.getElementById("input-source-postal");
  const inputStyleNumero = document.getElementById("input-source-numero");
  
  var camposCorrectos = true;
  
  
  
  
  function verificarFormulario(tipoFormulario){
    let inputCorreo = document.getElementById("inputCorreo");
    let inputContrasena = document.getElementById("inputContrasena");
  
    var camposCorrectos = true;
  
      if (!validarCorreo(inputCorreo.value)){
        console.log("correo incorrecto");
        inputStyleCorreo.innerHTML = `
        <div class="d-flex flex-row justify-content-between align-items-center input-source input-danger"><i class="fas fa-envelope"></i><input class="flex-fill p-2" id="inputCorreo" type="email" placeholder="hola@gmail.com" value="${inputCorreo.value}"/>
        <i class="fa-solid fa-triangle-exclamation"></i>
        </div>
        `;
        camposCorrectos = false;
      }else{
        console.log("correo correcto");
        inputStyleCorreo.innerHTML = `
        <div class="d-flex flex-row justify-content-between align-items-center input-source input-success"><i class="fas fa-envelope"></i><input class="flex-fill p-2" id="inputCorreo" type="email" placeholder="hola@gmail.com" value="${inputCorreo.value}"/>
        <i class="fa-solid fa-triangle-exclamation"></i>
        </div>
        `;
        camposCorrectos = true;
      }
      if (inputContrasena.value.length < 8){
        console.log("contrasena incorrecta");
        inputStyleContrasena.innerHTML = `
          <div class="d-flex flex-row justify-content-between align-items-center input-source input-danger">
              <i class="fas fa-lock"></i>
              <input id="inputContrasena" class="flex-fill p-2" type="password" placeholder="Contraseña" value="${inputContrasena.value}"/>
              <i class="fa-solid fa-triangle-exclamation"></i>
          </div>
        `;
        camposCorrectos = false;
      }else{
        console.log("contrasena correcta");
        inputStyleContrasena.innerHTML = `
          <div class="d-flex flex-row justify-content-between align-items-center input-source input-success">
              <i class="fas fa-lock"></i>
              <input id="inputContrasena" class="flex-fill p-2" type="password" placeholder="Contraseña" value="${inputContrasena.value}"/>
              <i class="fas fa-check"></i>
          </div>
        `;
        camposCorrectos = true;
      }
  
    return camposCorrectos;
  }
  
  function validarCorreo(correo){
    var regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    return regex.test(correo);
  }
  
  function iniciarSesion(){
    if (verificarFormulario()){
      console.log("iniciar sesion");
    }else{
      console.log("no iniciar sesion");
    }
  }
  
  
  function registrar(tipoFormulario){
    if (verificarFormularioRegistro(tipoFormulario)){
      console.log("registrar");
    }else{
      console.log("no registrar");
    }
  }
  
  function verificarFormularioRegistro(tipoFormulario) {
    let inputNombre = document.getElementById("inputNombre");
    let inputApellido = document.getElementById("inputApellido");
    let inputCorreo = document.getElementById("inputCorreo");
    let inputContrasena = document.getElementById("inputContrasena");
    let inputContrasenaRepetir = document.getElementById("inputContrasenaRepetir");
    let inputNumero = document.getElementById("inputNumero");
    let inputCodigoPostal = document.getElementById("inputPostal");
  
    let campoCorreos = true;
    let campoContrasenas = true;
    let campoContrasenasRepetir = true;
    let campoNumeros = true;
    let campoCodigoPostal = true;
  
  
  
    if (tipoFormulario == "Cliente") {
      if (!validarCorreo(inputCorreo.value)) {
        console.log("correo incorrecto");
        inputStyleCorreo.innerHTML = `
        <div class="d-flex flex-row justify-content-between align-items-center input-source input-danger"><i class="fas fa-envelope"></i><input class="flex-fill p-2" id="inputCorreo" type="email" placeholder="hola@gmail.com" value="${inputCorreo.value}"/>
        <i class="fa-solid fa-triangle-exclamation"></i>
        </div>
        `;
        campoCorreos = false;
      } else {
        console.log("correo correcto");
        inputStyleCorreo.innerHTML = `
        <div class="d-flex flex-row justify-content-between align-items-center input-source input-success"><i class="fas fa-envelope"></i><input id="inputCorreo" class="w-100 p-2" type="email" placeholder="hola@gmail.com" value="${inputCorreo.value}"/><i class="fas fa-check"></i></div>
        `;
        campoCorreos = true;
      }
      
      if (inputContrasena.value.length < 8) {
        console.log("contrasena incorrecta");
        inputStyleContrasena.innerHTML = `
          <div class="d-flex flex-row justify-content-between align-items-center input-source input-danger">
              <i class="fas fa-lock"></i>
              <input id="inputContrasena" class="flex-fill p-2" type="password" placeholder="Contraseña" value="${inputContrasena.value}"/>
              <i class="fa-solid fa-triangle-exclamation"></i>
          </div>
        `;
        campoContrasenas = false;
      } else {
        console.log("contrasena correcta");
        inputStyleContrasena.innerHTML = `
        <div class="d-flex flex-row justify-content-between align-items-center input-source input-success">
            <i class="fas fa-lock"></i>
            <input id="inputContrasena" class="flex-fill p-2" type="password" placeholder="Contraseña" value="${inputContrasena.value}"/>
            <i class="fas fa-check"></i>
        </div>
      `;
        campoContrasenas = true;
        if (inputContrasena.value != inputContrasenaRepetir.value) {
          console.log("contrasena no coinciden");
          inputStyleContrasenaRepetir.innerHTML = `
          <div class="d-flex flex-row justify-content-between align-items-center input-source input-danger">
            <i class="fas fa-lock"></i>
            <input id="inputContrasenaRepetir" class="w-100 p-2" type="password" placeholder="Contraseña"/ value="${inputContrasenaRepetir.value}">
            <i class="fa-solid fa-triangle-exclamation"></i>
          </div>
          `;
          inputStyleContrasena.innerHTML = `
          <div class="d-flex flex-row justify-content-between align-items-center input-source input-danger">
              <i class="fas fa-lock"></i>
              <input id="inputContrasena" class="flex-fill p-2" type="password" placeholder="Contraseña" value="${inputContrasena.value}"/>
              <i class="fa-solid fa-triangle-exclamation"></i>
          </div>
        `;
          campoContrasenasRepetir = false;
        } else {
          console.log("contrasena coinciden");
          inputStyleContrasenaRepetir.innerHTML = `
          <div class="d-flex flex-row justify-content-between align-items-center input-source input-success">
            <i class="fas fa-lock"></i>
            <input id="inputContrasenaRepetir" class="w-100 p-2" type="password" placeholder="Contraseña" value="${inputContrasenaRepetir.value}"/>
            <i class="fas fa-check"></i>
          </div>
          `;
          inputStyleContrasena.innerHTML = `
          <div class="d-flex flex-row justify-content-between align-items-center input-source input-success">
              <i class="fas fa-lock"></i>
              <input id="inputContrasena" class="flex-fill p-2" type="password" placeholder="Contraseña" value="${inputContrasena.value}"/>
              <i class="fas fa-check"></i>
          </div>
        `;
          campoContrasenasRepetir = true;
        }
      }
      if (inputNumero.value.length < 8) {
        console.log("numero incorrecto");
        inputStyleNumero.innerHTML = `
          <div class="d-flex flex-row justify-content-between align-items-center input-danger">
              <i class="fas fa-phone"></i>
              <input id="inputNumero" class="w-100 p-2" type="text" placeholder="9999-0000" value="${inputNumero.value}"/>
          </div>
        `;
        campoNumeros = false;
      } else {
        console.log("numero correcto");
        inputStyleNumero.innerHTML = `
        <div class="d-flex flex-row justify-content-between align-items-center input-success">
            <i class="fas fa-phone"></i>
            <input id="inputNumero" class="w-100 p-2" type="text" placeholder="9999-0000" value="${inputNumero.value}"/>
        </div>
      `;
        campoNumeros = true;
      }
      if (inputCodigoPostal.value.length < 3) {
        console.log("codigo postal incorrecto");
        campoCodigoPostal = false;
      } else {
        console.log("codigo postal correcto");
        campoCodigoPostal = true;
      }
      if (inputNombre.value == "") {
        console.log("nombre incorrecto");
        campoNombre = false;
      }else{
        console.log("nombre correcto");
        campoNombre = true;
      }
      if (inputApellido.value == "") {
        console.log("apellido incorrecto");
        campoApellido = false;
      }else{
        console.log("apellido correcto");
        campoApellido = true;
      }
    }
    /*Si todos los campos estan en true, hacer que camposCorrectos este en true*/
    if (campoCorreos && campoContrasenas && campoContrasenasRepetir && campoNumeros && campoCodigoPostal && campoNombre && campoApellido) {
      return true;
    }else{
      return false;
    }
  }