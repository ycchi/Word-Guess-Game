// THEME: Philadelphia Eagles
// store elements (pre-selected) in an array/object?
// Randomly pick an element from array/object
// count letter length and generate blank spaces
// if the letter matches fill in the blank
// if no match, push the letter to incorrect array


/* Bootstrap Responsive Design. Playable on Mobile.
   Color Pallette: Black, Midnight Green, White
   Fonts: 
   Layout: 
*/

/* Value to display:
   Wins
   Guesses Remaining
   Letters already Guessed
   */

/* QUESTIONS!!!!!!!
// Ways to store image links as a value in object? 
// Object literal
   case sensitivity
*/

/* Database Structure
   array of objects

*/


///////// Setting Variables

var eaglesArr = [
  {
    name: "brian dawkins",
    profileImg: "philadelphiaeagles.com/players/dawkins.jpg"
  },
  {
    name: "nick foles",
    profileImg: "philadelphiaeagles.com/players/foles.jpg"
  },
  {
    name: "brandon graham",
    profileImg: "phillyspecial.jpg"
  },
  {
    name: "doug pederson",
    profileImg: "phillyspecial.jpg"
  }
]

// win counter & lose counter
var winCounter = 0;
var loseCounter = 0;
var guessesRemaining = 10;


//container for incorrect guesses
var incorrectArr = [];

// randomly select a letter from eaglesArr and store name value in a variable.
var randomPick = "";

var blankSpace = [];


// Start/Reset Game
function newGame() {
  //randomPick reset
  randomPick = eaglesArr[Math.floor(Math.random() * eaglesArr.length)]["name"];

  //blankSpace reset according to the length of randomPick
  blankSpace = [];
  for (var i = 0; i < randomPick.length; i++){
    blankSpace.push("_")
  }

  // Reset guessesRemaining
  guessesRemaining = 10;

  //incorrectArr reset
  incorrectArr = [];

  //alert user
  alert("New Game!")
}




// Helper function to acquire indexes of same letter occurance.
function getAllIndexes(string, val) {
  var indexes = [], i;
  for(i = 0; i < string.length; i++)
      if (string[i] === val)
          indexes.push(i);
  return indexes;
}

// TEST OK
//console.log("helperfuncTest: " + getAllIndexes("apple", "p"));



// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

  // store the user pressed key in a variable
  var userGuess = event.key;
  console.log("userGuess: " + userGuess);  
  console.log("randomPick: " + randomPick);

  var matchingIndex = getAllIndexes(randomPick, userGuess);
  console.log("matchingIndex: " + matchingIndex);

  // Push incorrect userGuess to incorrectArr
  if (matchingIndex.length === 0 && !incorrectArr.includes(userGuess)) {
    console.log("no match!")

    incorrectArr.push(userGuess);
    guessesRemaining--;
    
  }

  console.log("incorrectArr: " + incorrectArr)

  
  for (var i = 0; i < matchingIndex.length; i ++){
    blankSpace[matchingIndex[i]] = userGuess;
  }
  
  console.log("blankSpace: " + blankSpace);

  // Join elements in an array to create a string blankSpaceJoined
  var blankSpaceJoined = blankSpace.join("")
  var blankSpaceJoinedDisplay = blankSpace.join(" ")
  console.log("join: " + blankSpaceJoined);


  
  
  //when guessesRemaining reaches 0, loseCounter increment by 1
  if (guessesRemaining === 0) {
    loseCounter++;
    alert("You Lose!")
    newGame();
  }


  //compare blankSpaceJoined to randomPick
  if (blankSpaceJoined === randomPick) {
    winCounter++;
    alert("You Win!")
    newGame();
  }
  
 
console.log("wins: " + winCounter);
console.log("Loses: " + loseCounter);
console.log("Guesses Remaining: " + guessesRemaining);
console.log("Incorrect Letters: " + incorrectArr);

  



  var $blankSpace = document.getElementById("blankSpace")
  $blankSpace.textContent = blankSpaceJoinedDisplay;


  var $wins = document.getElementById("wins")
  $wins.textContent = winCounter;

  var $losses = document.getElementById("losses")
  $losses.textContent = loseCounter;

  var $lettersUsed = document.getElementById("lettersUsed")
  $lettersUsed.textContent = incorrectArr;

  var $guessesRemaining = document.getElementById("guessesRemaining")
  $guessesRemaining.textContent = guessesRemaining;


}





newGame();

//console.log("After newGame: " + randomPick);


  // if (userGuess === randomPick[i]) {
  //   blankSpace.splice(i,1,userGuess)
  //   console.log(blankSpace)
  // } else {
  //   incorrectArr.push(userGuess)
  // }

  // map()
  // inner function

  

  

  
  // console.log(incorrectArr);




  // console.log(getAllIndexes(randomPick, userGuess))


