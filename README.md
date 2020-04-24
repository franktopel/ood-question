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
}

// so how do we fix when Foo doesn't want what Bar's doSomething() does?
```
