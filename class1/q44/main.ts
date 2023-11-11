function orderSandwich(...items: string[]): void {
    console.log("Sandwich ordered with the following items:");
    for (let item of items) {
        console.log(`- ${item}`);
    }
    console.log("Enjoy your sandwich!\n");
}

orderSandwich("Bread", "Cheese", "Tomato", "Lettuce", "Chicken");
orderSandwich("Rye Bread", "Turkey", "Swiss Cheese", "Mustard");
orderSandwich("Ciabatta", "Salami", "Provolone", "Peppers", "Onions", "Mayo");