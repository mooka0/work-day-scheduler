$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var time = $(this).parent().attr("id");
    var task = $(this).siblings(".activity").val();
    localStorage.setItem(time, task);
  });

  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a")); // moment.js

  // change color for current and past and future hours

  function colorUpdater() {
    var currentTime = moment().hour();

    $(".hour").each(function () {
      var blockHour = parseInt($(this).attr("id"));

      if (blockHour < currentTime) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
      } else if ((blockHour === currentTime)) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
      } else {
        $(this).removeClass("past");
        $(this).removeClass(".resent");
        $(this).addClass("future");
      }
    });
  }


  // pull information from local storage

  $("#8 .activity").val(localStorage.getItem("8"));
  $("#9 .activity").val(localStorage.getItem("9"));
  $("#10 .activity").val(localStorage.getItem("10"));
  $("#11 .activity").val(localStorage.getItem("11"));
  $("#12 .activity").val(localStorage.getItem("12"));
  $("#13 .activity").val(localStorage.getItem("13"));
  $("#14 .activity").val(localStorage.getItem("14"));
  $("#15 .activity").val(localStorage.getItem("15"));
  $("#16 .activity").val(localStorage.getItem("16"));
  $("#17 .activity").val(localStorage.getItem("17"));

  colorUpdater();
});
