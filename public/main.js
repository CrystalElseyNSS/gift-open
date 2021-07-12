const song = document.getElementById("sidepony");

$("#box").on("click", function () {
  $("#text").css("display", "none");
  $("#box-lid").toggleClass("openedLid");
  song.play();

  setTimeout(function () {
    $("body").toggleClass("openedBody");
  }, 1500);
  setTimeout(function () {
    $(".box").toggleClass("openedBorder");
  }, 1900);
  setTimeout(function () {
    $("#album").toggleClass("openedAlbum");
  }, 3250);
  setTimeout(function () {
    $("#ticket1").toggleClass("openedTicket");
    $("#ticket2").toggleClass("openedTicket");
    $("#ticket3").toggleClass("openedTicket");
    $("#ticket4").toggleClass("openedTicket");
  }, 5750);
  setTimeout(function () {
    $("#oysters").toggleClass("openedOysters");
  }, 7750);
  setTimeout(function () {
    $("#newYork").toggleClass("openedNYC");
  }, 10500);
  setTimeout(function () {
    $("#text").css("display", "block");
    $("#text").text("Pack your bags! August 21st-25th");
    $("#text").css("color", "rgb(247, 246, 223)");
  }, 13250);
  setTimeout(function () {
    $("#text").css("display", "none");
  }, 15250);
  setTimeout(function () {
    $("#text").css("display", "block");
  }, 15750);
  setTimeout(function () {
    $("#text").css("display", "none");
  }, 16750);
  setTimeout(function () {
    $("#text").css("display", "block");
  }, 17250);
  setTimeout(function () {
    $("#text").css("display", "none");
  }, 18250);
  setTimeout(function () {
    $("#text").css("display", "block");
    $("#text").text("Happy Birthday, Leah!");
  }, 18750);
  setTimeout(function () {
    $("#text").css("display", "block");
  }, 20500);
  setTimeout(function () {
    $("#text").css("display", "none");
  }, 22500);
  setTimeout(function () {
    $("#text").css("display", "block");
    $("#text").text("From Shane, Crystal, and Rachel!");
  }, 22750);
});