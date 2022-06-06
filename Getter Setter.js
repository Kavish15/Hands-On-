//HW

//ES 5 Getter Setter

class Employee {
  constructor(name) {
    this.setter(name);
  }

  getter() {
    console.log(this.name);
  }

  setter(newName) {
    this.name = newName;
  }
}

const a = new Employee("Ravi");
console.log(a);
a.getter();
a.setter("Kavish");
a.getter();

//-----------------------------

//ES 6 Get Set Method

class Animal {
  constructor(leg) {
    this._leg = leg;
  }

  get _leg() {
    console.log(this._leg + "Get Legs Method");
  }

  set _leg(newLegs) {
    console.log("Legs Modified");
    this._leg = newLegs;
  }
}

const b = new Animal(4);
console.log(b._leg);
b._leg = 10;
console.log(b._leg);

//--------------------------------

const person = {
  fName: "Ashiwini",
  lName: "Agrwal",
  get fullName() {
    console.log(this.fName + " " + this.lName);
  },
  set fullName(newName){
      const arr=newName.split(' ');
      this.fName=arr[0];
      this.lName=arr[1];
  }
};
person.fullName="Parakh Agrawal";
person.fullName;

//if want full name together
//if want to access it as property
//if want to get modified results
