// GLOBAL VARIABLES//

// gem variables//

var crystal = {
    blue:
    {
        name : "Blue",
        value : 0
    },
    green:
    {
        name : "Green",
        value : 0
    },
    red:
    {
        name : "Red",
        value : 0
    },
    yellow:
    {
        name : "Yellow",
        value : 0
    }
};

// Track current scores and values//
var currentScore = 0;
var targetScore = 0;

// Track wins and losses//
var winCounter = 0;
var lossCounter = 0;
  

// FUNCTIONS//

// Helper functions

var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Starts the game and restarts the game

var startGame = function() {

// Reset the current score  
currentScore = 0;
// Set a new Target Score
targetScore = getRandom(19, 80);



// Set different values for each of the crystals ( between 1 and 10)
crystal.blue.value      =getRandom(1,10);
crystal.green.value     =getRandom(1,10);
crystal.red.value       =getRandom(1,10);
crystal.yellow.value    =getRandom(1,10);

// Change the HTML to reflect all of the changes

$("#targetScore").html(targetScore);
$("#yourScore").html(currentScore);


}





// Respond to clicks on the crystals
var addValues = function(crystal){

 // Change currentScore      
 currentScore = currentScore + crystal.value;

 $("#yourScore").html(currentScore);

// Call checkWin function
    checkWin();

 
    console.log("Your score " + currentScore);


}
// Check if user won or lost and reset the game
var checkWin = function(){
    // Check if userScore is larger than targetScore
    if(currentScore > targetScore){
        alert("Sorry. You lost!");
        console.log("You lost!");

        // Add to loss counter
        lossCounter++;

         // Change loss count in HTML
        $("#lossCounter").html(lossCounter);

        // Restart game
        startGame();
    }
    else if (currentScore == targetScore) {
        alert("Congratulations! You Won!");
        console.log("You won!");

         // Add to win counter

         winCounter++;
         // Change win count in HTML
         $("#winCounter").html(winCounter);

         // Restart game
        startGame();
    }
}

// MAIN PROCESS//

$("#blue").click(function() {
    
    addValues(crystal.blue);
    // alert("test");
});
$("#green").click(function() {
    addValues(crystal.green);
    // alert("test");
});
$("#red").click(function() {
    addValues(crystal.red);
    // alert("test");
});
$("#yellow").click(function() {
    addValues(crystal.yellow);
    // alert("test");
});




// Starts the game the first time
startGame();


console.log("******************************");
console.log("Target score: " + targetScore);
console.log("Blue: " + crystal.blue.value  + "| Green: " + crystal.green.value + "| Red: " + crystal.red.value +  "| Yellow: " + crystal.yellow.value);
console.log("******************************");
