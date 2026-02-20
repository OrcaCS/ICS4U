$(document).ready(function() {
var blink_speed = 1000; // in milliseconds
var blink = setInterval(function () {
    var blinking = document.getElementById('blinkingText'); // find blinking thing
    blinking.style.visibility = (blinking.style.visibility == 'hidden' ? '' : 'hidden'); // blink on and off at set time
}, blink_speed);
});