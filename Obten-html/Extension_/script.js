/*

//Reconoce la etiqueta a la que se le dió clcik

var quitar = document.getElementById("remo");
function elemento(e){
  if (e.srcElement)
    tag = e.srcElement.tagName;
  else if (e.target)
      tag = e.target.tagName;
  
  $(document).ready(function(){
    alert('lol');
    //Funcion que pide nombre de comentario que se usará como id y crea un nuevo elemento div en el DOM
    $(tag).dblclick(function(){
      var titulo = prompt("Agrega un titulo");
      var id = titulo.replace(/\s+/g,'\0');
      id = id.toLowerCase();
      alert(id);
      $(this).append("<div id="+id+" class="+"markit-div"+"></div>");
    
      var comentario = prompt("Agrega un comentario");
      $("#"+id+"").html(comentario);
      comentario = undefined;
      hola = u;
    });              
  });
}

*/