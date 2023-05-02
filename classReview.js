class Vehicle {
  constructor(newName) {
    this.name = newName;
  }

  someFunction() {
    console.log("hello world from class");
  }
}

let someObject = {
  someFunction: () => {
    console.log("Hello world from object")
  }
}

someObject.someFunction();
let vehicleInstance = new Vehicle("Warthog");
vehicleInstance.someFunction();
// Vehicle.someFunction();
