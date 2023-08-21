function playGuessingGame(numToGuess, totalGuesses = 10) {
    let guesses = 0;
    let promptText = "Enter a number between 1 and 100.";
  
    while (guesses < totalGuesses) {
      const userGuess = prompt(promptText);
      
      if (userGuess === null) {
        return 0;
      }
  
      if (userGuess === "" || isNaN(userGuess)) {
        promptText = "Please enter a number.";
        continue;
      }
  
      const parsedGuess = parseInt(userGuess, 10);
      guesses++;
  
      if (parsedGuess < numToGuess) {
        promptText = `${parsedGuess} is too small. Guess a larger number.`;
      } else if (parsedGuess > numToGuess) {
        promptText = `${parsedGuess} is too large. Guess a smaller number.`;
      } else {
        return guesses;
      }
    }
  
    return 0;
  }
  
  const numToGuess = 5;
  const totalGuesses = 10;
  const result = playGuessingGame(numToGuess, totalGuesses);
  
  if (result === 0) {
    console.log("You couldn't guess the number within the allowed guesses.");
  } else {
    console.log(`You guessed the number ${numToGuess} in ${result} guesses.`);
  }
  