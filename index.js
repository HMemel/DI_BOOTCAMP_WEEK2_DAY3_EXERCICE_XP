// Exercise 1 : List Of People

// Write code to remove “Greg” from the people array.
let people = ["Greg", "Mary", "Devon", "James"];

for (let name of people) {
  console.log(name);
}
people.shift();
// Write code to replace “James” to “Jason”.
people[2] = "Jason";
// Write code to add your name to the end of the people array.
people.push("HMemel");

for (let name of people) {
  if (name == "Mary") {
    console.log(name);
    break;
  }
  console.log(name);
}

let copy = people.slice(1, 3);

let marysLocation = people.indexOf("Mary");
let foosLocation = people.indexOf("Foo");

let last = people[people.length - 1];

console.log(people);

// Exercise 2 : Your Favorite Colors

let colors = ["blue", "orange", "green", "red", "purple"];

for (let i = 0; i < colors.length; i++) {
  console.log(`My #${i + 1} color is ${colors[i]}.`);
}

// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.

let ordinals = ["st", "nd", "rd", "th"];

for (let i = 0; i < colors.length; i++) {
  if (i >= 3) {
    console.log(`My ${i + 1}${ordinals[3]} color is ${colors[i]}.`);
  } else {
    console.log(`My ${i + 1}${ordinals[i]} color is ${colors[i]}.`);
  }
}

// Exercise 3 : Repeat The Question

// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

let num;
do {
  num = prompt("Give me a number");
} while (
  // While the number is smaller than 10 continue asking the user for a new number.
  // Tip : Which while loop is more relevant for this situation?
  num < 10
);
console.log(num);

// Exercise 4 : Building Management

// Copy and paste the above object to your Javascript file.
const building = {
  numberOfFloors: 4,
  numberOfAptByFloor: {
    firstFloor: 3,
    secondFloor: 4,
    thirdFloor: 9,
    fourthFloor: 2,
  },
  nameOfTenants: ["Sarah", "Dan", "David"],
  numberOfRoomsAndRent: {
    sarah: [3, 990],
    dan: [4, 1000],
    david: [1, 500],
  },
};
// Console.log the number of floors in the building.
console.log(building.number_levels);

// Console.log how many apartments are on the floors 1 and 3.
console.log(
  `There are ${building.number_of_apt_by_level[1]} apartments on level one and ${building.number_of_apt_by_level[3]} on level three.`
);

// Console.log the name of the second tenant and the number of rooms he has in his apartment.
console.log(
  `${building.name_of_tenants[1]} has ${building.number_of_rooms_and_rent.Dan[0]} rooms in his apartment`
);

// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
if (
  building.number_of_rooms_and_rent.David[1] +
    building.number_of_rooms_and_rent.Sarah[1] >
  building.number_of_rooms_and_rent.Dan[1]
) {
  let newAmount = prompt(
    "It's time to raise Dan's rent. What is his new rent price?"
  );
  building.number_of_rooms_and_rent.Dan[1] = newAmount;
}

// Exercise 5 : Family

// Create an object called family with a few key value pairs.
let family = {
  lastName: "Beginsky",
  numberOfMembers: 3,
  city: "Netanya",
};
// Using a for in loop, console.log the keys of the object.
for (let property in family) {
  console.log(property);
}
// Using a for in loop, console.log the values of the object.
for (let property in family) {
  console.log(family[property]);
}

// Exercise 6 : Rudolf

const details = {
  my: "name",
  is: "Rudolf",
  the: "raindeer",
};
// Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”
let inline = "";
for (let detail in details) {
  inline += detail.concat(` ${details[detail]} `);
}
console.log(inline);



// Exercise 7 : Secret Group

// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
let societyName = "";
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
for(let name in names.sort()){
    societyName += names[name][0];
}
//Console.log the name of their secret society. The output should be “ABJKPS”
console.log(societyName);

