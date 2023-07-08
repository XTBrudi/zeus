// Set the target date and time for the countdown
const targetDate = new Date("2023-07-15T23:59:59");
//const targetDate = new Date("2023-07-08T18:55:00")
// Update the countdown every second
setInterval(updateCountdown, 1000);

function updateCountdown() {
  const now = new Date().getTime();
  const timeDifference = targetDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Format the countdown
  const formattedCountdown = `${padZero(days)}:${padZero(hours)}:${padZero(
    minutes
  )}:${padZero(seconds)}`;

  // Display the countdown
  const countdownElement = document.getElementById("countdown");
  countdownElement.innerHTML = "🔥 "+formattedCountdown+" 🔥";

  // Check if the countdown has ended
  if (timeDifference < 0) {
    countdownElement.innerHTML = "TIMER RAN OUT! 🔥 Site is Updating in ~30minutes. 🔥";
    countdownElement.classList.add("countdown-finished");
  }
}

// Function to pad single digits with a leading zero
function padZero(number) {
  return number.toString().padStart(2, "0");
}