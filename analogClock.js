// select clock hands
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');
// Function to update the clock hands
function updateClock() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  const secondsDeg = (seconds / 60) * 360 + 90; // Starts at 90 Degrees
  const minutesDeg = (minutes / 60) * 360 + 90;
  const hoursDeg = ((hours % 12) / 12) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDeg}deg)`;
  minuteHand.style.transform = `rotate(${minutesDeg}deg)`;
  hourHand.style.transform = `rotate(${hoursDeg}deg)`;
}
// Clock update all 1000ms
setInterval(updateClock, 1000);
updateClock();
