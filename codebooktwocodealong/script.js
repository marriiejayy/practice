function sayHello() {
    console.log("Hello! This is Mariam");
}

sayHello();
sayHello();
sayHello();

function greetName(name) {
    console.log("hello", name);
}

greetName("alice");

// function showCurrentTime () {
//     let now = new Date();
//     console.log('current time: ${now.toLocaleTimeString()}');
// }

function introduce(firstName, lastName, age) {
    console.log(`Hello! My name is ${firstName} ${lastName} and i am ${age} years old.`)
}

introduce("Mariam", "Adesina", 23);
introduce("John", "Doe", 45);

function placeHolder(location = "lagos") {
    console.log("location:", location);
}
placeHolder();
placeHolder("Abuja");

function addNumber(num1, num2) {
    let result = num1 + num2;
    return result;
}

let sum = addNumber(5, 3);
console.log("sum:", sum);

console.log("");

console.log("10 + 8 = ", addNumber(10, 8));
console.log("");

function createName(first, last) {
    return `${first} ${last}`;
}

let fullname = createName("John", "Doe");
console.log("full name:", fullname);

function isAdult(age) {
    return age >= 18;
}

console.log("is 16 an adult:", isAdult(16));
console.log("is 18 an adult:", isAdult(18));

let userAge = 18;
if (isAdult(userAge)) {
    console.log("you can vote");
} else {
    console.log("you cannot vote");
}


function isElderly(age) {
    return age >= 65;
}

console.log("Is this an adult?", isElderly(78));
console.log("Is this an adult?", isElderly(6));

let adultAge = 78;
if (isElderly(adultAge)) {
    console.log("you have retired");
} else {
    console.log("you can continue working");
}

function multiply(a, b) {
    return a * b
};

function divide(a, b) {
    if (b === 0) {
        return "cannot divide by zero"
    }
    return a / b;
}

function calculateLenghtArea(lenght, width) {
    return lenght * width;
}

console.log("multiply 5 x 3:", multiply(5, 3));
console.log("divide 5 / 3:", divide(5, 3));
console.log("divide 5/ 0:", divide(5, 0));
console.log("length area:", calculateLenghtArea(20, 7));

let age = 25;
let temperature = 75;
let isRaining = true;

if (age >= 18) {
    console.log("you can vote");
}


if (temperature >= 38) {
    console.log("your body temperature is high");
} else {
    console.log("your body temperature is normal");
}

console.log("");

if (isRaining) {
    console.log("dont forget your umbrella");
} else {
    console.log("no umbrella needed today");
}

console.log("");

let score = 85;
let passingGrade = 70;

if (score >= passingGrade) {
    console.log(`You passed! Your score is ${score}%`);
} else {
    console.log(`you failed! Your score is ${score}. You need to score at least ${passingGrade}`);
}

console.log("");


let grade = 70;

if (grade >= 80) {
    console.log("Grade A: Excellent");
} else if (grade >= 70) {
    console.log("Grade B: Very Good");
} else if (grade >= 60) {
    console.log("Grade C: Good");
} else if (grade >= 50) {
    console.log("Grade D: Fair");
} else {
    console.log("Grade F: Poor");
}

console.log("");

let weather = 45;
let isSnowing = false;

if (weather < 32 && isSnowing) {
    console.log("Bundle up! Its freezing and snowing");
} else if (weather < 32) {
    console.log("Its freezing! Wear a heavy coat");
} else if (weather < 50) {
    console.log("Its chilly! A jacket would be good.");
} else if (temperature < 70) {
    console.log("Nice weather! A light sweater is perfect");
} else {
    console.log("It's warm! T-shirt weather!");
}

console.log("");

let hour = 12;

if (hour < 12) {
    console.log("Good morniing!");
} else if (hour < 18) {
    console.log("Good afternoon");
} else {
    console.log("good evening");
}


let ages = 22;
let hasLicense = true;
let hasInsurance = false;
let isWeekend = true;
let isHoliday = false;
let weathers = "sunny";

if (age >= 18 && hasLicense) {
    console.log("You can drive");
} else {
    console.log("You cannot drive yet");
}

if (age >= 18 && hasInsurance && hasLicense) {
    console.log("You can drive legally");
} else {
    console.log("You are missing something to drive legally");
}
console.log("");

if (isWeekend || isHoliday) {
    console.log("No work today");
} else {
    console.log("Time to work");
}
console.log("");

if (!hasInsurance) {
    console.log("Warning! you dont have insurance");

}

if ((isWeekend || isHoliday) && weathers === "sunny") {
    console.log("Perfect day for a picnic");
} else {
    console.log("stay inside");
}

let temperatures = 75;
let humidity = 40;

if (temperatures >= 70 && temperatures <= 85 && humidity < 60 && isRaining) {
    console.log("perfect weather condition");
} else {
    console.log("weather could be better");
}

function checkPassword(password) {
    if (password.length < 8) {
        console.log("Password too short! Must be at least 8 characters");
    } else if (password === "password" || password === "123456" || password === 123456) {
        console.log("password too common");
    } else if (password.length > 20) {
        console.log("password too long ");
    } else
        return "password looks good"
}

console.log("");
console.log("testing passwords");
console.log(checkPassword("abc"));
console.log(checkPassword("password"));
console.log(checkPassword(123456));
console.log(checkPassword("mysecurepass123"));
console.log(checkPassword("abcdefghijklmnopqrstuvwxyz"));

console.log("");

function getAgeGroup(age) {
    if (age < 0) {
        return "invalid age";
    } else if (age < 13) {
        return "child";
    } else if (age < 20) {
        return "teenager"; 
    } else if (age < 60) {
        return "adult";
    } else {
        return "senior";
    }
}

let agess = [5, 16, 25, 45, 67];
agess.forEach(age => {
    console.log(`age ${age} : ${getAgeGroup(age)}`);
});


console.log("");


function calculateDiscount (price, customerType, isFirstTime) {
    let discount = 0;

    if (customerType === "student") {
        discount = 0.10;
    } else if (customerType === "senior") {
        discount = 0.15;
    } else if (customerType === "employee") {
        discount = 0.20;
    }

    if (isFirstTimes) {
        discount = 0.05;
    }
}

let finalPrice = price * (1- discount);
    return {
        originalPrice: price
        
    }










































