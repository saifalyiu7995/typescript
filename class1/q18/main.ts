let placesList: string[] = ["Hunza", "Amsterdam", "Columbia", "New York", "Rome"];

placesList.map((e) => console.log(e));



console.log("*** *** *** A to Z *** *** ***");
//shallow copy with slice keyword
placesList.slice().sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())).map((e) => console.log(e));

console.log("*** *** *** Orignal *** *** ***");
placesList.map((e) => console.log(e));

console.log("*** *** *** Z to A *** *** ***");
//shallow copy with slice keyword
placesList.slice().sort((a, b) => b.toLowerCase().localeCompare(a.toLowerCase())).map((e) => console.log(e));

console.log("*** *** *** Orignal *** *** ***");
placesList.map((e) => console.log(e));

console.log("*** *** *** Reversed *** *** ***");
placesList.reverse().map((e) => console.log(e));

console.log("*** *** *** Reversed to Orignal *** *** ***");
placesList.reverse().map((e) => console.log(e));

console.log("*** *** *** A to Z *** *** ***");
placesList.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())).map((e) => console.log(e));

console.log("*** *** *** Z to A *** *** ***");
placesList.sort((a, b) => b.toLowerCase().localeCompare(a.toLowerCase())).map((e) => console.log(e));
