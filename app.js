console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

let favoriteNumber = 17;
let input = prompt("Choose a number");

if (input < favoriteNumber) {
  console.log("too low");
} else if(input > favoriteNumber) {
  console.log("too high");
} else {
  console.log("Congratulations!");
}


let birthMonth = prompt("What is your birth month?");

switch (birthMonth) {
  case "January":
    console.log("winter");
    break;
  case "March":
    console.log("summer");
    break;
  case "August":
    console.log("spring");
    break;
  default:
    console.log("hey there");

}

let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch (typeId) {
  case "01":
    console.log("Tank top");
    break;
  case "02":
    console.log("T-Shirt");
    break;
  case "03":
    console.log("Long Sleeve");
    break;
  case "04":
    console.log("Sweat Shirt");
    break;
  default:
    console.log("Other");
}

switch (colorId) {
  case "BL":
    console.log("Black");
    console.log("Blue");
    break;
  case "RD":
    console.log("Red");
    break;
  case "PU":
    console.log("Purple");
    break;
 
  default:
    console.log("White");
}

switch (sizeId) {
  case "S":
    console.log("Small");
    break;
  case "M":
    console.log("Medium");
    break;
  case "L":
    console.log("Large");
    break;
  case "XL":
    console.log("Extra Large");
    break;
  default:
    console.log("One Size Fits All");
}

console.log(`Product: ${size} ${color} ${type}`);