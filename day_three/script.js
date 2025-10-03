
// Practice Exercise 3

// Task- Movie Ratings System  

// 1. Create two arrays: `movies` (names) and `ratings` (numbers) 
function movieRatingSystem() {
    let movies = ["Insidious", "Merlin", "Prison Break", "The Nun", "Money Heist"];
    let ratings = [8, 9, 8.4, 7.6, 9];

    console.log("Movies:", movies);
    console.log("Ratings:", ratings);
    console.log("");


    // 2. Write a function `addMovie(movie, rating)` that adds a new entry 
    function addMovie(movie, rating) {
        movies.push(movie);
        ratings.push(rating);
        console.log("Added movie:", movie);
        console.log("Added rating:", rating);
        console.log("New movie list:", movies);
        console.log("New rating list:", ratings);
        console.log("");
    }

    addMovie("Lovely Runner", 9);
    addMovie("Vagabond", 7.9);
    console.log("");


    // 3. Write a function `getAverageRating()` to calculate the average rating 
    function getAverageRating() {
        let total = 0;
        for (let i of ratings) {
            console.log("Adding ratings:", i);
            total += i
        }

        let average = total / ratings.length;
        console.log(`Summary- Total ratings: ${total}; Average ratings: ${average.toFixed(2)}`);
    }

    getAverageRating()

    console.log("");

    // 4. Write a function `getTopMovie()` to find the highest-rated movie 
    function getTopMovie() {
        let highest = ratings[0];
        for (let i = 1; i < ratings.length; i++) {
            if (ratings[i] > highest) {
                highest = ratings[i]
            }
        }
        let index = ratings.indexOf(highest);
        console.log("Highest rated movie:", movies[index], "; Rating:", highest);
    }
    getTopMovie();

    console.log("");

    // 5. Print a summary of all movies with their ratings
    console.log("====Summary of movies with their ratings====");
    for (let i = 0; i < movies.length; i++) {
        console.log(`${movies[i]}: ${ratings[i]}`);
    }
    console.log("");

    // **Challenge:**
    // Sort the movies by rating (highest → lowest) and display the sorted list

    function sortMoviesByRating() {

        let sortedMovie = [];
        for (let i = 0; i < movies.length; i++) {
            sortedMovie.push({
                movie: movies[i],
                rating: ratings[i]
            });
        }

        // Sort by rating (highest to lowest)
        sortedMovie.sort((a, b) => b.rating - a.rating);

        // Display sorted list
        console.log("\n=== Movies Sorted by Rating (Highest → Lowest) ===");
        for (let i = 0; i < sortedMovie.length; i++) {
            console.log(`${i + 1}. ${sortedMovie[i].movie} - Rating: ${sortedMovie[i].rating}`);
        }


    }
    sortMoviesByRating();
}



// Practice Exercise 4

// Comprehensive Practice Exercise: Student Report System
// Add students- store students name and their grades in an array
function studentReportSystem() {
    let studentNames = [];
    let studentGrades = [];

    function addStudent(name, grade) {
        studentNames.push(name);
        studentGrades.push(grade);
        console.log(`Name: ${name} - Grade: ${grade}`);
    }

    addStudent("Adesina Mariam", 89);
    addStudent("Olawale Wasiu", 27);
    addStudent("Adisa Tofumi", 77);
    addStudent("Adekunle Habeeb", 45);
    addStudent("Coker Tofumi", 37);
    addStudent("Omotayo Azeez", 57);
    addStudent("Aliu Tawa", 80);
    addStudent("Adewale Tofarati", 50);


    console.log("\n=== Students list ===");
    for (let i = 0; i < studentNames.length; i++) {
        console.log(`${i + 1}. ${studentNames[i]} - Grade: ${studentGrades[i]}`);
    }
    studentReportSystem();

    // 2.Calculate Average- Compute the average grade for the class
    function calculateAverage() {
        let total = 0;
        for (let i = 0; i < studentGrades.length; i++) {
            console.log("Adding grades:", studentGrades);
            total += studentGrades[i];
        }
        let average = total / studentGrades.length;
        console.log(`Total grades: ${total}; Average grades: ${average.toFixed(2)}`)

    }
    calculateAverage();

    // Comprehensive Practice Exercise: Student Report System
function studentReportSystem() {
    // Arrays to store student data
    let studentNames = [];
    let studentGrades = [];

    // 1. Add Student - Store student names and their grades
    function addStudent(name, grade) {
        // Validate inputs
        if (grade < 0 || grade > 100) {
            console.log(`Error: Grade for ${name} must be between 0 and 100`);
            return false;
        }
        
        studentNames.push(name);
        studentGrades.push(grade);
        console.log(`Added: ${name} - Grade: ${grade}`);
        return true;
    }

    // 2. Calculate Average - Compute the average grade for the class
    function calculateAverage() {
        let total = 0;
        for (let i = 0; i < studentGrades.length; i++) {
            total += studentGrades[i];
        }
        let average = total / studentGrades.length;
        return average;
    }

    // 3. Find Top Student - Identify the student with the highest score
    function findTopStudent() {
        let highest = studentGrades[0];
        let topStudentIndex = 0;
        
        for (let i = 1; i < studentGrades.length; i++) {
            if (studentGrades[i] > highest) {
                highest = studentGrades[i];
                topStudentIndex = i;
            }
        }
        
        return {
            name: studentNames[topStudentIndex],
            grade: highest
        };
    }

    // 3. Find Bottom Student - Identify the student with the lowest score
    function findBottomStudent() {
        let lowest = studentGrades[0];
        let bottomStudentIndex = 0;
        
        for (let i = 1; i < studentGrades.length; i++) {
            if (studentGrades[i] < lowest) {
                lowest = studentGrades[i];
                bottomStudentIndex = i;
            }
        }
        
        return {
            name: studentNames[bottomStudentIndex],
            grade: lowest
        };
    }

    // 4. Grade Categorizer - Assign letter grades based on numeric scores
    function getLetterGrade(grade) {
        if (grade >= 90) return 'A';
        if (grade >= 80) return 'B';
        if (grade >= 70) return 'C';
        if (grade >= 60) return 'D';
        return 'F';
    }

    // Challenge: Sort students by grade (highest → lowest)
    function sortStudentsByGrade() {
        // Create paired data
        let studentData = [];
        for (let i = 0; i < studentNames.length; i++) {
            studentData.push({
                name: studentNames[i],
                grade: studentGrades[i],
                letterGrade: getLetterGrade(studentGrades[i])
            });
        }
        
        // Sort by grade (highest to lowest)
        studentData.sort((a, b) => b.grade - a.grade);
        
        return studentData;
    }

    // 5. Report Generator - Print a formatted class report
    function generateReport() {
        console.log("\n" + "=".repeat(70));
        console.log("                    📊 CLASS REPORT CARD 📊");
        console.log("=".repeat(70));
        
        // Get sorted student data
        let sortedStudents = sortStudentsByGrade();
        
        // Print table header
        console.log("\nRank  Student Name                Grade    Letter Grade");
        console.log("-".repeat(70));
        
        // Print each student
        for (let i = 0; i < sortedStudents.length; i++) {
            let rank = (i + 1).toString().padStart(2);
            let name = sortedStudents[i].name.padEnd(25);
            let grade = sortedStudents[i].grade.toString().padStart(5);
            let letter = sortedStudents[i].letterGrade;
            
            console.log(`${rank}.   ${name}  ${grade}       ${letter}`);
        }
        
        console.log("-".repeat(70));
        
        // Calculate statistics
        let average = calculateAverage();
        let topStudent = findTopStudent();
        let bottomStudent = findBottomStudent();
        
        // Print statistics
        console.log("\n📈 CLASS STATISTICS:");
        console.log(`   Class Average: ${average.toFixed(2)} (${getLetterGrade(average)})`);
        console.log(`   Highest Score: ${topStudent.name} - ${topStudent.grade} (${getLetterGrade(topStudent.grade)})`);
        console.log(`   Lowest Score:  ${bottomStudent.name} - ${bottomStudent.grade} (${getLetterGrade(bottomStudent.grade)})`);
        console.log(`   Total Students: ${studentNames.length}`);
        
        console.log("\n" + "=".repeat(70));
    }

    // Add all students
    console.log("=== Adding Students ===\n");
    addStudent("Adesina Mariam", 89);
    addStudent("Olawale Wasiu", 27);
    addStudent("Adisa Tofumi", 77);
    addStudent("Adekunle Habeeb", 45);
    addStudent("Coker Tofumi", 37);
    addStudent("Omotayo Azeez", 57);
    addStudent("Aliu Tawa", 80);
    addStudent("Adewale Tofarati", 50);
    
    // Generate the report
    generateReport();
}

// Run the system
studentReportSystem();
}

// 3. **Find Top & Bottom Student** - Identify the student with the highest and lowest score
// 4. **Grade Categorizer** - Assign letter grades (A, B, C, D, F) based on numeric scores
// 5. **Report Generator** - Print a formatted class report showing:
//    - Each student’s name, grade, and letter grade
//    - Class average
//    - Top student
//    - Lowest student

// **Requirements:**
// - Use arrays to store multiple students
// - Use `for` or `for...of` loops to process data
// - Write at least 5 reusable functions
// - Validate inputs (no negative grades, no grades above 100)
// - Use `Math.max()` and `Math.min()` for comparisons
// - Return results in a well-formatted way (like a table or list)

// **Challenge:**
// Sort the students by grade (highest → lowest) before printing the report.  



// Practice Exercise 3 - Library Membership System 
function libraryMembershipSystem() {
    //  Create an object member with properties: name, membershipType (basic, premium), and borrowedBooks(array)  
    const member = {
    name: "Alabi Peter",
    membershipType: "premium",
    borrowedBooks: [],
    
    //Add a method borrowBook(book) that pushes a book into borrowedBooks  
    borrowBook(book) {
        this.borrowedBooks.push(book);
        console.log(`"${book}" has been borrowed by ${this.name}`);
    },
    
    // Add a method getBorrowedCount() that returns how many books the member has borrowed  
    getBorrowedCount() {
        return this.borrowedBooks.length;
    },
    
    // 4. Add a method getMembershipInfo() that returns a message based on membership type
    getMembershipInfo() {
        if (this.membershipType === "premium") {
        return `${this.name} is a PREMIUM member and can borrow as many times as possible!`;
        } else if (this.membershipType === "basic") {
        return `${this.name} is a BASIC member and can borrow up to 3 books at a time.`;
        } else {
        return `${this.name} has an unknown membership type.`;
        }
    }
    };

    // Check membership
    console.log("Library Membership System");
    console.log("-------------------------");
    console.log(member.getMembershipInfo());
    console.log();

    member.borrowBook("The Great Gatsby");
    member.borrowBook("To Kill a Mockingbird");
    member.borrowBook("1984");
    console.log();

    // Check borrowed count
    console.log(`Total books borrowed: ${member.getBorrowedCount()}`);
    console.log(`Books: ${member.borrowedBooks.join(", ")}`);
    console.log();

    // Create another member with basic membership
    const member2 = {
    name: "John Smith",
    membershipType: "basic",
    borrowedBooks: ["Harry Potter", "The Hobbit"],
    
    borrowBook(book) {
        this.borrowedBooks.push(book);
        console.log(`"${book}" has been borrowed by ${this.name}`);
    },
    
    getBorrowedCount() {
        return this.borrowedBooks.length;
    },
    
    getMembershipInfo() {
        if (this.membershipType === "premium") {
        return `${this.name} is a PREMIUM member with unlimited borrowing privileges!`;
        } else if (this.membershipType === "basic") {
        return `${this.name} is a BASIC member and can borrow up to 3 books at a time.`;
        } else {
        return `${this.name} has an unknown membership type.`;
        }
    }
    };

    console.log("─".repeat(60));
    console.log(member2.getMembershipInfo());
    console.log(`Current borrowed books: ${member2.getBorrowedCount()}`);
    member2.borrowBook("The Catcher in the Rye");
    console.log(`Updated borrowed count: ${member2.getBorrowedCount()}`);
    console.log();

    // Display all borrowed books for both members
    console.log("═".repeat(60));
    console.log("📊 Library Summary:");
    console.log(`${member.name} (${member.membershipType}): ${member.getBorrowedCount()} books`);
    console.log(`${member2.name} (${member2.membershipType}): ${member2.getBorrowedCount()} books`);
}