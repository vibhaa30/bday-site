const giftBox = document.getElementById("gift-box");
let clickCount = 0;
const requiredClicks = 4; // how many times to click before it opens

giftBox.addEventListener("click", () => {
  clickCount++;

  // Optional: add a "wiggle" effect for feedback
  giftBox.style.transform = "scale(1.1)";
  setTimeout(() => {
    giftBox.style.transform = "scale(1)";
  }, 100);

  // Update message if you want (optional)
  const message = document.getElementById("gift-message");
  if (message) {
    if (clickCount < requiredClicks) {
      message.textContent = `Keep tapping... (${requiredClicks - clickCount} to go!)`;
    } else {
      message.textContent = "🎉 Surprise!";
    }
  }

  // When reached enough clicks, open gift
  if (clickCount === requiredClicks) {
    giftBox.classList.add("opened");

    // Confetti 🎉
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.5 }
    });

    // Reveal content after animation
    setTimeout(() => {
      document.getElementById("gift-wrapper").style.display = "none";
      revealNote(); // your existing function
    }, 1000);
  }
});

function revealNote() {
  document.getElementById("note").classList.remove("hidden");
}

function revealNote() {
  document.getElementById("note").classList.remove("hidden");
  document.getElementById("fortune-area").classList.remove("hidden");
  document.getElementById("polaroid-board").classList.remove("hidden");
}

// const egg = document.getElementById("easter-egg");
// const eggSound = new Audio('./assets/azeryell.mp3');

function placeEasterEggRandomly() {
  const egg = document.getElementById("easter-egg");
  const padding = 50; // keep away from edges
  const maxX = window.innerWidth - padding;
  const maxY = window.innerHeight - padding;

  const randomX = Math.floor(Math.random() * (maxX - padding));
  const randomY = Math.floor(Math.random() * (maxY - padding));

  egg.style.left = `${randomX}px`;
  egg.style.top = `${randomY}px`;
}

document.addEventListener("DOMContentLoaded", () => {
  const egg = document.getElementById("easter-egg");
  const eggSound = new Audio("assets/azeryell2.mp3");

  egg.addEventListener("click", () => {
    eggSound.currentTime = 0;
    eggSound.play();
    egg.classList.add("wiggle");

  setTimeout(() => {
    egg.classList.remove("wiggle");
    placeEasterEggRandomly();
  }, 400);
  });
});

// Fortune messages
const fortunes = [
  "Sometimes life is like this dark tunnel. You can't always see the light at the end of the tunnel, but if you just keep moving... you will come to a better place.",
  "When you're in your darkest place, you give yourself hope and that's inner strength.",
  "It's time for you to look inward, and start asking yourself the big questions. Who are you? And what do you want?",
  "In the darkest times, hope is something you give yourself. That is the meaning of inner strength.",
  "Pride is not the opposite of shame, but its source. True humility is the antidote to shame.",
  "You sound like my nephew. Always thinking you need to do things on your own without anyone's support. There is nothing wrong with letting people who love you help you.",
];

function generateFortune() {
  const fortuneText = document.getElementById("fortune-text");
  const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  fortuneText.textContent = `"${randomFortune}"`;
}
