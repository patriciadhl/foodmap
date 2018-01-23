
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
//  var valor=$tipo.val();
  var valor=document.getElementById('selec-tipo').value
  for(var i in data){
    if(data[i].tipo === valor){
      var hrefImage=document.createElement('a');
      hrefImage.href='#modal1';
      hrefImage.classList.add("modal-trigger");
      var image=document.createElement('img');
      image.src=data[i].imagen;
      image.setAttribute('value',i);
      hrefImage.appendChild(image);
      document.getElementById('list-rest').appendChild(hrefImage);

    /*  var $image= $('<img/>', {
        'src':data[i].imagen,
        'data-target':'modal1'
      });
      $("#list-rest").append($image);*/
    }
  }
}


$(document).ready(loadPage);
