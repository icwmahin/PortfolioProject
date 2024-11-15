// Initialize variables
let is24HourFormat = false;

// Function to update the clock
function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const period = document.getElementById("period");

  if (!is24HourFormat) {
    period.textContent = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert to 12-hour format
  } else {
    period.textContent = ""; // Hide AM/PM in 24-hour format
  }

  document.getElementById("clock").textContent = `${hours
    .toString()
    .padStart(2, "0")}:${minutes}:${seconds}`;
}

// Toggle time format between 12-hour and 24-hour
function toggleFormat() {
  is24HourFormat = !is24HourFormat;
  updateClock(); // Update immediately
}

// Function to change theme
function changeTheme(theme) {
  document.body.className = theme;
  document.querySelector(
    ".clock-container"
  ).className = `clock-container ${theme}`;
}

// Update the clock every second
setInterval(updateClock, 1000);
