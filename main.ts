#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blue.bold("\n\tWelcome to Iqrz's-Currency-Convertor\n"))

// define the list of currencies and their exchange rates //

let exchange_rates: any ={
    "USD":1,
    "EUR":0.9,
    "JYP":113,
    "CAD":1.3,
    "AUD":1.65,
    "PKR":280,
}

// prompt the user to select currencies to convert from and to
let user_answer = await inquirer.prompt([
    {
        name:"from_currency",
        type:"list",
        message:(chalk.yellowBright("Select the currency to convert from:")),
        choices:["USD","EUR","JYP","CAD","AUD","PKR"]
    },
    {
        name:"to_currency",
        type:"list",
        message:(chalk.yellowBright("Select the currency to convert into:")),
        choices:["USD","EUR","JYP","CAD","AUD","PKR"]
    },
    {
        name:"amount",
        type:"input",
        message:(chalk.hex('#8B8000')("Enter the amount to convert:")),
    }
]);

//perform currency conversion by using formula //
let from_amount = exchange_rates[user_answer.from_currency];
let to_amount = exchange_rates[user_answer.to_currency];
let amount = user_answer.amount

//Formula of conversion //
let base_amount = amount/from_amount
let converted_amount = base_amount*to_amount

// Display the converted amount //
console.log(chalk.green(`Converted Amount =${converted_amount}`))