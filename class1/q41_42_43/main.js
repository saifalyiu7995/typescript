var magicianList = ['Nabeel', 'Ammar', 'Osama', 'Saif', 'Rehan'];
var magicianListCopy = [];
function show_magicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
show_magicians(magicianList);
function make_great() {
    magicianListCopy = magicianList.map(function (e) { return "The Great ".concat(e); });
}
make_great();
show_magicians(magicianList);
show_magicians(magicianListCopy);
