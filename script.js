var plannerList = [
  "#eightam",
  "#nineam",
  "#tenam",
  "#elevenam",
  "#twelvepm",
  "#onepm",
  "#twopm",
  "#threepm",
  "#fourpm",
  "#fivepm",
];

// set todays date on the screen
$("#currentDay").text(
  moment().format("dddd") +
    ", " +
    moment().format("MMMM") +
    " " +
    moment().format("Do")
);
//bellow is the code to make the right color for the planner hours
for (let i = 0; i < plannerList.length; i++) {
  if (
    moment().format("h") + moment().format("a") !==
    $(plannerList[i] + " p").attr("value")
  ) {
    $(plannerList[i] + " textarea").css("background-color", "#DCDCDC");
  } else if (
    moment().format("h") + moment().format("a") ===
    $(plannerList[i] + " p").attr("value")
  ) {
    $(plannerList[i] + " textarea").css("background-color", "#ff6262");
    break;
  }
}

// the code bellow set the text content from localStorage to the textarea
for (let i = 0; i < plannerList.length; i++) {
  $(plannerList[i] + " textarea").text(localStorage.getItem(plannerList[i]));
}

//event listener react on save button
$(".saveBtn").on("click", function () {
  var textareaEl = $("#" + $(this).parent().parent().attr("id") + " textarea");
  var keyToStore = "#" + $(this).parent().parent().attr("id");
  var textToStore = textareaEl.val();
  localStorage.setItem(keyToStore, textToStore);
});
