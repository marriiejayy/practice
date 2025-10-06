let student = {
    name: "Alice",
    Grade: 85,
    Age: 20
};

console.log("student:", student);
console.log("students name:", student.name);
console.log("students grade:", student.Grade);
console.log("student age:", student.Age);

console.log(`summary: my name is ${student.name} and i am ${student.Age}. My grade is ${student.Grade}`);

student.gender = "female";
student.Grade = 50;
console.log("updated details:", student);

delete student.gender;
console.log("updated details:", student);

let calculator = {
    brand: "Basic calc",

    add(a, b) {
        return a + b;
    },

    subtract(a, b) {
        return a - b;
    },

    multiply(a, b) {
        return a * b;
    },

    divide(a, b) {
        return a / b;
    },

    getBrand() {
        return this.brand;
    }
};

console.log("calculator brand:", calculator.getBrand);
console.log("5 + 3:", calculator.add(5, 3));
console.log("5 - 3:", calculator.subtract(5, 3));


let students = {
    name: "Alice",
    scores: [85, 92, 78, 96],


    addScore(score) {
        this.scores.push(score);
        return `Added score ${score}. Total scores: ${this.scores.length}`
    },

    getAverage() {
        let total = 0;
        for (let score of this.scores) {
            total += score;
        }
        return total / this.scores.length;
    },

    getInfo() {
        let average = this.getAverage();
        return `${this.name} average ${average.toFixed(1)}% (${this.scores.length} tests)`;
    }
};

console.log("Student info:", students.getInfo());
console.log(students.addScore(89));
console.log("Updated info:", students.getInfo());
console.log("All scores:", students.scores);

console.log("");


let account = {
    holderName: "Sarah Wilson",
    balance: 3000,

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            return `Deposited: ${amount}, New balance: ${this.balance}`
        }
        return "Invalid deposit amount";
    },

    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount
            return `withdrew $${amount} New balance $${this.balance}`;
        }
        return "Invalid withdrawal";
    },

    getBalance() {
        return `${this.holderName}'s balance : $${this.balance}`;
    }
};

console.log(account.getBalance());
console.log(account.deposit(250));
console.log(account.withdraw(400));
console.log(account.getBalance());

let studentss = [
    {
        name: "Alice",
        age: 20,
        grade: 85,
        major: "computer science"
    },
    {
        name: "Bob",
        age: 19,
        grade: 92,
        major: "Mathematics"
    },
    {
        name: "Charlie",
        age: 21,
        grade: 78,
        major: "Physics"
    },
];

console.log("All students:", studentss);

console.log("");

let highPerformers = [];
for (let studen of studentss) {
    if (studen.grade >= 80) {
        highPerformers.push(studen);
    }
}

console.log("High performers (≥85%):");
for (let studen of highPerformers) {
    console.log(`${studen.name}: ${studen.grade}%`);
}

let totalGrade = 0;
for (let studen of studentss) {
    totalGrade += studen.grade;
}

let averageGrade = totalGrade / studentss.length;
console.log(`average grade: ${averageGrade.toFixed(1)}%`);

let newStudent = {
    name: "Diana",
    age: 29,
    grade: 88,
    major: "chemistry"
};

studentss.push(newStudent);
console.log(`Added ${newStudent.name}. Total students: ${studentss.length}`);

console.log(""); // Empty line

for (let studen of studentss) {
    if (studen.name === "Charlie") {
        studen.grade = 85;
        console.log(`Updated ${studen.name}'s grade to ${studen.grade}%`);
        break;
    }
}
