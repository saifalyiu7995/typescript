function city_country(city, country) {
    if (country === void 0) { country = "Planet Earth"; }
    return "".concat(city, ", ").concat(country);
}
console.log(city_country('Karachi', 'Pakistan'));
console.log(city_country('Naples', 'Italy'));
console.log(city_country('Dubai', 'UAE'));
