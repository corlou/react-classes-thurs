// class example
class Vehicle {
  constructor(newName) {
    this.name = newName;
  }

  someFunction() {
    console.log("hello world from class");
  }
}
// object example
let someObject = {
  someFunction: () => {
    console.log("Hello world from object")
  }
}
// using the class
someObject.someFunction();
let vehicleInstance = new Vehicle("Warthog");
vehicleInstance.someFunction();
// Vehicle.someFunction();


class Motorbike extends Vehicle {
  constructor(newWheelCount, newName) {
    // constructor for the parent - whatever we have in the parent class (in this case "name"), we have to use here in super
    super(newName);
    this.wheelCount = newWheelCount;
  }
}

class MotorbikeWithSidecar extends Motorbike {
  constructor(newWheelCount, newName) {
    super(newWheelCount, newName);
    this.sideCar = new Sidecar();

  }
}

class Sidecar {
  constructor() {
    this.passengerCount = 1;
  }
}

let MotorbikeInstance = new Motorbike(3, "Harley Davidson");
console.log(`I am a ${MotorbikeInstance.name} and I have ${MotorbikeInstance.wheelCount} wheels`);

let MotorbikeWithSideCar = new MotorbikeWithSidecar(3, "some fancy motorbike");
console.log("This motorbike has passenger count of: " + motorbikeWithSideCar.sideCar.passengerCount)