function one(){
    let a=10;
    function two(){
        console.log(a);
    }
    two();
}

one();


//-----------------------------

function foo(){
    let i=10;
    setTimeout(function(){
console.log(i);
    },2000);

    console.log("Hello World")
}

foo();