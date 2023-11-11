var placesList = ["Hunza", "Amsterdam", "Columbia", "New York", "Rome"];
placesList.map(function (e) { return console.log(e); });
console.log("*** *** *** A to Z *** *** ***");
//shallow copy with slice keyword
placesList.slice().sort(function (a, b) { return a.toLowerCase().localeCompare(b.toLowerCase()); }).map(function (e) { return console.log(e); });
console.log("*** *** *** Orignal *** *** ***");
placesList.map(function (e) { return console.log(e); });
console.log("*** *** *** Z to A *** *** ***");
//shallow copy with slice keyword
placesList.slice().sort(function (a, b) { return b.toLowerCase().localeCompare(a.toLowerCase()); }).map(function (e) { return console.log(e); });
console.log("*** *** *** Orignal *** *** ***");
placesList.map(function (e) { return console.log(e); });
console.log("*** *** *** Reversed *** *** ***");
placesList.reverse().map(function (e) { return console.log(e); });
console.log("*** *** *** Reversed to Orignal *** *** ***");
placesList.reverse().map(function (e) { return console.log(e); });
console.log("*** *** *** A to Z *** *** ***");
placesList.sort(function (a, b) { return a.toLowerCase().localeCompare(b.toLowerCase()); }).map(function (e) { return console.log(e); });
console.log("*** *** *** Z to A *** *** ***");
placesList.sort(function (a, b) { return b.toLowerCase().localeCompare(a.toLowerCase()); }).map(function (e) { return console.log(e); });
