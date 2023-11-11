let current_users = ["Nabeel", "Eric", "John", "Osama", "Ali"];
let new_users = ["Rehan", "Ammar", "Yahya", "Osama", "Ashfaq"];

current_users.map((current) => {
    if (new_users.indexOf(current) !== -1) console.log(`User name ${current} already exist, need to enter a new username.`);
    else console.log(`User name ${current} is availble`);
});