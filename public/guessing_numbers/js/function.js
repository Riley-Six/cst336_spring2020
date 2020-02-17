var numberToGuess = Math.floor(Math.random()*99) + 1;
var guesses = document.querySelector("#guesses");
var lastResult = document.querySelector("#lastResult");
var lowOrHi = document.querySelector("#lowOrHi");
var guessSubmit = document.querySelector(".guessSubmit");
var guessField = document.querySelector(".guessField");
var guessCount = 1;
var resetButton = document.querySelector("#reset");
resetButton.style.display = 'none';

var wins = 0;
var losses = 0;

function checkGuess(){
    var userGuess = Number(guessField.value);
    
    if ( isNaN(userGuess) ){
        alert('Enter a number please.');
        return;
    }
    
    if ( userGuess > 99 || userGuess < 1 ){
        alert('1 - 99 ONLY!!!');
        return;
    }
    
    
    if ( guessCount === 1 ){
        guesses.innerHTML = 'Previous guesses: ';
    }
    guesses.innerHTML += userGuess + ' ';
    
    if ( userGuess === numberToGuess ){
        lastResult.innerHTML = 'Congratulations! You got it right!';
        wins += 1;
        lastResult.style.backgroundColor = 'green';
        lowOrHi.innerHTML = '';
        setGameOver();
    } else if ( guessCount === 7 ){
        lastResult.innerHTML = 'Sorry, you lost!';
        losses += 1;
        setGameOver();
    }
    else {
        lastResult.innerHTML = 'Wrong!';
        lastResult.style.backgroundColor = 'red';
        if ( userGuess < numberToGuess ){
            lowOrHi.innerHTML = 'Last guess was too low!';
        }else if ( userGuess > numberToGuess ){
            lowOrHi.innerHTML = 'Last guess was too high!';
        }
    }
    guessCount++;
    guessField.value = '';
    guessField.focus();
}
guessSubmit.addEventListener('click', checkGuess);

function setRecords(){
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("totalGames").innerHTML = wins + losses;
}

function setGameOver(){
    setRecords();
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton.style.display = 'inline';
    resetButton.addEventListener('click', resetGame);
}

function resetGame(){
    guessCount = 0;
    var resetParas = document.querySelectorAll('.resultParas p');
    for ( var i = 0; i < resetParas.length; i++ ){
        resetParas[i].textContent = '';
    }
        guesses.innerHTML = '';
        lastResult.innerHTML = '';
        lowOrHi.innerHTML = '';
    resetButton.style.display = 'none';
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
    lastResult.style.backgroundColor = 'white';
    randomNumber = Math.floor(Math.random() * 99) + 1;
}
