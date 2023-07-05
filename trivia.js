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
  let triviaScore = 0; // Separate score for trivia game
  
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
  
    updateTriviaScore(); // Update the trivia score separately
  
    currentQuestionIndex++;
  }
  
  function checkTriviaAnswer(selectedOptionIndex) {
    const currentQuestion = triviaQuestions[currentQuestionIndex - 1];
  
    if (selectedOptionIndex === currentQuestion.answerIndex) {
      triviaScore++; // Increment the trivia score by 1
      triviaResultElement.textContent = "Correct!";
      triviaResultElement.style.color = "green";
    } else {
      triviaResultElement.textContent = "Incorrect!";
      triviaResultElement.style.color = "red";
    }
  
    triviaNextButton.disabled = false;
    updateTriviaScore(); // Update the trivia score separately
  }
  
  function endTriviaGame() {
    triviaQuestionElement.textContent = "Trivia Game Ended";
    triviaOptionsElement.innerHTML = "";
    triviaResultElement.textContent = "";
    triviaNextButton.disabled = true;
  }
  
  function updateTriviaScore() {
    triviaScoreElement.textContent = "Trivia Score: " + triviaScore;
  }
  