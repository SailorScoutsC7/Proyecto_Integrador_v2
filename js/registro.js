/*
var registro_usuarios=[];//Crea la lista donde se van a almacenar los registros
localStorage.setItem("Registro_usuarios", JSON.stringify(registro_usuarios));
*/
 registro_usuarios = JSON.parse(localStorage.getItem("Registro_usuarios"));
class Usuario {//El Usuario tiene que ingresar estos datos.
    constructor(nombre,telefono,correo,contraseña) {
       
        this.nombre = nombre;
        this.telefono = telefono;
        this.correo = correo;
        this.contraseña = contraseña;
    }
}
function agregarUsuario(){
    var nombre = document.getElementById('nombre').value;//Recupero los elementos de las textbox
    var correo = document.getElementById('email').value;
    var contraseña = document.getElementById('contraseña').value;
    var telefono = document.getElementById('telefono').value;
    var contraseña2 = document.getElementById('contraseña2').value;
    if (contraseña==contraseña2) {
        var usuario=new Usuario(nombre,telefono,correo,contraseña);
        registro_usuarios.push(usuario);//se agrega el usuario a la lista
        localStorage.setItem("Registro_usuarios", JSON.stringify(registro_usuarios));//Guarda en local storage
    } else {
        alert("Contraseñas no coinciden");
    }
}



