const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
      //console.log secretNum to help troubleshoot
      console.log(this.secretNum)
      // while loop to add player guess to prevGuess
       while (this.prevGuesses[this.prevGuesses.length - 1] !== this.secretNum) {
         this.prevGuesses.push(this.getGuess())
         console.log(this.prevGuesses)
         this.render()};
      ;
  },
  // getGuess - do/while loop to provide player a prompt to submit guess until they guess correctly
  getGuess: function (){
    let guess = null;
    // the do will give the player the prompt
    while (guess === NaN || guess > this.biggestNum || guess < this.smallestNum){
      guess = parseInt(
        prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}. Good luck!`)
      )
    }
    // the while loop will set the condition for the loop to end (when guess = secretNum)
   
      return guess;
  },
  // function to alert depending on outcome of the guess
  render: function () {
      if (this.prevGuesses[this.prevGuesses.length - 1] === this.secretNum) {
        alert(`Congratulations, ${this.secretNum} was the correct number! It took you ${this.prevGuesses.length} tries to pick the correct number.`)
      }
      if (this.prevGuesses[this.prevGuesses.length - 1] < this.secretNum) {
        alert(`Too low, guess again! You're previous guesses are ${this.prevGuesses}.`)
      } 
     if (this.prevGuesses[this.prevGuesses.length - 1] > this.secretNum) {
        alert(`Too high, guess again! You're previous guesses are ${this.prevGuesses}.`)
      }
  },
  
}


game.play()



