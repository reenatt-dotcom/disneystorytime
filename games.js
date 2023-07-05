// Trivia Game
const triviaQuestions = [
    {
      question: "Which Disney princess has a pet tiger named Rajah?",
      options: ["Cinderella", "Jasmine", "Belle", "Aurora"],
      answerIndex: 1,
    },
    {
      question: "In the movie 'Finding Nemo', what kind of fish is Nemo?",
      options: ["Clownfish", "Angelfish", "Guppy", "Pufferfish"],
      answerIndex: 0,
    },
    {
      question: "Which Disney movie features the song 'Let It Go'?",
      options: ["Moana", "Frozen", "Tangled", "The Little Mermaid"],
      answerIndex: 1,
    },
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const triviaQuestionElement = document.getElementById("trivia-question");
  const triviaOptionsElement = document.getElementById("trivia-options");
  const triviaResultElement = document.getElementById("trivia-result");
  const triviaNextButton = document.getElementById("trivia-next");
  const triviaScoreElement = document.getElementById("trivia-score");
  
  triviaNextButton.addEventListener("click", showNextTriviaQuestion);
  
  function showNextTriviaQuestion() {
    if (currentQuestionIndex >= triviaQuestions.length) {
      endTriviaGame();
      return;
    }
  
    const currentQuestion = triviaQuestions[currentQuestionIndex];
  
    triviaQuestionElement.textContent = currentQuestion.question;
  
    triviaOptionsElement.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
      const optionButton = document.createElement("button");
      optionButton.textContent = option;
      optionButton.addEventListener("click", () => {
        checkTriviaAnswer(index);
      });
      triviaOptionsElement.appendChild(optionButton);
    });
  
    triviaResultElement.textContent = "";
    triviaNextButton.disabled = true;
  
    updateScore();
  
    currentQuestionIndex++;
  }
  
  function checkTriviaAnswer(selectedOptionIndex) {
    const currentQuestion = triviaQuestions[currentQuestionIndex - 1];
  
    if (selectedOptionIndex === currentQuestion.answerIndex) {
      score++;
      triviaResultElement.textContent = "Correct!";
      triviaResultElement.style.color = "green";
    } else {
      triviaResultElement.textContent = "Incorrect!";
      triviaResultElement.style.color = "red";
    }
  
    triviaNextButton.disabled = false;
    updateScore();
  }
  
  function endTriviaGame() {
    triviaQuestionElement.textContent = "Trivia Game Ended";
    triviaOptionsElement.innerHTML = "";
    triviaResultElement.textContent = "";
    triviaNextButton.disabled = true;
  }
  
  function updateScore() {
    triviaScoreElement.textContent = "Score: " + score;
  }
  
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
    "buzzlightyear",
    "woody",
  ];
  
  let currentWordIndex;
  let scrambledWord;
  const scrambledWordElement = document.getElementById("scrambled-word");
  const guessInput = document.getElementById("guess-input");
  const guessButton = document.getElementById("guess-button");
  const resultElement = document.getElementById("result");
  
  guessButton.addEventListener("click", handleGuess);
  
  function initializeWordScrambleGame() {
    currentWordIndex = Math.floor(Math.random() * disneyWords.length);
    scrambledWord = scrambleWord(disneyWords[currentWordIndex]);
    scrambledWordElement.textContent = scrambledWord;
    guessInput.value = "";
    resultElement.textContent = "";
  }
  
  function scrambleWord(word) {
    const characters = word.split("");
    for (let i = characters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [characters[i], characters[j]] = [characters[j], characters[i]];
    }
    return characters.join("");
  }
  
  function handleGuess() {
    const guess = guessInput.value.trim().toLowerCase();
    if (guess === disneyWords[currentWordIndex]) {
      resultElement.textContent = "Correct! You guessed the word.";
      resultElement.style.color = "green";
      initializeWordScrambleGame();
    } else {
      resultElement.textContent = "Incorrect guess. Try again.";
      resultElement.style.color = "red";
    }
  }
  
  initializeWordScrambleGame();
  