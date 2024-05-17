
var hour=14;
if(hour<12){
    console.log("good morning");
}
else{
    console.log("good evening");
}

const marks = 20;
if(marks>40) {
    console.log("you are pass");
}
else {
    console.log("you are fail");
}

var a = 3;
if(a%2==0) {
    console.log("even number");
}
else {
    console.log("odd number");
}


// value swap 

var a = 10;
var b = 20;
var c;

c=a;
a=b;
b=c;

console.log(a);
console.log(b);

console.log(`value of a: ${a}`);
console.log(`value of b: ${b}`);


var text = " ";
for (let i = 0; i < 10; i++) {
    text = " the number is " + i  + " #" ;
    console.log(text);
}


let n = 7;
for (let i = 1; i <= n; i++) {
    let str = "* ";
    console.log(str.repeat(i));
};


const myfunction = () => {
    console.log("hello i am aditya");
};

myfunction();