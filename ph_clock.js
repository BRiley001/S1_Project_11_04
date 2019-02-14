"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 4

   Countdown Clock for Ticket Ordering
   Author: Brenden Riley
   Date:  2.13.19

   Filename:   ph_clock.js     

*/






/* ------------------------------------------------- */
// The minsLeft determines the minutes left, while the seconds left determines the seconds left
var minsLeft = 0;
var secsLeft = 2;
// The time left is equal to the minutes left (in seconds) plus the seconds left
var timeLeft = minsLeft * 60 + secsLeft;
// The countdown is saved in a avriable so it can be stopped later on
var clockID = setInterval("countdown()", 1000);

// The countdown function determines the countdown
function countdown() {
    // The minutes left is the timeLeft converted to minutes
    minsLeft = Math.floor(timeLeft / 60);
    // The seconds left is the timeleft minus all the seconds the minutes left has
    secsLeft = timeLeft - 60 * minsLeft;
    // The minsSring saves the value of the addLeadingZero when it has minsleft as a parameter
    var minsString = addLeadingZero(minsLeft);
    //The secsString saves the value of the addLeadingZero when it has secsleft as a paramter
    var secsString = addLeadingZero(secsLeft);
    //The HMTL is edited so that the minutes and seconds left is changed to whatever is within the string
    document.getElementById("minutes").innerHTML = minsString;
    document.getElementById("seconds").innerHTML = secsString;
    //The checkTimer checks the timer to see if it is zero
    checkTimer();
    //The time left decreases by one every time the function is run.
    timeLeft--;
}

// The stopClock function will stop the timer from counting down if it reaches zero. When it does reach zero, it displays a message saying that the order has expired.
function stopClock() {
    document.getElementById("TimeHead").insertAdjacentHTML("beforeend", "<br > (Order Expired)");
    clearInterval(clockID);
}
/* The checkTimer() function tests whether there is any time left to make the
   ticket order. If the time left is 0, the stopClock() function is run;
   otherwise nothing happens and the program continues to run. */

function checkTimer() {
    if (timeLeft === 0) stopClock();
}


/* The addLeadingZero() function adds a leading zero to values which are less than 10 */

function addLeadingZero(num) {
    var numStr = (num < 10) ? ("0" + num) : "" + num;
    return numStr;
}