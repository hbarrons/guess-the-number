const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
      console.log(this.secretNum)
      // do/while loop to add player guess to prevGuess
      do {
        this.prevGuesses.unshift(this.getGuess());
        console.log(this.getGuess());
    
        console.log(this.prevGuesses)
        this.render()
      } while (
        this.prevGuesses[this.prevGuesses.length - 1] !== this.secretNum
      );
      console.log(this.secretNum)
  },
  // getGuess - do/while loop to provide player a prompt to submit guess until they guess correctly
  getGuess: function (){
    let guess = null;
    // the do will give the player the prompt
    do {
      guess = parseInt(
        prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}. Good luck!`)
      );
    }
    // the while loop will set the condition for the loop to end (when guess = secretNum)
    while (
      guess === NaN,
      guess !== this.secretNum
      );
      return guess;
  },
  // function to alert depending on outcome of the guess
  render: function () {
    let guessOutcome = null
    if (this.prevGuesses[this.prevGuesses.length - 1] === secretNum) {
      guessOutcome = `Congratulations! ${this.secretNum} was the correct number! It took you ${this.prevGuesses.length} tries to pick the correct number.`
    } else if (this.prevGuesses[this.prevGuesses.length - 1] < this.secretNum) {
      guessOutcome = `Too low, guess again! The number is between ${this.prevGuesses[0]} and ${this.biggestNum}`
    } else {
      guessOutcome = `Too high, guess again! The number is between ${this.biggestNum} and ${this.prevGuesses[0]}.`
    }
    alert(guessOutcome)
  },
  
}


game.play()

