//array
const myArr=[1, 2, 3, 4, 5, 6]
const myheros=["shaktimaan", "naagraj"]
const myArr2= new Array(1,2,3,4,5)
// console.log(myArr2[3])

// Array Methods

// myArr.push(3)
// myArr.push(8)
// myArr.pop()
// console.log(myArr)
// myArr.unshift(3)
// console.log(myArr)
// myArr.shift()// no arguments passed used to undo unshift or insertion at the first position
// console.log(myArr)


// console.log(myArr.includes(19)) // since there is no 19 so false is returned
// console.log(myArr.indexOf(19)) // since 19 is not there it returns -1 as the value

// const newArr=myArr.join()
// console.log(typeof newArr) 

//slice and splice
console.log("A", myArr)
const myn1=myArr.slice(1,3)
console.log(myn1)
console.log("B", myArr)
const myn2=myArr.splice(1,3) //splice manipulates the original array removes the part from index 1 and including 3
console.log(myn2)
console.log("C", myArr)


