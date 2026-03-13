//Task1
// Create profile array
let profile = [
  "Alex",                 // username
  25,                     // age
  true,                   // subscription status
  "New York",             // location
  ["reading", "gaming", "traveling"] // hobbies array
];
//Task2

// Log the user's name
console.log("User Name:", profile[0]);

// Log the second hobby
console.log("Second Hobby:", profile[4][1]);

//TASK3

// Update the user's age
profile[1] = 26;

// Add a new hobby
profile[4].push("photography");

//TASK4
// Log the updated profile
console.log("Updated Profile:", profile);