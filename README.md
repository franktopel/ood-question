# ood-question

Different ways to solve if a derived class doesn't want certain super class functionality

```javascript
const BAR_DEFAULT_OPTIONS = {
  wantsToDoSomething: true,
};

class Bar {
  /**
   * @param {object} [options] options object controlling the behaviour of Bar
   */
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

| Pros                               | Cons                                                   |
| ---------------------------------- | ------------------------------------------------------ |
| explicit in the code               | seems a little verbose at first glance                 |
| imo most readable solution         | requires an additional, optional constructor parameter |
| makes use of javascript idiomatics | makes use of javascript idiomatics                     |
| universal, unified approach        |                                                        |
| avoids having to override methods  |                                                        |
