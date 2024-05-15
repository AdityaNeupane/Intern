// const fruits 
// [
//     "apple",
//     "banana",
//     "orange",
//     "pineapple",

// ]

// const fruits= ["apple", "banana", "orange", "pineapple", 4, 2, "hello"];

// console.log(fruits);

// console.log(fruits[2]);
// console.log(fruits[0]);

// console.log(fruits.indexOf("banana"));
// console.log(fruits.indexOf("pineapple"));

// console.log(fruits.at(3));

// console.log(fruits[fruits.length-1]);

// console.log(fruits.length);

// console.log(fruits.join(" @ "));

// const newfruits= fruits.pop();
// console.log(newfruits);



// .......................................

const students= ["ram", "hari", "sita", "gita", "gopal"];

console.log(students);

const popgopal=students.pop();
console.log(popgopal);
console.log(students);

const popgita=students.pop();
console.log(popgita);
console.log(students);

const popsita=students.pop();
console.log(popsita);
console.log(students);

const pophari=students.pop();
console.log(pophari);
console.log(students);

const popram=students.pop();
console.log(popram);
console.log(students);


const ram= students.push("ram");
console.log(students);

const hari= students.push("hari");
console.log(students);

const sita= students.push("sita");
console.log(students);

const gita=students.push("gita");
console.log(students);

const gopal=students.push("gopal");
console.log(students);

students.unshift("aditya");
console.log(students);

students.shift("gita");
console.log(students);

students.shift("hari");
console.log(students);


// .............

const fruits=["apple", "banana", "orange", "mango", "grapes"];
const replace = fruits.copyWithin(4,0);
console.log(replace);