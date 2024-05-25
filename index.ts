#! /usr/bin/env node

import inquirer from "inquirer";

let todos = [];
let condition = true;

while(condition){
    let addTask = await inquirer.prompt([
        {
          name: "todo",
          type: "input",
          message: "What do you want to add in your Todo List?",
        },
        {
          name: "adddMore",
          type: "confirm",
          message: "Do you want to add more?",
          default:"False",
        },
      ]);
      todos.push(addTask.todo);
console.log(todos);
condition = addTask.adddMore;
}

console.log("Todo List")
for(let i = 0; i<todos.length; i++){
console.log((i+1)+"."+todos[i]);
}