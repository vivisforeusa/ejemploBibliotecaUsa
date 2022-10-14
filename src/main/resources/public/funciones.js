$(document).ready(function(){
cards();
$('#formActualizar').hide();
});

function cards(){
$('#tarjeta').show();
$.ajax({
url: "http://localhost:8080/ListarLibros",
type: "GET",
datatype: "JSON",
success:function(items){
console.log(items);
let tarjetas="";
tarjetas+="<div class='container'><div class='row'>";
for(i=0;i<items.length;i++){
tarjetas+=`
    <div class="card col-3">
      <img src="https://universodeletras.unam.mx/app/uploads/2021/01/logo_bajate-un-libro.png" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${items[i].titulo}</h5>
        <p class="card-text">${items[i].autor} ${items[i].editorial}</p>
      </div>
    </div>`
}
tarjetas+="</div></div>";
$('#tarjeta').append(tarjetas);
}
});
}


function listarLibros(){
$('#tarjeta').hide();
$('#tabla').show();
$('#formActualizar').hide();
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
$('#libro').empty();
let myTabla="<table class='table table-hover'>";
myTabla+=`
<thead>
<th>Isbn</th>
<th>Titulo</th>
<th>Autor</th>
<th>Editorial</th>
<th>Paginas</th>
<th>Editar</th>
<th>Eliminar</th>
</thead>
`
for(i=0; i<filas.length;i++){
myTabla+="<tr>"
myTabla+="<td>"+filas[i].isbn+"</td>";
myTabla+="<td>"+filas[i].titulo+"</td>";
myTabla+="<td>"+filas[i].autor+"</td>";
myTabla+="<td>"+filas[i].editorial+"</td>";
myTabla+="<td>"+filas[i].no_page+"</td>";
myTabla+="<td><button class='btn btn-warning' onclick='cargarDatos(\""+filas[i].isbn+"\")'>Editar</button>"
myTabla+="<td><button class='btn btn-danger' onclick='eliminarLibro(\""+filas[i].isbn+"\")'>Eliminar</button>"
myTabla+="</tr>"
}
myTabla+="</table>";
$('#tabla').empty();
$('#tabla').append(myTabla);
}

function consultaLibro(){
$('#tarjeta').hide();
$('#libro').empty();
let codigo=$("#isbn").val();
$.ajax({
url: "http://localhost:8080/BuscarLibro/"+codigo,
type: "GET",
datatype: "JSON",
success:function(respuesta){
console.log(respuesta);
if(respuesta!=null){
texto="Libro: "+respuesta.isbn+",  Titulo: "+respuesta.titulo+",  Autor: "+respuesta.autor+",  Editorial: "+respuesta.editorial;
$('#libro').append(texto);
}else{
alert("El Libro no se encontro.");
}
}
});
}

function buscarAutor(){
$('#tarjeta').hide();
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
window.location.href="http://localhost:8080/libros.html";
}
});

}

function cargarDatos(codigo){
alert(codigo);
$('#tabla').hide();
$('#formActualizar').show();
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
$('#formActualizar').hide();
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