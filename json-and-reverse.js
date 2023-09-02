// Input from user
// let data = prompt("Enter some data:", "Default data");
// alert("Hello, World!");
// document.write('Hello, World!');
// const num1 = parseInt(prompt('Enter the first number '));

const data = { num: 383, name: "hello" };

const dataJSON = JSON.stringify(data);

console.log(dataJSON);

const reverse = JSON.parse(dataJSON);

console.log(reverse);



