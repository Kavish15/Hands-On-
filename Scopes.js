//var have function scope, 
//let and const have block scope,

function a(){
    function b(){
        console.log(x);
    }
    
    b();
    var x=10;
}
a();

//-----------------------------------------------

console.log(typeof one);
var one=10; // Undefined
console.log(typeof two);
const two=10; // Reference Error with Cont and Let

//--------------------------------------------------------

function a(){  
    var x=10;
    let y=20;
    const z=30;
}
console.log(typeof x);//undefined (because var has function scope!)
console.log(typeof y);//undefined (because the body of the function is a block)
console.log(typeof z);//undefined (because the body of the function is a block)

//---------------------------------------------------------------------

{
    var x=10;
    let y=20;
    const z=30;
}
console.log(typeof x); //number
console.log(typeof y);//undefined
console.log(typeof z);//undefined

//------------------------------------------------

for(var x=1;x<6;++x){}
console.log(x); //6
//if let is used in place of var we will get error 
//and if using let we do typeof X we get Undefined

//---------------------------------------------------

if(false){
    var a=10;
}
console.log(a);//undef (a declared but not defined)
//if , if statement is true and let is used then will get Error.

//-------------------------------------------------------


//The following will declare a property on the global object because variables declared using var within 
//the global context are added as properties to the global object:
var x = 1
console.log(window.hasOwnProperty('x')) // true


//let and const in the global context do not add properties to the global object,
// but still have global scope
let x = 1
console.log(window.hasOwnProperty('x')) // false

//-------------------------------------------------------


function foo(x){

}

console.log(x); //x has function scope so ref error

//------------------------------------

let name1='Kavish';

function main(bol){
function printer(){
    let name2=name1;
    if(bol){
        name2=name1+"!";
    }

    console.log(name1);
    console.log(name2);
}
return printer;
}

const pr=main(true);
pr();

name1='Mihir';

pr();




