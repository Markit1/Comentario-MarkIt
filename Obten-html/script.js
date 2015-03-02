
//Reconoce la etiqueta a la que se le dió clcik

function elemento(e){
  var quitar = document.getElementById("remo");
  if (e.srcElement)
    tag = e.srcElement.tagName;
  else if (e.target)
      tag = e.target.tagName;
  $(document).ready(function(){
    $(this).click(function(){
      console.log(this);
    });
  });
}

