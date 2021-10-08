// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * oneEuroIs["USD"];
    // retornamos el valor
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    // convertimos primero a euros y luego a yenes
    let valueInYen = (valueInDollar / oneEuroIs["USD"]) * oneEuroIs["JPY"];
    return valueInYen;
}

const fromYenToPound = function(valueInYen){
    // convertimos primero a euros y luego a pounds.
    let valueInPound = (valueInYen / oneEuroIs["JPY"]) * oneEuroIs["GBP"];
    return valueInPound;
}

const sum = (a,b) => {
    return a+b;
}

console.log(sum(7,3));

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };