# ood-question

Different ways to solve if a derived class doesn't want certain super class functionality

```javascript
const BAR_DEFAULT_OPTIONS = {
  wantsToDoSomething: true,
};

class Bar {
  constructor(options = {}) {
    this.options = { ...BAR_DEFAULT_OPTIONS, ...options };
    if (this.options.wantsToDoSomething) this.doSomething();
  }

  doSomething() {
    /* functionality not all derived classes want */
  }
}

class Foo extends Bar {
  constructor() {
    super({ wantsToDoSomething: false }); // Foo tells Bar it doesn't want to doSomething()
  }
}

// add an options parameter to the superclasses' constructor
// containing Booleans/data controlling the superclasses' behaviour
```
