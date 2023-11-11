
let usernames = ["admin", "Eric", "John", "Alice", "Bob"];

//uncomment next line for else statement
// usernames = [];

if (usernames.length > 0) {
    for (let username of usernames) {
        if (username.toLowerCase() === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
} else {
    console.log("We need to find some users!");
}
