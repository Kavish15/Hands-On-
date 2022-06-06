const employee={
    fName:'John',
    age:10,
    post:'Developer',
};
//you are reassign the const arr ki prop
// employee.age=20;
//here fname=employee.age

employee={
    fName:'Abc',
    age:20,
    post:'loper',
};

let {fName,age,post}=employee;
// age=20;


console.log(fName);
console.log(age);
console.log(post);

//in array while destructuring u can use X  Y  Z
//but in case of Obj need to use same name as of key of Obj 
//Skip the Key {fName, , post}


//---------------------------------------------

//Swap of Variable

let xa=10;
let yb=20;

[yb,xa]=[xa,yb];

console.log(xa);
console.log(yb);

//-----------------------------------------------


let arrT=[10,20,30,40,50];

let [x,...y]=arrT;
console.log(x);
console.log(y);

//...  Spread Operator Should be only used at End 
//[...x , y] In Correct throws error 


//-----------------------------------------------

let arr=[10,20,30];

let [ax,,by]=arr;
console.log(ax);
console.log(by);

//we skip value in arr , but not in Obj

//-------------------------------