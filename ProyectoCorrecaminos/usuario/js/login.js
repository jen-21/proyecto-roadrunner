async function  inicioSesion(){

    const usuario = document.getElementById("usuario").value;
    const contrasena = document.getElementById("password").value;

    let baseUrl = `http://localhost:3000/login`;
    let data = {
        usuario: usuario,
        contrasena: contrasena
    }

    let res = await fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
        
    });
    let dataResponse = await res.json();

    if(dataResponse.exito){
        localStorage.setItem('usuario', JSON.stringify(dataResponse.usuario));
        window.location.href = 'home.html';
    }else {
        alert(dataResponse.mensaje);
    }
    
}