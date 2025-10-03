// Practice Exercise 1

// Task 1: Array Basics - Shopping List 
// Requirements

// 1. Create an array `shoppingList` with at least 5 items  
function arrayBasics() {
    let shoppingList = ["Bag", "Towel", "Toothpaste", "Lipstick", "Powder"];
    console.log("Shopping list", shoppingList);
    console.log("");

    // 2. Add a new item to the end of the list 
    let addItem = shoppingList.push("Soap");
    console.log("Added item:", addItem);
    console.log("New shopping list:", shoppingList);
    console.log("");

    // 3. Remove the first item from the list  
    let removedItem = shoppingList.shift();
    console.log("Removed item:", removedItem);
    console.log("New shopping list:", shoppingList);
    console.log("");

    // 4. Display the total number of items 
    let totalNumber = shoppingList.length
    console.log("Total number of items:", totalNumber);
    console.log("");

    // 5. Loop through the list and print each item with its position 
    console.log("---Shopping list---")
    for (let list = 0; list <= 4; list++) {
        console.log(`List ${list + 1} : ${shoppingList[list]}`);
    };

    // Challenge: 
    // Create a function `formatList(list)` that returns the shopping list in a numbered format (1. Item, 2. Item, ...).
    //     formatList(list) {
    //         for (let i = 0; i < shoppingList.length; i++) {
    //             console.log(`1. ${list + 1}. ${shoppingList[list]}`);
    //         }
    //     }
    //    formatList("list")

};


// Practice Exercise 2: Student Grades Analyzer  
// Requirements:  

// 1. Store grades in an array 
function studentGradesAnalyzer() {
    let grades = [95, 55, 68, 79, 33, 53, 87, 46, 25, 49];
    console.log("Grades:", grades);
    console.log("");

    // 2. Write a function `getAverage(grades)` to calculate average grade 
    let total = 0;
    for (let grade of grades) {
        console.log("ADDING GRADES: ", grade);
        total += grade;
    }

    let averageGrades = total / grades.length;
    console.log(`Summary:Total grades = ${total}; Average grades = ${averageGrades}`);

    

    // 3. Write a function `getHighest(grades)` to find the highest grade


    // 4. Write a function `getLowest(grades)` to find the lowest grade
    // 5. Use loops where necessary to process the array


    
    // **Challenge:**
    // Create a function `getPassRate(grades)` that:
    // - Counts how many students scored **50 or above** (passing)
    // for (let grades )
    // - Divides that number by the total number of students
    // - Returns the **percentage of students who passed**





}

 



