

var person =
{
    firstname: "aditya",
    lastname: "neupane",
    college: "birendra",
    registration: 5071,


// console.table(person);
// console.log(person.college);
// console.log(person.registration);

fullname: function ()
{
return this.firstname + " " + this.lastname;
},
};

console.log(person.fullname());


// .................

var patient =
{
    firstname: "bijay",
    lastname: "neupane",
    age: 22,
    disease: "typhoid",
    country: "nepal",

    fulldescription: function()
    {
        return this.firstname + " " + this.lastname + " " + this.age + " " + this.disease + " " + this.country;
    },
};

console.log(patient.fulldescription());

// .........................

var name = "hdgsfldufgdsgfdkhfkudsgfdskjfkdcfbdjksfhjksdfkg"

console.log(name.length);

// .................

var firstname ="bijay";
var lastname ="aditya";

console.log(firstname==lastname);

console.log(firstname == lastname ? "yes" : "no");

// ............

var bookprice = 8085;
var microprocessor = "8085";

var fullname = bookprice - microprocessor;

console.log(typeof bookprice);
console.log(typeof microprocessor);

console.log(typeof fullname);


console.log(bookprice === microprocessor ? "yes" : "no" );


// ...........................

var hello ="boAthead";
var hiiii ="boAthead";

console.log(hello == hiiii);
console.log(hello == hiiii ? "yes" : "no" );
console.log(hello.length);
console.log(typeof hello);
console.log(typeof hiiii);


// ...................

var ek = "5071";
var dui = 5071;

console.log(typeof ek);
console.log(typeof dui);

console.log(ek.length);

console.log(ek == dui);
console.log(ek === dui);



var full = ek + dui;

console.log(typeof full);

console.log(full);

console.log(ek-dui);
console.log(ek * dui);
console.log(ek / dui);
 

console.log(ek === dui ? "yes" : "no");

console.log(ek == dui ? "yes" : "no");