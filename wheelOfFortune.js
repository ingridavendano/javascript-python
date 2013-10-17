// gobal variables
var word = [];
var foundLetters = [];
var guessedLetters = [];
var numOfLettersToGuess = 0;
var win = false;
var sum = 0;


// checks whether a letter is actually just punctuation
function checkPunctuation(x) {
    if (x=="." || x=="!" || x=="'" || x=="-" || x=="?" || x==" " || x==",") {
		return true; 
	}
	return false;
}


// put blanks in for the word needed to be guessed
function phraseToGuess(str) {
	for (var i=0; i<str.length; i++) {
		word.push(str[i]);
	}

	// put blanks in for the word needed to be guessed
	for (i=0; i<word.length; i++) {

		// user does not have to guess for punctuation
		if (checkPunctuation(word[i])) {
			foundLetters.push(word[i]);
		} else {
			foundLetters.push("_");
			numOfLettersToGuess++;
		}
	}
}


// checks whether or not to play the game at the beginning
function continueGame(letter) {
	if (win) {
		console.log("Game over, you won remember!");
		return false;
	}
	return checkForLetter(letter);
}


// determines whether a letter has been guessed already or not
function checkForLetter(letter) {
	for (var i=0; i<guessedLetters.length; i++) {
		if (letter.toLowerCase() == guessedLetters[i]) {
			console.log("You've already tried the letter '" + letter + "' - try again!");
			return false;
		}
	}

	// makes sure no punctuation is added
	if (!checkPunctuation(letter)) {
		guessedLetters.push(letter.toLowerCase());
	}
	return true;
}


// allows the user to guess but checks if the user is allowed to play
function guessLetter(letter) {
	if (continueGame(letter)) {
		var dollarValue = Math.floor(Math.random()*1001);
		var hasLetter = false;
        
		// goes through a phase to find letters (or not)
		for (i=0; i < word.length; i++) {
            if (letter.toLowerCase() == word[i].toLowerCase()) {
                hasLetter = true;
                numOfLettersToGuess--;
                sum += dollarValue;

                // set to word[i] just in case of capitalization
                foundLetters[i] = word[i];
                console.log("Congratulations you found a letter! And made $" + dollarValue + "!");
            }
        }
        
        // lose money if you guessed wrong
        if (!hasLetter) {
            sum -= dollarValue;
            console.log("Nope, sorry you guessed wrong this time. You lose $" + dollarValue + "!");
        }

        // print current results
        console.log(foundLetters);

        // checks to see if user won or lost
        if (numOfLettersToGuess === 0) {
            win = true;
            console.log("You win! You solved the phrase!");
            console.log("The total amount of money you made was: $"+sum);
        }
	}
}

// start wheel of fortune game
console.log("Welcome to the game of Wheel of Fortune!");

// phraseToGuess("Hello, kitty!");
// guessLetter('y');
// guessLetter('u');
// guessLetter('h');
