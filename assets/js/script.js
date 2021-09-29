var today = function(){
    var day = moment();
    $("#currentDay").text(day.format("dddd, MMMM Do YYYY, hh:mm:ss a"));
    }
    setInterval(today, 1000);
    