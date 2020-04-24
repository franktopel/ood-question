class Bar {
  constructor() {
    this.doSomething();
  }

  doSomething() {
    /* functionality not all derived classes want */
  }
}

class Foo extends Bar {
  constructor() {
    super();
  }

  doSomething() {
    this.doNothing();
  }

  doNothing() {
    return;
  }
}

// overriding the unwanted functionality in the derived class with a noop function
