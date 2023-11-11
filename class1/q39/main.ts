function city_country(city: string, country: string = "Planet Earth"): string {
    return `${city}, ${country}`;
}

console.log(city_country('Karachi', 'Pakistan'));
console.log(city_country('Naples', 'Italy'));
console.log(city_country('Dubai', 'UAE'));
