let numbers = [1, 2, 3, 4, 5, 6];
let fruits = ["apple", "banana", "cashew", "kiwi"];

console.log("Numbers array:", numbers);
console.log("Fruits array:", fruits);
console.log("");

console.log("number of numbers:", numbers.length);
console.log("number of fruits:", fruits.length);
console.log("");

console.log("1st fruit:", fruits[1]);
console.log("last fruit:", fruits[fruits.length - 1]);

let colors = ["red", "blue", "green", "purple"];
console.log("original colors:", colors);
console.log("");

colors[0] = "black";
colors[1] = "orange";
console.log("After changes:", colors);
console.log("");

colors.push("red", "blue", "grey");
console.log("colors:", colors);
console.log("");

let removedColors = colors.pop();
console.log("removed color:", removedColors);
console.log("new colors:", colors);

let addColors = colors.unshift("azure");
console.log("added color:", addColors);
console.log("new color list:", colors);
console.log("");

let unshifted = colors.shift();
console.log("removed from 1st position: ", unshifted);
console.log("new list:", colors);


console.log("is green part of the list?", colors.includes("green"));
console.log("position of purple:", colors.indexOf("purple"));

let firstTwo = fruits.slice(0, 3);
let lastTwo = fruits.slice(-2);
console.log("first three:", firstTwo);
console.log("last two:", lastTwo);

remvedFruits = fruits.splice(0, 2);
lastTwoFruits = fruits.splice(-2);
console.log("first three fruits removed:", remvedFruits);
console.log("last two fruits reemoved:", lastTwoFruits);

let words = ["Hello", "from", "javaScript"];
let sentence = words.join(" ");
let csv = words.join("-");

console.log("sentence:", sentence);
console.log("csv:", csv);

let track = "java, python, css, html";
let trackArray = track.split(",");
console.log("track array:", trackArray, typeof (trackArray));

let message = "apple,banana,orange";
let fruitArray = message.split(",");
console.log("String:", message);
console.log("Split into array:", fruitArray, typeof (fruitArray));

let reversedColors = colors.reverse();
console.log("rversed colors:", reversedColors);


console.log("counting from 1 to 15");
for (let i = 0; i <= 15; i++) {
    console.log("count:", i)
}



console.log("counting down from 15 to 0");
for (let i = 15; i >= 0; i--) {
    console.log("countdown:", i);
}

console.log("Blast off!!!");



console.log("");


console.log("multiplication table for eleven");
for (let i = 1; i <= 12; i++) {
    let results = 11 * i;
    console.log(`11 x ${i} = `, results);
}


console.log("");
console.log("skipping three numbers ");
for (let i = 1; i <= 36; i += 3) {
    console.log("skipping numbers by 3:", i);
}


console.log("");
console.log("looping through colors");
let colorss = ["red", "blue", "green", "yellow"];
console.log("colors:", colorss);
for (let color of colorss) {
    console.log("i like", color);
}

console.log("");


console.log("fruits in the array");
let fruitss = ["apple", "banana", "kiwi", "grape"];
for (let i = 0; i < fruitss.length; i ++) {
    console.log(`fruit ${i +1} : ${fruitss[i]}`);
}


console.log("");
for (let fruit in fruitss) {
    console.log(`fruit ${fruit}: ${fruitss[fruit]}`);
}

console.log("");
let tracks = ["python", "java", "html", "css"];
for (let i = 0; i < tracks.length; i++) {
    console.log(`track ${i + 1} : ${tracks[i]}`)
}

console.log("");
let scoress = [10, 20, 30, 40, 50, 60, 70, 80]; 
let total = 0;

console.log("calculating average scores");
for (let scor of scoress) {
    console.log("adding scores:", scor);
    total += scor;
}

let average = total / scoress.length;
console.log(`Total score: ${total}; average score:${average}`);


console.log("");

console.log("calculating average scores");
let marks = [10, 20, 33, 40, 50, 67, 78, 80, 90, 100]
total = 0;

for (let mark of marks) {
    console.log("adding marks:", mark)
    total += mark
}

let averages = total / marks.length;

console.log(`total marks ${total}; average mark: ${averages.toFixed(2)}`);


console.log("");
let temperaturess = [28, 62, 85, 90, 75, 82, 38, 57, 12, 45, 37, 60];
let hotDayss = 0;
let coldDayss = 0;

for (let temps of temperaturess) {
    if  (temps >= 70) {
        hotDayss++;
        console.log(`${temps}∘F - Hot day!`)
    } else if (temps < 40) {
        coldDayss++;
        console.log(`${temps}∘F- Cold day!`)
    } else {
        console.log(`${temps} - Nice weather`)
    }
}

console.log(`Summary: ${hotDayss} hot days and ${coldDayss} cold days.`)

console.log(""); // Empty line
let temperatures = [68, 72, 85, 90, 75, 82, 88];
let hotDays = 0;
let coldDays = 0;

console.log("Analyzing temperatures:");
for (let temp of temperatures) {
    if (temp >= 85) {
        hotDays++;
        console.log(`${temp}°F - Hot day!`);
    } else if (temp < 70) {
        coldDays++;
        console.log(`${temp}°F - Cold day!`);
    } else {
        console.log(`${temp}°F - Nice day!`);
    }
}

console.log(`Summary: ${hotDays} hot days, ${coldDays} cold days`);

console.log(""); // Empty line


let numberss = [1, 2, 3, 4];
let doubled = [];

console.log("Doubling each number");
for (let num of numberss) {
    let doubledValue = num * 2;
    doubled.push(doubledValue)
    console.log(`${num} X 2 = ${doubledValue}`)
}

console.log("original:", numbers);
console.log("doubled:", doubled);

console.log("Basic while loop- counting to 5:");
let count = 1;
while (count <= 5) {
    console.log("count is:", count);
    count++; 
}


























































