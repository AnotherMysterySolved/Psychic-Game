
var letterList = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

var chosenLetter = "";
var wrongGuesses = [];
var winCounter = 0;
var lossCounter = 0; //1
var numGuesses = 9;
var letterGuessed = "";
var user_guessed = [];

//function startGame(){
//Computer picks sectret letter
chosenLetter = letterList[Math.floor(Math.random() * letterList.length)];
console.log(chosenLetter);

//we make our guess
document.onkeyup = function(event){
var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
console.log("Our Guess:", letterGuessed);


//add to document
    document.getElementById("loss-counter").innerHTML = lossCounter;
    document.getElementById("guesses-left").innerHTML = numGuesses;


    user_guessed.push(" " + letterGuessed);
    document.getElementById("wrong-guesses").innerHTML = user_guessed;

//Results & Reset
    if (letterGuessed == chosenLetter) {
        winCounter++;
        console.log("winCounter : " + winCounter);
        document.getElementById("win-counter").innerHTML = winCounter;
        alert("You really are Psychic!");
        console.log("NEW GAME");
        user_guessed = [];
        document.getElementById("wrong-guesses").innerHTML = user_guessed;
        var letterList = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
        chosenLetter = letterList[Math.floor(Math.random() * letterList.length)];
        console.log(chosenLetter);
     
        } 
  
    else {

        numGuesses--;   

        if (numGuesses === -1) {
            alert("Better luck next time!");
            lossCounter++;                   
            numGuesses = 9;

            console.log("NEW GAME");
            user_guessed = [];
            document.getElementById("wrong-guesses").innerHTML = user_guessed;
            var letterList = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
            chosenLetter = letterList[Math.floor(Math.random() * letterList.length)];
            console.log(chosenLetter);
            }    
    }
    }
