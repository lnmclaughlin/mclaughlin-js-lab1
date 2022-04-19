"use strict";
let firstName = "Laurie";
let lastName = "McLaughlin";

let fullName = `${firstName} ${lastName}`;

let age = 37;

const birthday = "October 2";

const pineapplePizza = false;

const lifeEvents = [
  "I currently live in Michigan.",
  "I am a brain cancer survivor.",
  "I used to live in Asia.",
  "I recently joined the circus.",
];

if (pineapplePizza) {
  console.log(
    `My name is ${fullName} and I like pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}`
  );
} else {
  console.log(
    `My name is ${fullName} and I'm not into pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}`
  );
}
//references the entire index using .length
for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

//while (true) {} - no infinite loops! you will kill your computer
let counter = 0;
while (true) {
  let randomNumber = Math.floor(Math.random() * 10 + 1);
  if (randomNumber !== 5) {
    counter++;
    console.log(`${randomNumber} is !==5`);
  } else {
    counter++;
    console.log(
      `5 === 5. It took ${counter} iterations to randomly generate the number 5`
    );
  }
  break;
}
