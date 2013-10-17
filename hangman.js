// gobal variables
var word = [];
var foundLetters = [];
var guessedLetters = [];
var numOfLettersToGuess = 0;
var win = false;
var tries = 0;

// prints the hangman
function hangman() {
    console.log("\t_________\n\t|\t|");
    switch (tries) {
    	case 0:
			console.log("\t|\n\t|\n\t|\n\t|");
			break;
		case 1:
            console.log("\t|\t@\n\t|\n\t|\n\t|");
			break;
        case 2:
            console.log("\t|\t@\n\t|\t|\n\t|\t|\n\t|");
            break;
        case 3:
            console.log("\t|\t@\n\t|      \\|\n\t|\t|\n\t|");
            break;
        case 4:
            console.log("\t|\t@\n\t|      \\|/\n\t|\t|\n\t|");
            break;
        case 5:
            console.log("\t|\t@\n\t|      \\|/\n\t|\t|\n\t|      /");
            break;
        case 6:
            console.log("\t|\t@\n\t|      \\|/\n\t|\t|\n\t|      / \\");
	}
	console.log("________|________");
	console.log(foundLetters);
}


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
	if (tries > 7) {
		console.log("Game over, you lost. No more tries to play.");
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
		var hasLetter = false;

		// goes through a phase to find letters (or not)
		for (i=0; i < word.length; i++) {
            if (letter.toLowerCase() == word[i].toLowerCase()) {
                hasLetter = true;
                numOfLettersToGuess--;
                foundLetters[i] = word[i];
                console.log("Congratulations you found a letter!");
            }
        }

        // increments the number of tries if letter guessed is wrong
        if (!hasLetter) {
            console.log("Nope, sorry you guessed wrong this time.");
            tries++;
        }

        hangman();

        // checks to see if user won or lost
        if (numOfLettersToGuess === 0) {
            win = true;
            console.log("YOU WON!");
        } else if (tries == 6) {
            console.log("YOU LOSE!");
        }
	}
}

// start hangman game
console.log("Welcome to the game of hangman!");

// phraseToGuess("Hello, kitty!");
// guessLetter('y');
// guessLetter('u');
// guessLetter('h');
