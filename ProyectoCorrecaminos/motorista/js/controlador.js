function mostarAd(){
    document.getElementById('admin-Empresas').style.display = 'flex';
    document.getElementById('admin-Productos').style.display = 'none';
    document.getElementById('motorista').style.display = 'none';
    document.getElementById('ordenes').style.display = 'none';
}
var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
var alertTrigger = document.getElementById('liveAlertBtn')

function alert(message, type) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" ></button></div>'
  alertPlaceholder.append(wrapper)
}

if (alertTrigger) {
  alertTrigger.addEventListener('click', function () {
    alert('Se Agrego la informacion en la base de datos', 'success')
  })
}
function mostarProductos(){
    document.getElementById('admin-Empresas').style.display = 'none';
    document.getElementById('admin-Productos').style.display = 'flex';
    document.getElementById('motorista').style.display = 'none';
    document.getElementById('ordenes').style.display = 'none';
}
function mostarMotoristas(){
    document.getElementById('admin-Empresas').style.display = 'none';
    document.getElementById('admin-Productos').style.display = 'none';
    document.getElementById('motorista').style.display = 'flex';
    document.getElementById('ordenes').style.display = 'none';
}
function mostarOrdenes(){
    document.getElementById('admin-Empresas').style.display = 'none';
    document.getElementById('admin-Productos').style.display = 'none';
    document.getElementById('motorista').style.display = 'none';
    document.getElementById('ordenes').style.display = 'flex';
}

function guardarEmpresa(){
    let txtnombre = document.getElementById('text-nombre').value;
    let txtdescripcion = document.getElementById('text-descrip').value;
    let txtcategoria = document.getElementById('text-categoria').value;
    let txthorario = document.getElementById('text-horario').value;
    let empresa = {
        nombreEmpresa:txtnombre,
        descripcion:txtdescripcion,
        categoria:txtcategoria,
        horario:txthorario
    };
    axios({
        
        method: 'POST',
        url: '../backend/empresa.json',
        responseType: 'json',
        data:empresa
    }).then(res=>{
        console.log("probar",res);

    }).catch(error=>{
        console.error(error);
    });
   // empresas.push(empresa);
}
function guardarProducto(){
    let txtnombre = document.getElementById('text-nombreProducto').value;
    let txtdescripcion = document.getElementById('text-descrip').value;
    let txtempresa = document.getElementById('text-empresa').value;
    let txtprecio = document.getElementById('text-precio').value;
    let empresa = {
        nombreProducto:txtnombre,
        nombreEmpresa:txtempresa,
        descripcion:txtdescripcion,
        precio:txtprecio
    };
    axios({
        
        method: 'POST',
        url: '../backend/api/producto.php',
        responseType: 'json',
        data:empresa
    }).then(res=>{
        console.log("probar",res);

    }).catch(error=>{
        console.error(error);
    });
   
}


function SolicitudUsuarios() {
    axios({
        method: 'GET',
        url: '../backend/api/usuario.php',
        responseType: 'json'
    }).then(res=>{ 
        
    document.getElementById('solicitud').innerHTML = '';
    for (let i=0;i<res.data.length;i++) {
        document.getElementById('solicitud').innerHTML += 
        `<div class="row">
        <div class="card" >
            <div class="card-header">
                ${res.data[i].idUsuario}
            </div>
            <div class="card-body">
                <p class="card-text">Nombre: ${res.data[i].nombre}</p>
                <p class="card-text">Correo: ${res.data[i].email}</p>
                <p class="card-text">Número: ${res.data[i].Numero}</p>
              <a  type="button" class="btn btn-danger  boton-moto" aria-label="Close" >APROBAR</a>
            </div>
        </div>
    </div> `;
       }
    }).catch(error=>{
        console.error(error);
    });
    
}
SolicitudUsuarios();

function solicitudOrdenes(){

    axios({
        method: 'GET',
        url: '../backend/api/ordenes.php',
        responseType: 'json'
    }).then(res=>{ 
       let  orden = res.data;
       console.log(res)
      
    document.getElementById('order').innerHTML = '';
    for (let i=0;i<orden.length;i++) {
        document.getElementById('order').innerHTML += 
        `
        <div class="card" >
            <div class="card-header">
                  ${orden[i].codigoOrden}
                  <img class="${orden[i].imagen}">
              </div>
              <h5 class="card-title">${orden[i].title}</h5>
              <div class="row g-0">
                   <div class="col-md-4">
                     <img src="img/8_Producto.jpg" class="img-fluid rounded-start" alt="...">
                    </div>
                  <div class="col-md-8">
                       <div class="card-body">
                           <p class="card-text">${orden[i].descripcion}</p>
                           <a type="button" href="#" class="btn btn-danger boton-moto">ASIGNAR</a>
                         </div>
                    </div>
              </div>
              </div> `;
       }
    }).catch(error=>{
        console.error(error);
    });

}


solicitudOrdenes();
