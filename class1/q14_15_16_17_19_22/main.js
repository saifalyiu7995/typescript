//################################### Question 14, 15, 16, 17, 19 and 22 ###################################
var listOfPersons = ['M Ali Jinnah', 'Albert Einstein', 'Rick Sanchez'];
for (var i = 0; i < listOfPersons.length; i++) {
    if (i == 0) {
        console.log("Greeting to the great Quaid ".concat(listOfPersons[0], "; but Why did you put all your efforts and life long struggle for these morons?"));
    }
    else if (i == 1) {
        console.log("Welcome to the future Sir ".concat(listOfPersons[1], "."));
    }
    else {
        console.log("Wubba Lubba dub dub. ".concat(listOfPersons[2]));
    }
}
console.log("Unfortunately, ".concat(listOfPersons[2], " couldn't make it to our gathering because he got caught up in the interdimensional conference of Ricks at the Citadel, so we invited his grandson Mortimer Chauncey Smith aka \"Morty\""));
listOfPersons[2] = 'Morty Smith';
for (var i = 0; i < listOfPersons.length; i++) {
    if (i == 0) {
        console.log("Greeting to the great Quaid ".concat(listOfPersons[0], "; but Why did you put all your efforts and life long struggle for these morons?"));
    }
    else if (i == 1) {
        console.log("Welcome to the future Sir ".concat(listOfPersons[1], "."));
    }
    else {
        console.log("Hey ".concat(listOfPersons[2], ", what is the secret recipe for concentrated dark matter"));
    }
}
console.log("Exciting update! Initially booked a table for three, but Continental just surprised us with a dining table for six. Ready for a more spacious and delightful dinner experience! with some more friends.");
listOfPersons.unshift('Snoop Dogg');
listOfPersons.push('Saad Pasha');
listOfPersons.splice(listOfPersons.length / 2, 0, 'Nabeel Abba');
for (var i = 0; i < listOfPersons.length; i++) {
    console.log("Welcome to the interdimensional party ".concat(listOfPersons[i]));
}
while (listOfPersons.length > 2) {
    var removedGuest = listOfPersons.pop();
    if (removedGuest) {
        console.log("Sorry, ".concat(removedGuest, ", I can't invite you to dinner."));
    }
}
console.log("Final guest list:", listOfPersons);
console.log("Totoal number of guest:", listOfPersons.length);
//Intentional Error
// let elementAtIndexTen = listOfPersons[10];
// console.log(elementAtIndexTen);
