function mostrarComida(){
    document.getElementById("contenido-menu").classList.add("hidden");
    document.getElementById("productos-categorias").classList.remove("hidden");
    document.getElementById("lista-comidas").classList.remove("hidden");
       
}
function close(){
    document.getElementById("productos-categorias").classList.add("hidden");
    document.getElementById("contenido-menu").classList.remove("hidden");
}
function mostrarSupermercado(){
    document.getElementById("contenido-menu").classList.add("hidden");
    document.getElementById("productos-categorias").classList.remove("hidden");
    document.getElementById("detalle-supermercado").classList.remove("hidden");
}

function mostrarMedicamentos(){
    document.getElementById("contenido-menu").classList.add("hidden");
    document.getElementById("productos-categorias").classList.remove("hidden");
    document.getElementById("detalle-medicamentos").classList.remove("hidden");
}
function mostrarTecnologia(){
    document.getElementById("contenido-menu").classList.add("hidden");
    document.getElementById("productos-categorias").classList.remove("hidden");
    document.getElementById("detalle-tecnologia").classList.remove("hidden");
}
function seleccionEmpresa(){
    document.getElementById("lista-comidas").classList.add("hidden");
    document.getElementById("productos-comida").classList.remove("hidden");

}
function abrirCarrito(){
    document.getElementById('empresa-1').style.display = 'none';
    document.getElementById('empresa-2').style.display = 'none';
    document.getElementById('productos-comida').style.display = 'none';
    document.getElementById('botonPago').style.display ='flex';
    document.getElementById('lista-carrito').style.display ='flex';

    renderCarrito();
}
function desplegarTarjeta(){
    document.getElementById('lista-carrito').style.display ='none';
    document.getElementById('ocultar').style.display ='flex';
}
/* funcionalida del carrito  */

const Clickbutton  = document.querySelectorAll('.boton')
let cantidadProductos = 0;
const globoCart = document.getElementById("globoCarrito")
let carrito =[]
const tcuerpo = document.querySelector('tbody')
Clickbutton.forEach(card =>{
    card.addEventListener('click', addToCarritoItem)
})
function addToCarritoItem(e){
    cantidadProductos += 1;
    const boton = e.target
    const item =boton.closest('.card')
    console.log(item);
    const itemTitle = item.querySelector('.card-titulo').textContent;
    console.log(itemTitle);
    const itemPrecio = item.querySelector('.precio').textContent;
    console.log(itemPrecio);
    const itemImg = item.querySelector('.card-img').src;
    console.log(itemImg);
    const newItem ={
        title: itemTitle,
        precio: itemPrecio,
        img: itemImg,
        cantidad: 0
    }
    let contenidoglobo = `<span>${cantidadProductos}</span>`;
    globoCart.innerHTML = contenidoglobo;
    addItemCarrito(newItem);
}

function addItemCarrito(newItem){
    /*const alert = document.querySelector('.alert');
    setTimeout(function(){
        alert.classList.add('momento');
    },2000)
    alert.classList.remove('momento');*/

    carrito.push(newItem);
    console.log("Aqui va lo del carrito" + carrito)
    const inputElemento = tcuerpo.getElementsByClassName('elemento-Input')
    for(let i=0; i<carrito.length; i++){
        if(carrito[i].title.trim() === newItem.title.trim()){
            carrito[i].cantidad ++;
            const inputValue = inputElemento[i];
            inputValue.value ++;
            console.log(carrito)
            carritoTotal()
            return null;
        }
    }
    
    renderCarrito()

}

function renderCarrito(){
    tcuerpo.innerHTML = ''
    carrito.map(item =>{
        const tr =document.createElement('tr')
        tr.classList.add('ItemCarrito')
        const Content = `
        <tr>
        <th scope="row">1</th>
        <td class="table-productos">
          <h6 class="title">${item.title}</h6>
        <img style="width:100px;" src=${item.img} alt="">
      </td>
        <td class="table-precio p-2"><p>${item.precio}</p></td>
        <td class="table-cantidad p-2">
          <button type="button" class="delete btn-close"></button>
          <input class="elemento-Input" type="number" nim="1" value=${item.cantidad}>
        </td>
      </tr> `
        tr.innerHTML = Content;
        tcuerpo.append(tr);
        tr.querySelector(".delete").addEventListener('click', removeItemCarrito);
        tr.querySelector(".elemento-Input").addEventListener('change', sumaCantidad)
    })
    carritoTotal()
   // console.log(carrito)
}
function carritoTotal(){
    let Total = 0;
    const itemCartTotal =document.querySelector('.itemCartTotal');
    carrito.forEach((item)=>{
        const precio = Number(item.precio.replace("L.", ''))
        Total = Total + precio*item.cantidad;
    })
    itemCartTotal.innerHTML = `Total L.${Total}`;
    addLocalStorage()
}
function removeItemCarrito(e){
    const btnEliminar =e.target;
    const tr = btnEliminar.closest(".ItemCarrito");
    const title = tr.querySelector('.title').textContent;
    for(let i=0; i<carrito.length; i++){

        if(carrito[i].title.trim() === title.trim()){
            carrito.splice(i,1)
        }
    }
    tr.remove();
    carritoTotal()
}
function sumaCantidad(e){
    const sumaInput = e.target;
    const tr = sumaInput.closest(".ItemCarrito");
    const title =tr.querySelector('.title').textContent;
    carrito.forEach(item =>{
        if(item.title.trim() === title){
            sumaInput.value < 1 ? (sumaInput.value = 1): sumaInput.value;
            item.cantidad = sumaInput.value;
            carritoTotal()
        }
    })
  //  console.log(carrito)
    

}
function addLocalStorage(){
    localStorage.setItem('carrito', JSON.stringify(carrito))
}
window.onload = function(){
    const storage = JSON.parse(localStorage.getItem('carrito'));
    if(storage){
        carrito = storage;
        renderCarrito()
    }
}
/*-------------- funcionalida de la tarjeta */
const formulario = document.querySelector('#formulario-tarjeta');
      
    
    
    for(let i = 1; i <= 12; i++){
        let opcion = document.createElement('option');
        opcion.value = i;
        opcion.innerText = i;
        formulario.selectMes.appendChild(opcion);
    }
    
    
    const yearActual = new Date().getFullYear();
    for(let i = yearActual; i <= yearActual + 8; i++){
        let opcion = document.createElement('option');
        opcion.value = i;
        opcion.innerText = i;
        formulario.selectYear.appendChild(opcion);
    }
    formulario.inputNumero.addEventListener('keyup', (e) => {
        let valorInput = e.target.value;
        formulario.inputNumero.value = valorInput
        .replace(/\s/g, '')
        .replace(/\D/g, '')
        .replace(/([0-9]{4})/g, '$1 ')
        .trim();
    
    });
    formulario.inputNombre.addEventListener('keyup', (e) => {
        let valorInput = e.target.value;
        formulario.inputNombre.value = valorInput.replace(/[0-9]/g, '');

    });
    
function orderEnd(){
    let items = Object.keys(localStorage);
    for(let i=0;i<localStorage.length;i++){
        localStorage.removeItem(items[i]);
        console.log(items[i]);
    }
}
    
