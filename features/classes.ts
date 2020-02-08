class Vehicle {
  constructor(public colour: string) {}

  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('Orange');
console.log(vehicle.colour);

class Car extends Vehicle {
  //notice 'public' modifier not on color
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('Vrooom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, 'Black');
car.startDrivingProcess();
//car.honk();
