$("ul li").removeClass("active")

function pintarDom(id) {
  
  console.log(id)
  $("ul li").removeClass("active");

  $( '#' + `${id}`).addClass( "active" );

  $( '#' + `${id}` ).dblclick(function() {
    $("ul li").removeClass("active")
  });
};



$("li").click(function() {
  var id = $(this).attr("id");
  var name = $(this).closest("li").prop("tagName");
  pintarDom(id)

});