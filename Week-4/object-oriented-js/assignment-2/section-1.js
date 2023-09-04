class Vehicle {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  }

  drive() {
    console.log(`Driving ${this.make} ${this.model}.`);
  }
}

class Car extends Vehicle {
  constructor(make, model, year, color, numSeats) {
    super(make, model, year, color);
    this.numSeats = numSeats;
  }
}

class RideShareCar extends Car {
  constructor(make, model, year, color, numSeats, isAvailable) {
    super(make, model, year, color, numSeats);
    this.isAvailable = isAvailable;
  }
}

const rideShareCar1 = new RideShareCar(
  'Toyota',
  'Hyryder',
  2023,
  'Silver',
  4,
  true
);

const rideShareCar2 = new RideShareCar('Honda', 'City', 2022, 'Blue', 5, false);

rideShareCar1.drive(); // Output: Driving Toyota Camry.
rideShareCar2.drive(); // Output: Driving Honda Civic.
