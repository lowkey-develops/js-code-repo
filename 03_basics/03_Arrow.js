const user ={
    username: "Archit",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this)
    }
}
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()
// console.log(this) returns empty object for global scope in node but in browser it will return window and some props

// function chai(){
//     let username= "Archit"
//     console.log(this.username)  // this is for object's context not for any function 
// }

// chai()

// const chai= function (){
//     let username="Archit"
//     console.log(this.username)  // returns undefined again because this is not used in functions context
// }

// const chai= () =>{
//     let username="Archit"
//     console.log(this)  // only this returns an empty object and this.username as we discussed returns undefined as it is in a function
// }

// chai()

// const addTwo= (num1, num2) =>{
//     return num1+num2
// }

// const addTwo= (num1, num2) => num1+num2 // we use this syntax when there is only one line to execute which is the implicit return
//                                         // here the fucntion implicitly returns num1+num2 without using the return statement and without {}

// const addTwo = (num1,num2) => (num1+num2) // whatever you want to return you can write it in () to make it understandable

const addTwo = (num1, num2) => ({username: "Archit"})  // here it returns an object implicitly

console.log(addTwo(3,9))