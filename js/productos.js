$('.modalDesc').hide();

function abrirModal(id){

  console.log(id)
  /* $('ul li').click(function(){
    $('.modalDesc').fadeIn(1000);
  }); */

  $("ul li").click(function(){
    $(".modalDesc").fadeIn(1000).animate({
      left: '280px',
     });
  });  
}


$('.btnModal').click(function(){

  $(".modalDesc").animate({
    left: '0px',
  
  });

  $('.modalDesc').fadeOut(500);
})


$("ul li").removeClass("active")

function pintarDom(id) {
  
  console.log(id)
  $("ul li").removeClass("active");

  $( '#' + `${id}`).addClass( "active" );

  $( '#' + `${id}` ).dblclick(function() {
    $("ul li").removeClass("active");

  });

  abrirModal(id);
};



$("li").click(function() {
  var id = $(this).attr("id");
  var name = $(this).closest("li").prop("tagName");
  pintarDom(id)

});

