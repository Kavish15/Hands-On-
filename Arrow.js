let fab=(names,age)=>{

    console.log('Hello World');
}
fab();

//---------------------------

let age=5;

let calculate=(age<10)?
()=>console.log('Baby'):
()=>console.log('Adult');

calculate();

//-------------------------------

function fabs(){
    this.age=10;
    this.name='ravi';
    this.pName=function(){
        console.log(this.age);
        let self=this;
        function pNameInner(){
        console.log(self.name);
        console.log(self);
        }
        pNameInner();
    }
}

const a=new fabs();
a.pName();

//-------------------------------------

//You should not use arrow functions to create methods inside objects.
//You cannot use an arrow function as a constructor
//arrow functions don’t have the prototype property

//---------------------------------

let add=(x,y)=>x+y;
console.log(add(10,20));
console.log(typeof add);


//------------------------------

let num=[2,4,10,5];
num.sort((a,b)=>b-a);
console.log(num);

//---------------------------



