const persons = [
    "John",
    "Mary",
    "David",
    "Sarah",
    "Michael",
    "Linda",
    "James",
    "Susan",
    "Robert",
    "Karen",
    "William",
    "Nancy",
    "Joseph",
    "Lisa",
    "Charles",
    "Margaret",
    "Thomas",
    "Betty",
    "Daniel",
    "Dorothy",
    "Christopher",
    "Sandra",
    "Paul",
    "Ashley",
    "Mark",
    "Emily",
    "Donald",
    "Kimberly",
    "George",
    "Donna",
    "Kenneth",
    "Michelle",
    "Steven",
    "Carol",
    "Edward",
    "Amanda",
    "Brian",
    "Melissa",
    "Ronald",
    "Deborah",
    "Timothy",
    "Stephanie",
    "Jason",
    "Rebecca",
    "Jeffrey",
    "Laura",
    "Ryan",
    "Sharon",
    "Gary",
    "Cynthia",
    "Jacob",
    "Kathleen",
    "Nicholas",
    "Amy",
    "Eric",
    "Shirley",
    "Jonathan",
    "Angela",
    "Larry",
    "Helen",
    "Justin",
    "Anna",
    "Scott",
    "Brenda",
    "Brandon",
    "Pamela",
    "Benjamin",
    "Nicole",
    "Samuel",
    "Emma",
    "Gregory",
    "Samantha",
    "Frank",
    "Katherine",
    "Raymond",
    "Christine",
    "Patrick",
    "Debra",
    "Alexander",
    "Rachel",
    "Jack",
    "Carolyn",
    "Dennis",
    "Janet",
    "Jerry",
    "Ruth",
    "Tyler",
    "Maria",
    "Aaron",
    "Heather",
    "Henry",
    "Diane",
    "Jose",
    "Virginia",
    "Douglas",
    "Julie",
    "Peter",
    "Joyce"
];


// ascending garne sajilo tarika 

persons.sort();
console.log(persons);

// descending garne sajilo tarika

persons.sort();
persons.reverse();
console.log(persons);



// for ascending 

persons.sort();
persons.forEach(person => {
    console.log(person.toUpperCase());
});


// for descending 

persons.sort();
persons.reverse();
persons.forEach(person => {
console.log(person.toUpperCase());
});



// yo chai numbers lai sano bata thulo ma laijane 

const numbers = [4, 2, 8, 1, 6, 3, 7, 5];

// Sort the array in ascending order
numbers.sort((a, b) => a - b);

console.log(numbers); // Output: [1, 2, 3, 4, 5, 6, 7, 8]


 
const people = [
    "John",
    "Mary",
    "David",
    "Aditya",
    "Bijay",
    "Ram",
    "Hari",
    // Add more names here...
];

// Sort the array in ascending order
people.sort();
console.log(people);



// Case-insensitive sorting

// persons.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

// Sorting based on string length

// persons.sort((a, b) => a.length - b.length);





 