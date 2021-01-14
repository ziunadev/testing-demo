// function realTimeClock() {
//     var rtClock = new Date();

//     var hours = rtClock.getHours();
//     var minutes = rtClock.getMinutes();
//     var seconds = rtClock.getSeconds();

//     // AM PM system
//     var amPm = (hours > 12) ? "PM" : "AM";

//     // convert the hours component to 12-Hours format
//     hours = (hours > 12) ? hours - 12 : hours;

//     // Pad the hours, minutes, and seconds with leading zeros
//     hours = ("0" + hours).slice(-2);
//     minutes = ("0" + minutes).slice(-2);
//     seconds = ("0" + seconds).slice(-2);

//     var jam = hours + " : " + minutes + " : " + seconds + " " + amPm;
    
//     // Display the Clock
//     document.getElementById('clock').innerHTML = jam;
//     var t = setTimeout(realTimeClock, 500);
// }