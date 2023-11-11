var pets = ["Cat", "Dog", "Goat"];
for (var _i = 0, pets_1 = pets; _i < pets_1.length; _i++) {
    var pet = pets_1[_i];
    if (pet == 'Cat') {
        console.log("I love ".concat(pet, ", they are great."));
    }
    else if (pet == 'Dog') {
        console.log("".concat(pet, " is not just a pet, he is your friend he consider itself a member of your family."));
    }
    else {
        console.log("".concat(pet, "s are just love and they are so cute."));
    }
}
console.log('Research proof that pets can reduce one\'s anxiety and depression.');
