# ood-question

Different ways to solve if a derived class doesn't want certain super class functionality

```javascript
class Bar {
  constructor() {
    if (this.wantToDoSomething) this.doSomething();
  }

  doSomething() {
    /* functionality not all derived classes want */
  }

  get wantToDoSomething() {
    return true;
  }
}

class Foo extends Bar {
  constructor() {
    super();
  }

  get wantsToDoSomething() {
    return false;
  }
}

// create a Boolean getter on superclass and override on derived class
// and execute doSomething() only conditionally based on this Boolean
```
