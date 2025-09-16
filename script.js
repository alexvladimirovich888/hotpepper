// Countdown timer
const countdownEl = document.getElementById("countdown");
const targetDate = new Date().getTime() + (1000 * 60 * 60); // 1 hour from now

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;
  if (distance <= 0) {
    countdownEl.innerHTML = "The stream has started!";
    clearInterval(timer);
    return;
  }
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  countdownEl.innerHTML = hours + "h " + minutes + "m " + seconds + "s ";
}
const timer = setInterval(updateCountdown, 1000);
updateCountdown();

// Pepper rain animation
const pepperRain = document.querySelector('.pepper-rain');

function createPepper() {
  const pepper = document.createElement('img');
  pepper.src = 'pepper.png';
  pepper.classList.add('pepper');
  pepper.style.left = Math.random() * window.innerWidth + 'px';
  pepper.style.animationDuration = (3 + Math.random() * 5) + 's';
  pepperRain.appendChild(pepper);

  setTimeout(() => {
    pepper.remove();
  }, 8000);
}

setInterval(createPepper, 300);
