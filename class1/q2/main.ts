const a = "Saif Ali Qazmi";

console.log('Lower Case');
console.log(a.toLowerCase());
console.log('Upper Case');
console.log(a.toUpperCase());
console.log('Title Case');

let breakName = a.split(' ');

function toTitleCase(inputTitle) {
    return inputTitle.charAt(0).toUpperCase() + inputTitle.substring(1).toLowerCase();
}

if (breakName.length > 1) {
    let conctat = '';
    for (let i = 0; i < breakName.length; i++) {
        conctat += toTitleCase(breakName[i]) + ' ';
    }
    console.log(conctat.trim());
} else {
    console.log(a.charAt(0).toUpperCase() + a.substring(1).toLowerCase());
}
