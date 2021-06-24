const song = document.getElementById("sidepony");
$("#text2").text("Click to open your gift!");
$("#text2").css("color", "#41A990");

$("#box").on("click", function () {
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
    $("#text2").text("Pack your bags! August 21-25th");
    $("#text2").css("color", "rgb(247, 246, 223)");
  }, 13250);
  setTimeout(function () {
    $("#text2").css("display", "none");
  }, 15250);
  setTimeout(function () {
    $("#text2").css("display", "block");
  }, 15750);
  setTimeout(function () {
    $("#text2").css("display", "none");
  }, 16750);
  setTimeout(function () {
    $("#text2").css("display", "block");
  }, 17250);
  setTimeout(function () {
    $("#text2").css("display", "none");
  }, 18250);
  setTimeout(function () {
    $("#text2").css("display", "block");
  }, 18750);
  setTimeout(function () {
    $("#text").css("display", "block");
  }, 20500);
  setTimeout(function () {
    $("#text2").css("display", "none");
  }, 22500);
  setTimeout(function () {
    $("#text2").css("display", "block");
    $("#text2").text("Love Shane, Crystal & Rachel");
  }, 22750);
});