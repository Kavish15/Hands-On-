let names={
    firstName:'Kavish',
    lastName:'Garg',
};

let fullName=function(address,state){
    console.log("My Full Name is " +this.firstName+" "+this.lastName +" "+address +" " +state);
}

Function.prototype.ownBind=function(...args){
let obj=this;
let param=args.slice(1);

    return function(...ag){
        obj.apply(args[0],[...param,...ag]);
    }
}

let newFun=fullName.ownBind(names,"Paris");
newFun("Mathura");