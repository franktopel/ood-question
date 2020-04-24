const BAR_DEFAULT_OPTIONS = {
  wantsToDoSomething: true;
}

class Bar {
  constructor(options = {}) {
    this.options = { ...BAR_DEFAULT_OPTIONS, ...options };
    if (this.options.wantsToDoSomething)
      this.doSomething();
  }

  doSomething() {
    /* functionality not all derived classes want */
  }
}

class Foo extends Bar {
  constructor({ wantsToDoSomething: false }) {
    super();
  }
}

// add an options parameter to the superclasses' constructor
// containing Booleans/data controlling the superclasses' behaviour
