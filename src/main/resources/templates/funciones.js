function listarLibros(){
alert("Aquiiii");
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
myTabla+="</tr>"
}
myTabla+="</table>";
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
}
});
}