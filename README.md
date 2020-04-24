# ood-question

Different ways to solve if a derived class doesn't want certain super class functionality

```javascript
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
```

| Pros                                 | Cons                                                                                                                         |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| requires the least amount of changes | seems like an anti-pattern "negative inheritance"                                                                            |
|                                      | requires Foo to implement methods it doesn't need by itself                                                                  |
|                                      | debugging can be irritating, e.g. when you set a breakpoint in Bar's doSomething() and wonder why your code won't halt there |
