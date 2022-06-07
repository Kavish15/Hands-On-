let multi=function(x,y){

    return x*y;
}

let multiByTwo=multi.bind(this,2);
console.log(multiByTwo(3));


//--------------------------------

let multiC=function(x){
    return function(y){
        return x*y;
    }
}

let multiByTwoC=multiC(2);
console.log(multiByTwoC(4));
console.log();


