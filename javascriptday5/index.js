const hello = ["aditya", "bijay", "sagar"];

// name.forEach((value) => {
//     console.log(value);
// });

const newhello = hello.map((newname) => {
    return newname + "hari";
    
});
console.log(newhello);


// .......................


const fruits = [
    "Apple", "Banana", "Orange", "Mango", "Pineapple",
    "Watermelon", "Grapes", "Strawberry", "Kiwi", "Peach",
    "Cherry", "Pear", "Plum", "Lemon", "Avocado",
    "Blueberry", "Raspberry", "Blackberry", "Coconut", "Pomegranate",
    "Cantaloupe", "Fig", "Guava", "Passionfruit", "Apricot",
    "Lime", "Lychee", "Papaya", "Cranberry", "Dragonfruit",
    "Kumquat", "Nectarine", "Tangerine", "Persimmon", "Clementine",
    "Starfruit", "Honeydew", "Rambutan", "Mandarin", "Soursop",
    "Jackfruit", "Gooseberry", "Mulberry", "Quince", "Elderberry",
    "Blackcurrant", "Redcurrant", "Goji Berry", "Loquat", "Kiwi Berry",
    "Feijoa", "Mangosteen", "Physalis", "Sapodilla", "Jujube",
    "Chayote", "Pawpaw", "Bilberry", "Cactus Pear", "Carambola",
    "Durian", "Figs", "Loganberry", "Maracuja", "Pitaya",
    "Salak", "Salal Berry", "Tamarillo", "Ugli Fruit", "Yuzu",
    "Barberry", "Black Sapote", "Cloudberry", "Currant", "Cupuaçu",
    "Damson Plum", "Gooseberries", "Miracle Fruit", "Plantain", "Rowan Berry",
    "Sea Buckthorn", "Surinam Cherry", "Tamarind", "Yangmei", "Acai Berry",
    "Bergamot Orange", "Breadfruit", "Carissa", "Cupuacu", "Goumi",
    "Hala Fruit", "Imbe", "Kiwano", "Mamoncillo", "Maypop",
    "Mulberries", "Nance", "Pepino", "Pulasan", "Pomelo"
];

 console.log(fruits);
console.log(fruits.length);

fruits.forEach(fruit => {
console.log(fruit.toUpperCase())
});

// for ascending order
 
fruits.sort();
fruits.forEach(fruit => {
    console.log(fruit.toUpperCase());
});
 
// console.log(fruits.indexOf("Mulberry"));

console.log(fruits.indexOf("Pomelo"));

// console.log(fruits.includes("Coconut"));

// console.log(fruits.includes("apple"));
// console.log(fruits.includes("Apple"));


// const addbijay = fruits.splice(61, 100, "bijay");
// console.table(fruits);

const addsagar = fruits.splice(78, 100, "sagar");
console.table(fruits);


// for descending order 

fruits.sort();
fruits.reverse();

fruits.forEach(fruit => {
    console.log(fruit.toUpperCase());
});


const object= {

name:"",
lastname:"neupane",
age:22,

};

const newobject={...object,name:"aditya",age:32,lastname:"stha"};

console.log(newobject);