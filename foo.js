class Bar {
  constructor() {
    // no longer calls this.doSomething()
  }
}

class Baz extends Bar {
  constructor() {
    this.doSomething();
  }
  doSomething() {
    /* functionality not all derived classes want */
  }
}

// classes that don't want doSomething() extend Bar directly
class Foo extends Bar {
  constructor() {
    super();
  }
}

// classes that want doSomething() extend Baz which inherits from Bar
class FooBar extends Baz {
  constructor() {
    super();
  }
}

// expand the class hierarchy so derived classes never get what they don't want/need
