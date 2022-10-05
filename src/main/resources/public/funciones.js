function listarLibros(){
$.ajax({
url: "http://localhost:8080/ListarLibros",
type: "GET",
datatype: "JSON",
success:function(respuesta){
console.log(respuesta);
mostrarTabla(respuesta);
}
});
}

function mostrarTabla(filas){
let myTabla="<table>";
for(i=0; i<filas.length;i++){
myTabla+="<tr>"
myTabla+="<td>"+filas[i].isbn+"</td>";
myTabla+="<td>"+filas[i].titulo+"</td>";
myTabla+="<td>"+filas[i].autor+"</td>";
myTabla+="<td>"+filas[i].editorial+"</td>";
myTabla+="<td>"+filas[i].no_page+"</td>";
myTabla+="<td><button onclick='cargarDatos(\""+filas[i].isbn+"\")'>Editar</button>"
myTabla+="<td><button onclick='eliminarLibro(\""+filas[i].isbn+"\")'>Eliminar</button>"
myTabla+="</tr>"
}
myTabla+="</table>";
$('#tabla').empty();
$('#tabla').append(myTabla);
}

function consultaLibro(){
let codigo=$("#isbn").val();
$.ajax({
url: "http://localhost:8080/BuscarLibro/"+codigo,
type: "GET",
datatype: "JSON",
success:function(respuesta){
console.log(respuesta);
if(respuesta!=null){
texto=respuesta.isbn+" -- "+respuesta.titulo+" -- "+respuesta.autor;
$('#libro').empty();
$('#libro').append(texto);
}else{
alert("El Libro no se encontro.");
}
}
});
}

function buscarAutor(){
let autor=$("#busautor").val();
$.ajax({
url:"http://localhost:8080/BuscarAutor/"+autor,
type: "GET",
datatype: "JSON",
success:function(respuesta){
console.log(respuesta);
mostrarTabla(respuesta);
}
});
}

function guardarLibro(){
let datos=
{
isbn:$('#isbn_insert').val(),
titulo:$('#titulo').val(),
autor:$('#autor').val(),
editorial:$('#editorial').val(),
no_page:parseInt($('#paginas').val())
}
let datosEnvio=JSON.stringify(datos);
//console.log(datosEnvio);
$.ajax({
url:"http://localhost:8080/InsertarLibro",
type:"POST",
data:datosEnvio,
contentType:"application/JSON",
datatype:JSON,
success:function(respuesta){
alert(respuesta);
}
});
}

function cargarDatos(codigo){
alert(codigo);
$.ajax({
url: "http://localhost:8080/BuscarLibro/"+codigo,
type: "GET",
datatype: "JSON",
success:function(respuesta){
console.log(respuesta);
$('#isbn_insert').val(respuesta.isbn);
$('#isbn_insert').attr('disabled','disabled');
$('#titulo').val(respuesta.titulo);
$('#autor').val(respuesta.autor);
$('#editorial').val(respuesta.editorial);
$('#paginas').val(respuesta.no_page);
}
});
}

function actualizarLibro(){
let datos={
isbn: $('#isbn_insert').val(),
titulo: $('#titulo').val(),
autor: $('#autor').val(),
editorial: $('#editorial').val(),
no_page:$('#paginas').val()
}
let datosJson=JSON.stringify(datos);
$.ajax({
url:"http://localhost:8080/EditarLibro",
type: "PUT",
data: datosJson,
contentType: "application/JSON",
datatype: "JSON",
success: function(respuesta){
console.log(respuesta);
listarLibros();
alert(respuesta);
}
});
$('#isbn_insert').val("");
$('#isbn_insert').removeAttr('disabled');
$('#titulo').val("");
$('#autor').val("");
$('#editorial').val("");
$('#paginas').val("");
}

function eliminarLibro(codigo){
var opcion=confirm("Esta Seguro en eliminar el Libro "+codigo);
if(opcion==true){
$.ajax({
url: "http://localhost:8080/EliminarLibro/"+codigo,
type: "DELETE",
datatype: "JSON",
success: function(respuesta){
listarLibros();
alert(respuesta);
}
});
}
}