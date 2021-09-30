var calendar = $(".container");
var saveBtn = $(".saveBtn")
var currentTime = moment().hour();
console.log(currentTime);
//shows current day & time
var today = function(){
    var day = moment();
    $("#currentDay").text(day.format("dddd, MMMM Do YYYY, hh:mm:ss a"));
    }
    setInterval(today, 1000);

$(".saveBtn").on("click" , saveInput);
function saveInput(event) {
    event.preventDefault;
    var userInput = $(this).siblings("textarea").val()
    var currentTimeText = $(this).parent().attr("clock-hour");
    console.log("textarea", userInput, currentTimeText)
    localStorage.setItem(currentTimeText, userInput)

}
// console.log(saveInput)
// function for time to change text area by color

$(".time-block").each(function(){
   var currentBlock = $(this).attr("clock-hour")
   var currentInput = localStorage.getItem(currentBlock)
   $((this)).children("textarea").val(currentInput)

})

// for (let i = 9; i <= 17; i++) {
    // var userInput = localStorage.getItem(i)
//}