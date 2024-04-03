/* Seleccionar todos los elementos li dentro de un elemento con el id "lista".
Modificar los estilos de los elementos li seleccionados, agregando una clase CSS llamada "resaltado" que cambie el color del texto a rojo y lo haga negrita. */

let list = document.querySelectorAll("#lista li")

list.forEach(function(elementli){
    elementli.classList.add("resaltado")
})