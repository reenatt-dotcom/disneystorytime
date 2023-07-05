// Word Scramble Game
const disneyWords = [
    "mickey",
    "minnie",
    "donald",
    "goofy",
    "pluto",
    "ariel",
    "belle",
    "cinderella",
    "buzz lightyear",
    "woody",
  ];
  
  let currentWordIndex;
  let wordScrambleScore = 0;
  const scrambledWordElement = document.getElementById("scrambled-word");
  const guessInput = document.getElementById("guess-input");
  const guessButton = document.getElementById("guess-button");
  const resultElement = document.getElementById("result");
  
  guessButton.addEventListener("click", handleGuess);
  
  function initializeWordScrambleGame() {
    currentWordIndex = Math.floor(Math.random() * disneyWords.length);
    const word = disneyWords[currentWordIndex];
    const scrambledWord = scrambleWord(word);
    scrambledWordElement.textContent = scrambledWord;
  }
  
  function scrambleWord(word) {
    const letters = word.split("");
    for (let i = letters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [letters[i], letters[j]] = [letters[j], letters[i]];
    }
    return letters.join("");
  }
  
  function handleGuess() {
    const guess = guessInput.value.toLowerCase().trim();
    const currentWord = disneyWords[currentWordIndex];
    
    if (guess === currentWord) {
      wordScrambleScore++;
      resultElement.textContent = "Correct!";
      resultElement.style.color = "green";
    } else {
      resultElement.textContent = "Incorrect!";
      resultElement.style.color = "red";
    }
  
    guessInput.value = "";
    updateScore();
    initializeWordScrambleGame();
  }
  
  function updateScore() {
    const scoreElement = document.getElementById("wordscramble-score");
    scoreElement.textContent = "Word Scramble Score: " + wordScrambleScore;
  }
  
  initializeWordScrambleGame();
  