var current_users = ["Nabeel", "Eric", "John", "Osama", "Ali"];
var new_users = ["Rehan", "Ammar", "Yahya", "Osama", "Ashfaq"];
current_users.map(function (current) {
    if (new_users.indexOf(current) !== -1)
        console.log("User name ".concat(current, " already exist, need to enter a new username."));
    else
        console.log("User name ".concat(current, " is availble"));
});
