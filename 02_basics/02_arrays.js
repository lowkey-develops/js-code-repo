const marvel_heros=["thor","iron-man","spider-man"]
const dc_heros=["superman","flash","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// console.log(marvel_heros[3][1])
//CONCAT
// const allheros=marvel_heros.concat(dc_heros)
// console.log(allheros)
//SPREAD
// const all_new_heros=[...marvel_heros,...dc_heros]// you can add more arrays not only two like in concat you are limited
// console.log(all_new_heros)
//REMOVE ARRAY INSIDE ARRAY
// const anotherArray=[1,2,3,[3,4,5],5,[4,6,7,[6,7,8]]]
// const real_anotherArray=anotherArray.flat(Infinity) //INSTEAD OF INFINITY USE NUMBERS TO WHICH LEVEL 
// console.log(real_anotherArray)
console.log(Array.isArray(dc_heros))//true
console.log(Array.isArray("Archit"))//flase

console.log(Array.from("Archit"))
console.log(Array.from({name: "archit"}))// INTERESTING CASE FOR INTERVIEWS CANNOT CONVERT TO ARRAY WILL HAVE TO DEFINE...

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))