
function make_shirt(size: string = "Large", printMessage: string = "I love TypeScript"): string {
    return `Size of this T-shirt is ${size}\nMessage is: ${printMessage}`;
}

console.log(make_shirt('Medium', 'Do the epic shit!'));
console.log(make_shirt());