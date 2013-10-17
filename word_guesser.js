var word = ["F", "o", "x"];
var guessedLetters = [];
var reward = 0;
var oldReward = 0;
var hangman = 0;

function guessLetter(letter) {
    var dollarValue = Math.floor(Math.random()*1001);
    oldReward = reward;
    var run = true;

    for (var i=0; i < guessedLetters.length; i++) {
        if (letter == guessedLetters[i]) {
            run = false;
            console.log("You've already tried that letter.");
            break;
        }
    }

    if (run) {
        for (i=0; i < word.length; i++) {
            if (letter == word[i]) {
                guessedLetters.push(letter);
                reward = reward + dollarValue;
                console.log("Congratulations for finding a letter. That is $" + dollarValue + " for you to be cool.");
            }
        }

        if (oldReward == reward){
            reward = reward - dollarValue;
            hangman ++;
            switch (hangman) {
            	case 1:
	            	console.log("     _______\n     |     |\n     |     @\n     |\n     |\n     |\n_____|________");
	            	break;
            	case 2:
	            	console.log("     _______\n     |     |\n     |     @ \n     |     |\n     |     |\n     | \n_____|________");
	            	break;
            	case 3:
            		console.log("     _______\n     |     |\n     |     @ \n     |    \| \n     |     |\n     | \n_____|________");
            		break;
            	case 4:
            		console.log("     _______\n     |     |\n     |     @\n     |    \|/ \n     |     |\n     | \n_____|________");
            		break;
            	case 5:
            		console.log("     _______\n     |     |\n     |     @\n     |    \|/ \n     |     |\n     |    / \n_____|________");
            		break;
            	case 6:
            		console.log("     _______\n     |     |\n     |     @\n     |    \|/ \n     |     |\n     |    / \ \n_____|________");
            		break;
            }
            
            console.log("Sore times, looks like you're losing $" + dollarValue + " for sucking at life.");
        }

        if (word.length == guessedLetters.length) {
            console.log("Congrats you are baller and figured out how to spell a word. >_>");
            console.log("You won a total of $" + reward);
        } else if (hangman < 6) {
            console.log("Keep trying more letters to finish the word.");
        } else if (hangman == 6) {
            console.log("The hangman cometh.");
        }
    }
}



console.log("     _______\n     |     |\n     |\n     |\n     |\n     |\n_____|________");

guessLetter("F");
guessLetter("o");
guessLetter("x");
