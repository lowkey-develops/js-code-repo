//var c=300
let a=300 // Global Scope as it is not confined in any {}

if(true){
    let a=10
    const b=20
    // console.log("INNER:", a)
    // c=30    
}

// console.log(a)
// console.log(b)
//console.log(c) // this is why we dont use var as it does not obey scope c, which is inside the if block should not be the same outside the block
               // so it is important to define let or const inside a block scope if you write c=30, this also acts like var
               // this is local scope and anything declared outside is global scope
               // Just a point to remember that scope in browser is different from scope in Node that we use outside the browser.
function one(){
    const username="Archit"

    function two(){
        const website="youtube"
        console.log(username)
    }
    // console.log(website) cannot be used outside the scope of where it is declared which is function two
    two()
}
// one()

if(true){
    const username="Archit"
    if(username==="Archit"){
        const website="youtube";
        // console.log(username+website)
    }
    // console.log(website) cannot be used outside the if block scope
}
// console.log(username) cannot be used outside if block scope

// ++++++++++ INTERESTING +++++++++++

// console.log(addone(5))

function addone(num){
    return num + 1
}

// addTwo(5)   // this wont work because you cannot use addTwo before initialization and it brings in concepts of hoisting 
const addTwo=function(num){
    return num+2
}

