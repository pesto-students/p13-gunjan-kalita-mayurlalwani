class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    return a / b;
  }
}

class ScientificCalculator extends Calculator {
  square(num) {
    return num * num;
  }

  cube(num) {
    return num * num * num;
  }

  power(base, exponent) {
    return Math.pow(base, exponent);
  }
}

const scientificCalculator = new ScientificCalculator();

// Using call method to invoke add from Calculator class
const resultAdd = Calculator.prototype.add.call(scientificCalculator, 10, 5);
console.log('Result of adding:', resultAdd);

// Using apply method to invoke subtract from Calculator class
const resultSubtract = Calculator.prototype.subtract.apply(
  scientificCalculator,
  [10, 5]
);
console.log('Result of subtracting:', resultSubtract);

// Using bind method to create multiplyByTwo method
const multiplyByTwo = Calculator.prototype.multiply.bind(
  scientificCalculator,
  2
);
console.log('Result of multiplying by two:', multiplyByTwo(5));

// Using bind method to create powerOfThree method
const powerOfThree = Calculator.prototype.power.bind(scientificCalculator, 3);
console.log('Result of raising to the power of three:', powerOfThree(2));
