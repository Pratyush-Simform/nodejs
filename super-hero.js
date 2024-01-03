class SuperHero {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }
}

// module.exports = new SuperHero("Spider-man"); // here we are passing an instance of the class which will have its value cached

module.exports = SuperHero; // here we are passing the class itself so it will create a new instance every time it's required
