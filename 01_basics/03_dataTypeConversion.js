let score="33abc"

console.log(typeof score)
console.log(typeof(score))
let valueInNumber= Number(score)
console.log(valueInNumber)
console.log(typeof(valueInNumber))

let score2= null //null when converted to number gives 0. So be careful when youre using null with temp
/*  To Number conversion
    "33" => 33
    "33abc" => NaN (Not a Number)
    true => 1; flase => 0

    To Boolean conversion
    1 => true; 0 => flase
    "" => false
    "Archit" => true

    To String conversion
    Converts to string directly
    */
