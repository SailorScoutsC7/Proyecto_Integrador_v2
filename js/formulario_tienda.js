 console.log("Sistema funcionando");

 //Montar el servidor (Solo usar una vez)
 /*
 var regular=[];
  localStorage.setItem("regular", JSON.stringify(regular));
  var producto_covid=[];
  localStorage.setItem("producto_covid", JSON.stringify(producto_covid));
  var temporada=[];
  localStorage.setItem("temporada", JSON.stringify(temporada));
*/
regular = JSON.parse(localStorage.getItem("regular"));
temporada = JSON.parse(localStorage.getItem("temporada"));
producto_covid = JSON.parse(localStorage.getItem("producto_covid"));

class Producto {
    constructor(ID,nombre,precio,cantidad,tipo,descripcion,img) {
        this.ID= ID;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad= cantidad;
        this.tipo= tipo;
        this.descripcion= descripcion;
        this.img= img;
    }
}
function agregarProducto(formulario) {
    var ID = document.getElementById('ID_Producto').value;
    var nombre = document.getElementById('nombre_producto').value;
    var precio = document.getElementById('Precio').value;
    var cantidad = document.getElementById('cantidad').value;
    var tipo = document.getElementById('tipo').value;
    var descripcion = document.getElementById('Descripcion').value;
    var img = document.getElementById('imagen').value;
    img = img.replace(/^.*\\/, "");
    //validarForm(nombre, email, telefono, mensaje);
    var producto = new Producto(ID,nombre,precio,cantidad,tipo,descripcion,img);
    console.log(tipo);
    tipoProducto(tipo,producto);
    ID="";
    nombre="";
    precio="";
    cantidad="";
    tipo="";
    descripcion="";
    img="";
}
//función que determina en que almacenamiento guardar cada producto.
function tipoProducto(tipo,producto){
   switch(tipo){
   case "regular":
    regular.push(producto);
    localStorage.setItem("regular", JSON.stringify(regular));
    break;
   case "temporada":
    temporada.push(producto);
    localStorage.setItem("temporada", JSON.stringify(temporada));
    break;
   case "producto_covid":
    producto_covid.push(producto);
    localStorage.setItem("producto_covid", JSON.stringify(producto_covid));
    break;
   }
}
//función que usa los datos del LocaStorage para hacer las tarjetas del producto
function añadirProducto(subir_producto){
    const itemHTML = 
        '<div class="col-md-4">\n'                                         +
        '<div class="card" style="width: 18rem;">\n'                        +
        '<img src="../html/assets/Store/'+subir_producto.tipo+'/'+subir_producto.img+'" class="card-img-top" alt="'+subir_producto.nombre+'">\n'                        +
        '    <div class="card-body">\n'                                     +
        '        <h5 class="card-title">'+subir_producto.nombre+'</h5>\n'   +
        '        <h6 style="color: brown; font-sixe: 50px">'+subir_producto.precio+' MXN</h6>\n'   +
        '        <p class="card-text">'+subir_producto.descripcion+'</p>\n' +
        '    </div>\n'                                                      +
        '</div>\n'                                                          +
        '</div>'                                                             ;
    const itemsContainer = document.getElementById(subir_producto.tipo);//define en que sección poner el producto
    itemsContainer.innerHTML += itemHTML;//añade el elemento HTML
}

// función que añade productos al carrusel
function añadirProductosTempo(añadir_productoTemp){
    const itemHTML2 = 
        '<div class="carousel-item">\n'                                     +
        '<img src="assets/Store/temporada/'+añadir_productoTemp.img +'" class="d-block w-100" alt="..." height="500" width="150"></img>\n'+
         '</div>';
    const itemsContainer2 = document.getElementById("carruselTempo");//define en que sección poner el producto
    itemsContainer2.innerHTML += itemHTML2;//añade el elemento HTML
}
/*
<div class="carousel-item">
          <img src="assets/Store/temporada/febrero.jpg" class="d-block w-100" alt="..." height="500" width="150">
          </div>
*/

//Código para añadir productos al HTML.
var recorrerArray=[regular,temporada,producto_covid];

for (let index = 0; index < recorrerArray.length; index++) {
    for (let j = 0; j < recorrerArray[index].length; j++) {
        var subir_producto = recorrerArray[index][j];
       añadirProducto(subir_producto);
    }
};


    for (let t = 0; t < temporada.length; t++) {
        var añadir_productoTemp = temporada[t];
        añadirProductosTempo(añadir_productoTemp);
    }
