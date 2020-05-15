'use strict'

let someMass = ['4', 5, 888, 3, 'a2', '1', 666, 75, '23', 'Tracer', 6666, 12, 89, 22]

let numberMass = someMass.filter(function (number) {
    if (typeof number === 'number')
        return number
})

console.log(numberMass)

//////////////////////////////////////////////////////////////////////////////////////

let evenNumber = numberMass.map(function (number) {
    if (number % 2 != 0) return number = 2
    else return number
})

console.log(evenNumber)

///////////////////////////////////////////////////////////////////////////////////////

evenNumber.reverse()
console.log(evenNumber)

////////////////////////////////////////////////////////////////////////////////////////

let reserveNumber = evenNumber.forEach(function (number, i) {
    console.log(`Number №${i} - ${number}`)
})

////////////////////////////////////////////////////////////////////////////////////////

let sumNumber = evenNumber.reduce(function (sum, el) {
    return sum + el
})

console.log(sumNumber)