const localModule = require('./module');

let ans = localModule.sum(10,4);

let min = localModule.sub(10,6);

let data = localModule.todoList;

console.log(`sum = ${ans}`);

console.log(`min = ${min}`);

console.log(data);

// const local = require('./module');
// console.log(local.sum(10,4));
// console.log(local.todoList[0].name);