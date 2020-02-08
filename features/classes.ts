class Vehicle {
  constructor(public colour: string) {}

  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('Orange');
console.log(vehicle.colour);

class Car extends Vehicle {
  private drive(): void {
    console.log('Vrooom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car('Black');
car.startDrivingProcess();
//car.honk();
