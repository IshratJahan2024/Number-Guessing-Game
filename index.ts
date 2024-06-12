import inquirer from "inquirer"

// step 1) computer will generate arandom number

// step 2) user input for guessing number

// step 3) compare user input with computer generated number and show result

const randomNumber = Math.floor(Math.random() * 10 + 1);

const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number btween 1-10:",
    },
]);

console.log(answers)

if(answers.userGuessedNumber === randomNumber) {
    console.log("congratulation! you guessed right number.");
} else{
    console.log("you guessed wrong number.")
}