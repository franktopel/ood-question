# ood-question

Different ways to solve if a derived class doesn't want certain super class functionality

```javascript
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
```

| Pros                                                              | Cons                                                                         |
| ----------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| cleanest solution - everyone gets only and exactly what they need | will over time probably lead to many otherwise unnecessary subclasses of Foo |
