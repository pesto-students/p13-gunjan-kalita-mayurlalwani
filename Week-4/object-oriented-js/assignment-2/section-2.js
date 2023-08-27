class Shape {
  calculateArea() {}
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
}

class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }

  calculateArea() {
    return (this.base * this.height) / 2;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}

const rectangle = new Rectangle(5, 10);
const triangle = new Triangle(4, 6);
const circle = new Circle(3);

console.log('Rectangle Area:', rectangle.calculateArea()); // Output: 50
console.log('Triangle Area:', triangle.calculateArea()); // Output: 12
console.log('Circle Area:', circle.calculateArea()); // Output: 28.274333882308138
