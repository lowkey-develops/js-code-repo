//when objects are made through object constructor it is Singleton otherwise if made 
//by literal method its not singleton

//OBJECT LITERAL
const mySym1= Symbol("key1")

const JsUser={
    name:"Archit",
    "fullName":"Archit Kumar Sinha",
//    mySym1:"myKey1",// here it is not being used as a symbol
    [mySym1]: "myKey1",// use square brackets for symbol inside a object
    age:"18",
    location:"Kolkata",
    email: "archit@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}
// console.log(JsUser.email)// avoid this
// console.log(JsUser["email"])// correct way to access a object value through key
// console.log(JsUser["fullName"])//you cannot access full name with dot like in line 14 with ".email"
// console.log(typeof JsUser.mySym1)
// console.log(JsUser[mySym1])

JsUser.email="Archit@chatgpt.com"//email changed
//Object.freeze(JsUser)// object freezed
JsUser.email="Archit@microsoft.com"// cannot change as object is freezed
//console.log(JsUser)

JsUser.greeting= function(){
    console.log("Hello Js User")
}
//console.log(JsUser.greeting) // returns function anonymous, which is a function return back
console.log(JsUser.greeting())

JsUser.greetingTwo= function(){
    console.log(`Hello Js User, ${this.name}`)
}
console.log(JsUser.greetingTwo())
console.log(JsUser)