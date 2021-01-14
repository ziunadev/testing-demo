function realTimeClock() {
    var rtClock = new Date();

    var hours = rtClock.getHours();
    var minutes = rtClock.getMinutes();
    var seconds = rtClock.getSeconds();

    // AM PM system
    var amPm = (hours > 12) ? "AM" : "PM";

    // convert the hours component to 12-Hours format
    hours = (hours > 12) ? hours - 12 : hours;

    // Pad the hours, minutes, and seconds with leading zeros
    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);

    // Display the Clock
    document.getElementById('clock').innerHTML = hours + " : " + minutes + " : " + seconds + " " + amPm;
    var t = setTimeout(realTimeClock, 500);
}