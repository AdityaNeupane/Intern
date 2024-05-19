var hour=10;
if(hour<12) {
    console.log("good morning !!");
}
else {
    console.log("good evening");
}

const marks=41;
if(marks>=40) {
    console.log("you are pass");
}
else {
    console.log("you are fail");
}

var a = 11;
if(a%2==0) {
    console.log("even number");
}
else {
    console.log("odd number");
}



var text = " ";
for(let i = 0; i < 10; i++) {
    text = " the number is " + i + " @ " ;
    console.log(text);
}

var hello = " ";
for(let i = 0; i < 5; i++) {
    hello = " the number is " + i ;
    console.log(hello);
}


var get = " ";
for(let i = 0; i < 8; i++) {
    get = " the number is " + i + " # " ;
    console.log(get);
}

let n = 8 ;
for(let i = 1; i <= n; i++) {
    let str = " * ";
    console.log(str.repeat(i));
};

let k = 8;
for(let i = 1; i <= k; i++) {
    let str = " # ";
    console.log(str.repeat(i));
};


let z = "8";
for(let i = 1; i <= z; i++) {
    let str = " @ ";
    console.log(str.repeat(i));
};



// function 

const myfunction = () => {
    console.log("hello there !!");
};
myfunction();



const aditya = () => {
    console.log("good morning");
};
aditya();


const bijay = () => {
    console.log("good evening");
};
bijay();


// function use garera odd\even

const abc = (number) => {
    if(number%2==0) {
        console.log("even number");
    }
    else {
        console.log("odd number");
    }
};

abc(9);


// function use garera grade find out gareko 

const grade = (marks) => {
    if(marks>=90) {
        console.log("your grade is A+");
    }
    else if(marks>=80) {
        console.log("your grade is A");
    }
    else if(marks>=70) {
        console.log("your grade is B");
    }
    else if(marks>=60) {
        console.log("your grade is C");
    }
    else if(marks>=50) {
        console.log("your grade is D");
    }
     else {
        console.log("you failed");
     }
};

grade(35);


// finding eligibility for driving license using function 

const eligible = (age) => {
    if(age>=18) {
        console.log("you are eligible for driving license");
    }
    else {
        console.log("you are not eligible for driving license");
    }
};
eligible(12);



// using spread operator for changing the value 

const variable = {
    firstname: "bijay",
    lastname: "neupane",
    age: 22,
    height: "4.2 feet",
};
 
const newvariable = {...variable,firstname:"aditya", height:"5.10 feet"};
console.log(newvariable);

