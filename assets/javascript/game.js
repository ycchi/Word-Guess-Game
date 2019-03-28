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
    name: "briandawkins",
    profileImg: "philadelphiaeagles.com/players/dawkins.jpg"
  },
  {
    name: "nickfoles",
    profileImg: "philadelphiaeagles.com/players/foles.jpg"
  },
  {
    name: "phillyphilly",
    profileImg: "phillyspecial.jpg"
  },
  {
    name: "dougpederson",
    profileImg: "phillyspecial.jpg"
  }
]

// win counter & lose counter
var winCounter = 0;
var loseCounter = 0;


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
  for (var i = 0; i < randomPick.length; i++){
    blankSpace.push("_")
  }


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
  console.log(matchingIndex);
  
  for (var i = 0; i < matchingIndex.length; i ++){
    blankSpace[matchingIndex[i]] = userGuess;
  }
  

  console.log("blankSpace: " + blankSpace);

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


