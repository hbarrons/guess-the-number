// 1. Allow the player to continually be prompted to enter their guess at the secret number until they guess correctly.
// 2. If the player has an incorrect guess, display an alert message that informs the player:
//     - Whether their guess is too high or too low, and…
//     - A list of all the previously guessed numbers (without showing the square brackets of an array).
// 3. If the player has guessed the secret number:
//     - Display an alert message that congrats the player and informs them of how many guesses they took.
//     - End the gameplay.

const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
  },
  getGuess: function (){
    let guess = null
    // the do will give the player the prompt
    do {
      guess = parseInt(
        prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}. Good luck!`)
      )
    }
    // the while loop will set the condition for the loop to end (when guess = secretNum)
    while (
      guess === NaN,
      guess !== this.secretNum
      );
  },
  //function to alert depending on outcome of the guess
  render: function (guess) {
    if (guess === secretNum) {
      return `Congratulations! ${this.secretNum} was the correct number! It took you ${this.prevGuesses.length} tries to pick the correct number.`
    } else if (guess < this.secretNum) {
      return `Too low, guess again! The number is between ${this.prevGuesses[0]} and ${this.biggestNum}`
    } else {
      return `Too high, guess again! The number is between ${this.biggestNum} and ${this.prevGuesses[0]}.`
    }
  }
}





