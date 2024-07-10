$(function () {
  $("#enviarCorreo").tooltip();
  $("#agregaFavoritos").tooltip();
});

$(document).ready(function () {
  $("#enviarCorreo").click(function () {
    alert("El correo fue enviado correctamente...");
  });
});

$(document).ready(function () {
  var toggle = true;
  $("section h3").on({
    dblclick: function () {
      if (toggle) {
        $(this).css("color", "red");
        toggle = false;
      } else {
        $(this).css("color", "black");
        toggle = true;
      }
    },
  });
});

$(".card-title").on("click", function (event) {
  event.preventDefault();
  $(".card-img-top, .card-text").toggle();
});
