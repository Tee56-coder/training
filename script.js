// console.log('I dey work o!!!');

// Variables declaration
let josh = 'boy';
var josephine = 'girl';
const jack = 'man';

// Datatypes
// string 
"hello there!"

// Numbers
900

// boolean
false 
const bool = 23 < 12

// undefined
let bro;
console.log(bro);

// null
const plate = null
console.log(plate);

// data coercion

let age = 1

console.log('This is a great ' + age + 'st birthday of june, right? '+ bool + '.');


// operators
// math operators + - / *  //logical operators < > <= >= !== ===
// other operators ++ -- += -= /= *= && ||


// Conditionals
// if/ else 

// if('boy') {

// } else {

// }

// Ternary 
const joy  = 'boy' ? 'yes' : 'no';
// let joy;

console.log(joy && 'pretty');

console.log(joy || 'handsome');

// Switch
switch(joy) {
    case 'no':
    console.log('pretty');
    break;
    case 'yes':
    console.log('handsome');
    break;
    default: console.log('human');
}


// Functions
// They are pieces of reusable codes that take input, processe and give output.

function simpleInterest(p, r, t) {
    const res = (p * r * t) / 100;
    
    return  console.log(res);
}

simpleInterest(4000, 12, 2);
simpleInterest(470, 1.2, .5);
simpleInterest(1000, 10, 1);


// Arrays are use to stor multiple data at once in one container

const foodItems = ['rice', 'beans', 'plants', 'poms', 'oguns', 'mals', 'pounds', 'wades']

// Objects are unique containers that stores all information about a particular variable or thing. Also they have methods which are functions that are attached to objects

const toms = {
    name: 'Toms Bal',
    school: 'ISl',
    siblings: ['Mobs Bal'],
    location: {
        street: 'anjorin',
        houseNumber: 13,
        state: 'Lagos'
    }
}

// Loops are ways to iterate or automate how you access the data in an array or strings
// For loop, while loop, do while loop,

for(let i = 0; i < foodItems.length; i++) {
    console.log(foodItems[i]);
}

// High order array methods
// map, reduce, filter, forEach, some, find. They take in call back functions where the main parameter of the function represents each data in the array


// more

const hour = 9;
if (hour >= 6 && hour <= 12) {
  console.log('Good morning!');
} else if (hour >= 13 && hour <= 17) {
  console.log('Good afternoon!');
} else {
  console.log('Good night!');
}

// two
const ages = 5;
if (ages <= 6 || ages >= 65) {
console.log('Discount');
} else {
console.log('No discount');
}

// three
const randomNumber = Math.random();
let result;
if (randomNumber < 0.5) {
console.log('heads');
} else {
console.log('tails');
}
const guess = 'heads';
if (guess === result) {
  console.log('You win!');
} else {
  console.log('You lose!');
}

// four
function greet(name) {
    if (!name) {
      console.log('Hi there!');
    } else {
      console.log(`Hello ${name}!`);
    }
}
greet('Simon');
greet('Alice');
greet();

// five
function convertToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }
console.log(convertToFahrenheit(25));

// six

const product = {
    name: 'basketball',
    price: 2095
};
console.log(product);
product.price += 500;
console.log(product);
product['delivery-time'] = '3 days';
console.log(product);

// seven
function comparePrice(product1, product2) {
    if (product1.price < product2.price) {
      return product1;
    } else {
      return product2;
    }
}

const product1 = {
    name: 'basketball',
    price: 2095
};

const product2 = {
    name: 'socks',
    price: 1090
};

console.log(comparePrice(product1, product2));


// eigth
console.log('Good Morning'.toLowerCase());
console.log('TESTING'.toLowerCase());

// nine
console.log('hello'.repeat(2));
console.log('test'.repeat(3));

// ten
