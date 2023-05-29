const movingWord = document.getElementById('cont');
let position = 0;
let direction = 1;

function moveWord() {
  position += 5 * direction;
  movingWord.style.left = position + 'px';

  if (position >= 300 || position <= 0) {
    direction *= -1;
  }
}

setInterval(moveWord, 50);
  