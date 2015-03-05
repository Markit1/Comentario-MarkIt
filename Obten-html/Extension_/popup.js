
  var entero = 0;

  $("body").mousedown(function(e){

    if (e.srcElement)
        tag = e.srcElement.tagName;
    else if (e.target)
        tag = e.target.tagName;
    
      //Funcion que pide nombre de comentario que se usará como id y crea un nuevo elemento div en el DOM
  $(tag).dblclick(function(){
      
      var titulo = "comentario"+entero;
      var id = titulo.replace(/\s+/g,'');
        id = id.toLowerCase();
     $(this).append("<div id="+id+" class="+"markit-div"+"></div>")

      var comentario = prompt("Agrega un comentario");
      var cantidad = comentario.length;
        if (cantidad <= 60){
          $("#"+id+"").html(comentario);
            $(function() {
              $( "#"+id+"").draggable();
          });


      comentario = undefined;
      hola = u;
      }
    
    else{

      alert("No se puede usar tantas palabras");
    }


entero++;

  });  
});