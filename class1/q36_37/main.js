function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I love TypeScript"; }
    return "Size of this T-shirt is ".concat(size, "\nMessage is: ").concat(printMessage);
}
console.log(make_shirt('Medium', 'Do the epic shit!'));
console.log(make_shirt());
