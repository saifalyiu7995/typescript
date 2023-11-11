function carInfo(manufacturer: string, model: string, ...others: any[]) {

    let result = {
        'manufacturer': manufacturer,
        'model': model,
    };

    if (others != undefined) {
        others.map((item) => {
            result = {
                ...result,
                ...item
            }
        })

    }

    return result;
}

console.log(carInfo("Toyota", "Camry", { color: "Silver" }, { seats: "Leather" }, { feature: "Sunroof" }));

