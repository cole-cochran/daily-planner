// global variables
var saveBtn = $(".saveBtn")
var currentTime = moment().hour();
console.log(currentTime);
//shows current day & time
var today = function(){
// calls moment to format current day/time    
    var day = moment();
    $("#currentDay").text(day.format("dddd, MMMM Do YYYY, hh:mm:ss a"));
    }
    setInterval(today, 1000);
// funtion to save input on click 
$(".saveBtn").on("click" , saveInput);
function saveInput(event) {
    event.preventDefault;
    var userInput = $(this).siblings("textarea").val()
    var currentTimeText = $(this).parent().attr("clock-hour");
    localStorage.setItem(currentTimeText, userInput)

}
// function for time to change text area by color

$(".time-block").each(function(){
   var currentBlock = $(this).attr("clock-hour")
   var currentInput = localStorage.getItem(currentBlock)
   $(this).children("textarea").val(currentInput)
   if (currentBlock < currentTime) {
    $(this).children("textarea").addClass("past")
   } else if (currentBlock == currentTime){
    $(this).children("textarea").addClass("present")
   } else {
    $(this).children("textarea").addClass("future")
   }
})