// Get HTML elements
var days = document.getElementById("days");
var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");

// Target date (date2)
let targetDate = new Date("17 June 2024");

// Function to update the counter
function updateCounter() {
    let now = new Date(); 
    let differenceInTime = targetDate.getTime() - now.getTime(); 

    if (differenceInTime <= 0) {
        // If the target date is reached or passed, set all to 0
        days.innerText = 0;
        hours.innerText = 0;
        minutes.innerText = 0;
        seconds.innerText = 0;
        return; // Exit the function
    }

    // Calculate the differences
    let differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
    let differenceInHours = Math.floor((differenceInTime % (1000 * 3600 * 24)) / (1000 * 3600));
    let differenceInMinutes = Math.floor((differenceInTime % (1000 * 3600)) / (1000 * 60));
    let differenceInSeconds = Math.floor((differenceInTime % (1000 * 60)) / 1000);

    // Update HTML elements
    days.innerText = differenceInDays;
    hours.innerText = differenceInHours;
    minutes.innerText = differenceInMinutes;
    seconds.innerText = differenceInSeconds;
}

// Update the counter every second
setInterval(updateCounter, 1000);

// Initial call to display the counter immediately
updateCounter();
