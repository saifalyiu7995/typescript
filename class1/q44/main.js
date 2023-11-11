function orderSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich ordered with the following items:");
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        console.log("- ".concat(item));
    }
    console.log("Enjoy your sandwich!\n");
}
orderSandwich("Bread", "Cheese", "Tomato", "Lettuce", "Chicken");
orderSandwich("Rye Bread", "Turkey", "Swiss Cheese", "Mustard");
orderSandwich("Ciabatta", "Salami", "Provolone", "Peppers", "Onions", "Mayo");
