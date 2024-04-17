#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgGray.bold("\t\t ***WELCOME TO THE WORD COUNTER*** \t\t"));
const answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: (chalk.bgBlueBright.italic("\n Enter your sentence to count the word "))
    }
]);
let words = answer.sentence.trim().split(" ");
console.log(words);
console.log(chalk.bgBlueBright.italic.bold(`\n Your sentence word count is ${words.length}`));
