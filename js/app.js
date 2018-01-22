
$(function(){
 setTimeout(function() {
    $('#splash').fadeOut(500);
 }, 2000);
});

function tipoComida(){

}

function loadPage(){
  $('.modal').modal();
  $("#selec-tipo").change(tipoComida)
}

//var $tipo=$("#selec-tipo");


function tipoComida(){
  var valor=document.getElementById('selec-tipo').value
  for(var i in data){
    if(data[i].tipo === valor){
    var hrefImage=document.createElement('a');
    hrefImage.href=$('.modal');
    var image=document.createElement('img');
    image.src=data[i].imagen;
    hrefImage.appendChild(image);
    document.getElementById('list-rest').appendChild(hrefImage);
  /*
      var image = document.createElement("img");
      image.src=data[i].imagen;
      $(".list-rest").html(image);*/
    }
  }
}


$(document).ready(loadPage);
