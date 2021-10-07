const { TestWatcher } = require('@jest/core');
const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14,9);
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
});

test("1.2 dollars should be 127.9 yens", function(){
    const { fromDollarToYen } = require('./app.js')
    expect(fromDollarToYen(2.4)).toBe(255.8);
});

test("127.9 yens should be 0.8 british pounds", function(){
    const { fromYenToPound } = require('./app.js')
    expect(fromYenToPound(255.8)).toBe(1.6);
});