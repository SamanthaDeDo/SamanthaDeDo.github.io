// The users choice

function makeRock() {

document.getElementById("btn").src = "Pics/rock.png";
document.getElementById("btn").style.display = "block";
document.getElementById("player").style.display = "none";
document.getElementById("leroyP").style.display = "none";
timeOut ()
}

function makePaper() {
 
document.getElementById("btn").src = "Pics/paper.png"
document.getElementById("btn").style.display = "block";
document.getElementById("player").style.display = "none";
document.getElementById("leroyP").style.display = "none";
timeOut ()
}
 

function makeScissor(){

document.getElementById("btn").src = "Pics/scissor.png"
document.getElementById("btn").style.display = "block";
document.getElementById("player").style.display = "none";
document.getElementById("leroyP").style.display = "none";
timeOut ()
}


// User and computer choice display

var computerChoiceDisplay = document.getElementById('computer-choice');
var userChoiceDisplay = document.getElementById('user-choice');
var resultsDisplay = document.getElementById('results');
var possibleChoices = document.querySelectorAll('button');

let userChoice
let timer
let result



// Generate computer choice

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id
    // userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    // getResult()
    // timer()
    changeColor()
   
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1


    if (randomNumber === 1){
        computerChoice = 'rock'
        }

    if (randomNumber === 2){
        computerChoice = 'scissors'
    }

    if (randomNumber === 3){
        computerChoice = 'paper'
    }

    if (computerChoice == "rock") {

    document.getElementById("leroyP").src = "Pics/rock.png"
    document.getElementById("leroyP").style.display = "block"

    }

    else if (computerChoice == "paper") {

    document.getElementById("leroyP").src = "Pics/paper.png"
    document.getElementById("leroyP").style.display = "block"

    }

    else if (computerChoice == "scissors") {

    document.getElementById("leroyP").src = "Pics/scissor.png"
    document.getElementById("leroyP").style.display = "block"

    }

    // computerChoiceDisplay.innerHTML = computerChoice

}


// Count down timer / get results setTimeout

 var timeInSeconds = 0;
 var totalTime = 4;


function timeOut () {

// countdown thingy 3,2,1....


setInterval (countDown, 1000);

function countDown() {

    totalTime = totalTime -1;

    document.getElementById("countDown").innerHTML = totalTime;

    if (totalTime <= 0) {

        totalTime = 0;
        document.getElementById("countDown").innerHTML = "BATTLE"
    }
}

    setTimeout (getResult, 3400);
   
}


// Get results 

function getResult() { 
   

    if (computerChoice === userChoice) {
        result = 'Its a draw!'
    }

    if (computerChoice === 'rock' && userChoice === "paper") {
    result = 'You Win!';
    document.getElementById("results").style.changeColor = "green";
    }

    if (computerChoice === 'rock' && userChoice === "scissor") {
    result = 'You Lose!'
    }

    if (computerChoice === 'paper' && userChoice === "scissor") {
    result = 'You Win!';
    document.getElementById("results").style.changeColor = "green";
    }

     if (computerChoice === 'paper' && userChoice === "rock") {
    result = 'You Lose!'
    }

    if (computerChoice === 'scissor' && userChoice === "rock") {
    result = 'You Win!';
    document.getElementById("results").style.changeColor = "green";
    }

    if (computerChoice === 'scissor' && userChoice === "paper") {
    result = 'You Lose!'

    }
    // strobe effect 
    setInterval(changeColor, 500)
    resultsDisplay.innerHTML = result;
}
 

// Strobe effect on results 

    var state = false; 

    function changeColor () {
        state =! state;

        if (state == false) {

            document.getElementById("results").style.color = "white";
        } else {

            document.getElementById("results").style.color = "red";
        }    
        
    }


// User name imput field 

let inputs = document.querySelectorAll("input")









