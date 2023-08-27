const person = {
  _name: 'John Doe',
  _age: 0,
  _email: 'johndoe@example.com',

  get name() {
    return this._name;
  },

  get email() {
    return this._email;
  },

  set age(value) {
    this._age = value;
  },

  getAge() {
    return this._age;
  },

  setAge(newAge) {
    if (typeof newAge === 'number' && newAge >= 0) {
      this._age = newAge;
    } else {
      console.log('Invalid age value');
    }
  },
};

// Testing
console.log(person.name); // "John Doe"
console.log(person.email); // "j
