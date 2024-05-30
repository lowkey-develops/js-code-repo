// console.log(2<1)
// console.log(2>1)
// console.log(2>=1)
// console.log(2==1)
// console.log(2!=1)
// console.log("2">1)
// console.log("01"<2) // datatype should be same wont be allowed in typescript

// console.log(null>0) // false becoz comparison checks converts null to 0 and checks if its >0 or not
// console.log(null==0) // false becoz here it does not convert null to 0 as this is an equality check different from comparison checks.
// console.log(null>=0) // true becoz null is equal to 0 here.

// console.log(undefined>0) // false 
// console.log(undefined==0) // false
// console.log(undefined>=0) // false

// Strict check where it checks the datatype as well
// console.log("2"==2) // converts so true
// console.log("2"===2) // strict check so checks the data type so false
// console.log(null===0) // false only
