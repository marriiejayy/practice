let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    city: "Boston"
};

let product = {
    name: "Laptop",
    price: 99,
    inStock: true,
    category: "electronics"
};


console.log("Person object:", person);
console.log("Product object:", product);

console.log(""); // Empty line

// 1. Dot notation (most common)
console.log("Using dot notation:");
console.log("First name:", person.firstName);
console.log("Product name:", product.name);
console.log("Product price:", product.price);
console.log("");

// 2. Bracket notation (for dynamic access)
console.log("Using bracket notation:");
console.log("Last name:", person["lastName"]);
console.log("Instock:", product["inStock"]);

let propertyName = "city";
console.log("city:", person[propertyName]);

// Building strings with object properties
console.log("Formatted output:");
console.log(`${person.firstName} ${person.lastName} is ${age} and lives in ${person.city}.`);

