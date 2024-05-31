//const tinderUser=new Object()//Singleton Object created
const tinderUser={}  //not singleton as studied in last object series

tinderUser.id="123abc"
tinderUser.name="Sunny"
tinderUser.isLoggedIn=false
// console.log(tinderUser)


const regularUser={
    email:"Archit@google.com",
    fullname:{
        userFullName:{
            firstName:"Archit",
            MiddleName:"Kumar",
            LastName:"Sinha"
        }

    }
}
//console.log(regularUser.fullname.userFullName.MiddleName)



const obj1={1:"a", 2:"b"}
const obj2={3:"c",4:"d"}
const obj4={5:"e",6:"f"}

//const obj3={obj1,obj2}// problematic way to join two objects
//const obj3= Object.assign({}, obj1,obj2,obj4)// Object.assign(target,source) here an empty object {} is used as target
const obj3={...obj1,...obj2} // use this spread to merge anything
//console.log(obj3)


const users=[
    {
        id:"1",
        name:"Archit"
    },
    {
        id:"2",
        name:"Archit"
    },
    {
        id:"3",
        name:"Archit"
    }
]
users[1].name
console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty("isLoggedIn")) // checks for property and returns boolean

