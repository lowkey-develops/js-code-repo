let myDate= new Date()
// console.log(myDate)
// console.log(myDate.toDateString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleDateString())

// console.log(typeof myDate)

// let myNewDate= new Date(2023,6,24) //format1
// let myNewDate= new Date(2023,6,24,5,3)
// let myNewDate= new Date("2023-01-31")
let myNewDate= new Date("01-31-2023")
// console.log(myNewDate.toLocaleString())

let myTimeStamp=Date.now()
// console.log(myTimeStamp)
// console.log(myNewDate.getTime())

// console.log(Math.floor(myNewDate.getTime()/1000))

let newDate=new Date()
// console.log(newDate)
// console.log(newDate.toLocaleString())
// console.log(newDate.getDay())
// console.log(newDate.getMonth()+1)

newDate.toLocaleString('default', {
    weekday: "long",
})

console.log(newDate.toLocaleString('default', {
    weekday: "long",
}))  // returns weekday in long form as Friday


