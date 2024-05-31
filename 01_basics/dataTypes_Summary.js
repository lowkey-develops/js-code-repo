// Primitive and Non-primitive data types, categorised on the basis of how data is stored and accessed

// Primitive (when called called by value, which means copy of the data is sent no the original data)
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

//Non-primitive (reference type)
// Array, Objects, functions

// ++++++++++++++++++++++++++++++++++++++++++++++
let myName="ArchitKrSinha"
let oldName=myName
oldName="NirbhaySinha"

// console.log(myName)
// console.log(oldName);  // myName value does not change as oldName only gets a copy, because it uses stack memory in primitive data type.

let userOne ={
    email: "Archit@google.com",     // as objects are stored in heap memory as they are non-primitive and reference or change reflects the original value in heap
    upi:"UserOne@axl"
}
console.log(userOne.email)

let userTwo=userOne

userTwo.email="Nirbhay@google.com"
console.log(userTwo.email)
console.log(userOne.email)         // value in heap changed...

