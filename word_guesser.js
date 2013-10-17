var word = ["F", "o", "x", "!"];
var lettersGuessed = [];

// put blanks in for the word needed to be guessed
for (var i=0; i<word.length; i++) {
	var x = word[i];
	if (x=="." || x=="!" || x=="'" || x=="-" || x=="?") {
		lettersGuessed.push(word[i]);
	} else {
		lettersGuessed.push(" ");
	}
}

var reward = 0;
var oldReward = 0;
var hangman = 0;

function guessLetter(letter) {
    var dollarValue = Math.floor(Math.random()*1001);
    oldReward = reward;
    var run = true;

    for (var i=0; i < lettersGuessed.length; i++) {
        if (letter == lettersGuessed[i]) {
            run = false;
            console.log("You've already tried that letter.");
            break;
        }
    }

    if (run) {
        for (i=0; i < word.length; i++) {
            if (letter == word[i]) {
                lettersGuessed.push(letter);
                reward = reward + dollarValue;
                console.log("Congratulations for finding a letter. That is $" + dollarValue + " for you to be cool.");
            }
        }

        if (oldReward === reward){
            reward = reward - dollarValue;
            hangman ++;
            console.log("\t_________\n\t|\t|\n\t|\t@");
            switch (hangman) {
            	case 1:
	            	console.log("\t|\n\t|\n\t|");
					break;
            	case 2:
	            	console.log("\t|\t|\n\t|\t|\n\t|");
	            	break;
            	case 3:
            		console.log("\t|      \\|\n\t|\t|\n\t|");
            		break;
            	case 4:
            		console.log("\t|      \\|/\n\t|\t|\n\t|");
            		break;
            	case 5:
            		console.log("\t|      \\|/\n\t|\t|\n\t|      /");
            		break;
            	case 6:
            		console.log("\t|      \\|/\n\t|\t|\n\t|      / \\");
            		break;
            }
            console.log("________|________");
            
            console.log("Sore times, looks like you're losing $" + dollarValue + " for sucking at life.");
        }

        if (word.length == lettersGuessed.length) {
            console.log("Congrats you are baller and figured out how to spell a word. >_>");
            console.log("You won a total of $" + reward);
        } else if (hangman < 6) {
            console.log("Keep trying more letters to finish the word.");
        } else if (hangman == 6) {
            console.log("The hangman cometh.");
        }
    }
}



console.log("\t_________\n\t|\t|\n\t|\n\t|\n\t|\n\t|\n________|________");

