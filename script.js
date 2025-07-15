function revealNote() {
  document.getElementById("note").classList.remove("hidden");
}

function revealNote() {
  document.getElementById("note").classList.remove("hidden");
  document.getElementById("fortune-area").classList.remove("hidden");
  document.getElementById("polaroid-board").classList.remove("hidden");
  document.getElementById("teapot-icon").classList.remove("hidden");
}

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

// Easter egg reveal
document.getElementById("teapot-icon").addEventListener("click", () => {
  document.getElementById("easter-egg").classList.remove("hidden");
});
