
let favoriteFruits = ["banana", "apple", "strawberry"];

let fruit_to_check = 'Pine-apple'; //try with strawberry

if (favoriteFruits.indexOf(fruit_to_check.toLowerCase()) !== -1) {
    console.log(`You really like ${fruit_to_check}!`);
} else {
    console.log(`You don't have ${fruit_to_check} among your favorite fruits.`);
}