class Person {
    constructor(name, age, gender, nationality) {
      this.name = name;
      this.age = age;
      this.gender = gender;
      this.nationality = nationality;
    }
  
    introduce() {
      return `My name is: ${this.name}, I am ${this.age} years old, Gender: ${this.gender}, and I am ${this.nationality}`;
    }
  }
  
  class Student extends Person {
    constructor(name, age, gender, nationality, subject) {
      super(name, age, gender, nationality);
      this.subject = subject;
    }
  
    study() {
      return `Studying: ${this.subject}`;
    }
  }
  
  const person1 = new Person("Alice", 25, "Female", "Indian");
  const person2 = new Person("Bob", 30, "Male", "Canadian");
  const person3 = new Person("Eve", 22, "Female", "Australian");
  
  console.log(person1.introduce());
  console.log(person2.introduce());
  console.log(person3.introduce());
  
  const student1 = new Student("Charlie", 19, "Male", "UK", "Computer Science");
  
  console.log(student1.introduce());
  console.log(student1.study());
  