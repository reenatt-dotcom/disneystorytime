// Store the story data
const storyData = [
    {
      content: "Once upon a time, in a magical kingdom...",
      choices: [
        {
          text: "Go on an adventure",
          destination: 1,
        },
        {
          text: "Stay home",
          destination: 2,
        },
      ],
    },
    {
      content: "You embarked on a thrilling quest through enchanted forests...",
      choices: [
        {
          text: "Search for treasure",
          destination: 3,
        },
        {
          text: "Rescue a friend",
          destination: 4,
        },
      ],
    },
    {
      content: "You decided to stay home and enjoy a peaceful day...",
      choices: [
        {
          text: "Read a book",
          destination: 5,
        },
        {
          text: "Take a nap",
          destination: 6,
        },
      ],
    },
    {
      content: "You discovered a hidden treasure chest filled with gold and jewels!",
      choices: [
        {
          text: "Share the treasure",
          destination: 7,
        },
        {
          text: "Keep the treasure",
          destination: 8,
        },
      ],
    },
    {
      content: "You rescued your friend from the clutches of an evil sorcerer!",
      choices: [
        {
          text: "Celebrate the victory",
          destination: 9,
        },
        {
          text: "Plan the next adventure",
          destination: 10,
        },
      ],
    },
    {
      content: "You enjoyed a quiet day reading your favorite book.",
      choices: [
        {
          text: "Continue reading",
          destination: 11,
        },
        {
          text: "Explore new stories",
          destination: 12,
        },
      ],
    },
    {
      content: "You took a refreshing nap and woke up feeling energized!",
      choices: [
        {
          text: "Go for a walk",
          destination: 13,
        },
        {
          text: "Have a snack",
          destination: 14,
        },
      ],
    },
    {
      content: "You shared the treasure with your friends and brought joy to everyone!",
      choices: [
        {
          text: "Live happily ever after",
          destination: -1,
        },
      ],
    },
    {
      content: "You decided to keep the treasure for yourself and became rich!",
      choices: [
        {
          text: "Reflect on your choices",
          destination: -1,
        },
      ],
    },
    {
      content: "You celebrated the victory with your friend and created lifelong memories!",
      choices: [
        {
          text: "Embark on new adventures",
          destination: -1,
        },
      ],
    },
    {
      content: "You started planning your next adventure and couldn't wait to explore!",
      choices: [
        {
          text: "Dream big",
          destination: -1,
        },
      ],
    },
    {
      content: "You continued reading and immersed yourself in captivating stories.",
      choices: [
        {
          text: "Discover new worlds",
          destination: -1,
        },
      ],
    },
    {
      content: "You explored new stories and found inspiration in every page.",
      choices: [
        {
          text: "Create your own story",
          destination: -1,
        },
      ],
    },
    {
      content: "You went for a walk and enjoyed the beauty of nature.",
      choices: [
        {
          text: "Appreciate the little things",
          destination: -1,
        },
      ],
    },
    {
      content: "You had a delicious snack and savored every bite.",
      choices: [
        {
          text: "Indulge in simple pleasures",
          destination: -1,
        },
      ],
    },
  ];
  
  // Get HTML elements
  const startButton = document.getElementById("start-button");
  const storyContent = document.getElementById("story-content");
  const choicesContainer = document.getElementById("choices");
  
  // Add event listener to start button
  startButton.addEventListener("click", startStory);
  
  // Function to start the story
  function startStory() {
    startButton.style.display = "none"; // Hide the start button
  
    // Generate story content and choices dynamically
    let currentStep = 0;
    generateStoryStep(currentStep);
  }
  
  // Function to generate the story step dynamically
  function generateStoryStep(stepIndex) {
    // Get the current step from the story data
    const step = storyData[stepIndex];
  
    // Set the story content
    storyContent.textContent = step.content;
  
    // Clear the choices container
    choicesContainer.innerHTML = "";
  
    // Generate and append the choices dynamically
    step.choices.forEach((choice) => {
      const choiceButton = document.createElement("button");
      choiceButton.textContent = choice.text;
      choiceButton.addEventListener("click", () => handleChoice(choice.destination));
      choicesContainer.appendChild(choiceButton);
    });
  }
  
  // Function to handle the user's choice
  function handleChoice(destination) {
    if (destination === -1) {
      // End of the story
      storyContent.textContent = "The End";
      choicesContainer.innerHTML = "";
    } else {
      // Continue the story
      generateStoryStep(destination);
    }
  }
  