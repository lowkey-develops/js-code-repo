

function saymyName(){
    console.log("a")
    console.log("r")
    console.log("c")
    console.log("h")
    console.log("i")
    console.log("t")
}

//saymyName // this is giving reference to the function and saymyName() i.e with parenthesis is executing the function.
//saymyName()
// function addTwoNumbers(num1, num2){
//     console.log(num1+num2)
// }

function addTwoNumbers(num1, num2){
    // let  result=num1+num2
    // return result // return should always be the last line in the function as no code after the return statement is executed.
    //console.log("archit")// wont be executed but if written above return statement it will execute.
    return num1+num2
}

// addTwoNumbers(3,4)// returns 7 when both are number data type
// addTwoNumbers(3,"4")// returns 34 as it thinks if 4 is a string 3 must be a string this is javascript
// addTwoNumbers(3, null)// onlu returns 3

// when you pass some values while calling functions they are called arguments eg. addTwoNumbers(3,4) and when you create a function
// and add values to accept they are called parameters.
// const result = addTwoNumbers(3,5)
// console.log("Result: ",result) // there is no value in result as the function did not return any value so result is undefined 

function loginUserMessage(username)// if you want a default value just write it, eg. (username="Arun"), and if an argument is passed it will overide
{
    if(username===undefined) // this can also be written as (!username)
        {
        console.log(`Please enter a username`)
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage())
// console.log(loginUserMessage("archit"))

function calculateCartPrice(...num3)  // the ... operator is called spread and rest depends on the usecase what its called
{
    return num3
}
// console.log(calculateCartPrice(100,200,300))

const user={
    username: "Archit",
    price: 199
}

// function handleObject(anyObject){
//     console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
// }
// // handleObject(user)
// handleObject({
//     username: "sam",
//     price: 499
// })

const myNewArray=[200,100,400]
function returnSecondValue(getArray){
    return getArray[0]
}
console.log(returnSecondValue(myNewArray))