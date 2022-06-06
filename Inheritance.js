class Animal{
    constructor(leg){
        this.leg=leg;
    }
    walk(){
        console.log("Animal has " + this.leg + " Legs");
    }
}

class Bird extends Animal{
    constructor(leg){
        super(leg);
    }

    fly(){
        console.log("Flying");
    }
    walk(){
        super.walk();
        console.log("Walking");
    }
}

const bird1=new Bird(10);
bird1.walk();
bird1.fly();
