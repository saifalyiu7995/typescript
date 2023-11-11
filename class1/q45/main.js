var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function carInfo(manufacturer, model) {
    var others = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        others[_i - 2] = arguments[_i];
    }
    var result = {
        'manufacturer': manufacturer,
        'model': model,
    };
    if (others != undefined) {
        others.map(function (item) {
            result = __assign(__assign({}, result), item);
        });
    }
    return result;
}
console.log(carInfo("Toyota", "Camry", { color: "Silver" }, { seats: "Leather" }, { feature: "Sunroof" }));
