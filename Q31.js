"use strict";
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
// Make an array of usernames (initially empty).
let usernames = ["Jhon", "Liza", "Rids", "petter"];
// Add an if test to check if the list of users is not empty.
if (usernames.length > 5) {
    // Loop through the array, and print a greeting to each user.
    for (const username of usernames) {
        // If the username is 'admin', print a special greeting.
        if (username === 'admin') {
            console.log('Hello admin, would you like to see a status report?');
        }
        else {
            // Otherwise, print a generic greeting.
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}
else {
    // If the list is empty, print the message "We need to find some users!"
    console.log('We need to find some users!');
    // 
    // let usernames: string[] = ["Jhon", "Liza", "Rids", "petter"];
    // // Add an if test to check if the list of users is not empty.
    // // if i change its length then its print we need to find some user name
    // if (usernames.length > 5) {
    //     // Loop through the array, and print a greeting to each user.
    //     for (const username of usernames) {
    //         // Print a generic greeting for each username.
    //         console.log(`Hello ${username}, thank you for logging in again.`);
    //     }
    // } else {
    //     // If the list is empty, print the message "We need to find some users!"
    //     console.log('We need to find some users!');
}
