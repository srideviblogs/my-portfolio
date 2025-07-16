const phrases = [
  "DevOps Engineer",
  "Cloud Enthusiast",
  "Open Source Contributor"
];

let i = 0; // Index of phrase
let j = 0; // Index of character
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;

const typingElement = document.getElementById('typing-text');

function loop() {
  isEnd = false;
  typingElement.innerHTML = currentPhrase.join('');

  if (i < phrases.length) {
    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
      typingElement.innerHTML = currentPhrase.join('');
    }

    if (isDeleting && j <= phrases[i].length) {
      currentPhrase.pop();
      j--;
      typingElement.innerHTML = currentPhrase.join('');
    }

    if (j === phrases[i].length) {
      isEnd = true;
      isDeleting = true;
    }

    if (isDeleting && j === 0) {
      currentPhrase = [];
      isDeleting = false;
      i++;
      if (i === phrases.length) {
        i = 0;
      }
    }
  }

  const spedUp = Math.random() * (80 - 50) + 50;
  const normalSpeed = Math.random() * (300 - 200) + 200;
  const time = isEnd ? 1000 : isDeleting ? spedUp : normalSpeed;
  setTimeout(loop, time);
}

loop();
