//HW
//if Map not Ava. in Opera , then we will create our own Pollyfill of Map
//foreach() return single element one by one

let songS=['x','z','y'];

songS.forEach((word)=>console.log(word));

//---------------------------------------------

//map() return whole array in one go

let numBer=[1,3,4,5,5];

let returnNumber=numBer.map((num)=>{
return num*2
});

console.log(returnNumber);

//---------------------------------------------

//filter() it same as Map , but here we decide what kind of item we want to return

let arrA=[{age:10,salary:200},{age:30,salary:400},{age:20,salary:500}];

let fir=arrA.filter((word)=>{
    return word.age>10;
});

console.log(fir);

//----------------------------------------------

//reduce()  it reduce array to single value

let arR=[1,2,4,5];

let arRR=arR.reduce((a,b)=>{
    return a+','+b;
})

console.log(arRR);


//---------------------------------------

//Polly Fill for Map()

const userS = [1, 2, 3, 4, 5];

Array.prototype.ourMap = function (cb) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(cb(this[i]));
  }
  return newArray;
};

const newUserS = users.ourMap((x)=>x+x);

console.log(newUsers);

//------------------------------------

//Polly Fill for Filter()

const users = [1, 2, 3, 4, 5];

Array.prototype.ourFilter = function (cb) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
      if(cb(this[i])){
        newArray.push(this[i]);
      }
    
  }
  return newArray;
};

const newUsers = users.ourFilter((x)=>x>=3);

console.log(newUsers);


//-------------------------------------------

//Poly Fill of Reduce()

var arr = [1, 2, 3, 4, 5];


    Array.prototype.ourReduce = function(callback, initialValue) {
     let totalSum=initialValue;
      
     for (let i = 0; i < this.length; i++) {
       totalSum = callback(totalSum, this[i]);
     }
     return totalSum;
    }
 
 //total is initial value
 //num is arr each value
 console.log(arr.ourReduce((total,num) => total + num, 0));


