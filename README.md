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

  get wantsToDoSomething() {
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

| Pros                                                              | Cons                                                                  |
| ----------------------------------------------------------------- | --------------------------------------------------------------------- |
| universal, unified approach                                       | requires an additional getter in both classes                         |
| readable solution                                                 | a little less explicit than variant3, but still readable              |
| makes use of javascript idiomatics (javascript accessor property) | makes use of javascript idiomatics (javascript accessor property)     |
|                                                                   | can over time create a lot of additional properties on the superclass |
|                                                                   |  the purpose of these getters is not immediately clear                |
|                                                                   | no central place to ask an instance for its configuration options     |
