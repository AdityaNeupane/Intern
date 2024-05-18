// checking driving license eligibility using function 

const eligibility = (age) => {
    if(age>=18){
        console.log("you are eligible for driving license");
    }
    else {
        console.log("you are not eligible for driving license");
    }
};

eligibility(16);



// checking grade of students using fuction 

const marks = (marks) => {
    if(marks>=90){
        console.log("your grade is A+");
    }
    else {
        console.log("your grade is average");
    }
};
marks(22);





// spread operator i.e changing the values 

const object= {
    firstname:"Aditya",
    lastname:"Neupane",
    age:22,
    height:"5.9 feet",
};

const newobject = {...object,firstname:"Bijay", age:25,height:"4.10 feet"};
console.log(newobject);

