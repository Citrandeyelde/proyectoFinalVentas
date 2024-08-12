document.getElementById("#Limpiar").addEventListener("click",borrarFormulario)
document.getElementById("#btnAgregar").addEventListener("click",guardarProductos)
function borrarFormulario(){
    document.getElementById("formulario").reset();
}
function guardarProductos(){
    alert("Guardando Productos");
}
