# JavaScript 的各种设计模式

|  类型  |                                                                名称                                                                 |
| :----: | :---------------------------------------------------------------------------------------------------------------------------------: |
| 创建型 | [抽象工厂模式](https://github.com/1360151219/JavaScript-design-patterns/blob/master/creational/AbstractFactory/abstract-factory.js) |
| 创建型 |           [工厂模式](https://github.com/1360151219/JavaScript-design-patterns/blob/master/creational/Factory/factory.js)            |
| 创建型 |         [原型模式](https://github.com/1360151219/JavaScript-design-patterns/blob/master/creational/Prototype/prototype.js)          |
| 创建型 |         [单例模式](https://github.com/1360151219/JavaScript-design-patterns/blob/master/creational/Singleton/singleton.js)          |
| 创建型 |          [创建者模式](https://github.com/1360151219/JavaScript-design-patterns/blob/master/creational/Builder/builder.js)           |
| 结构型 |          [适配器模式](https://github.com/1360151219/JavaScript-design-patterns/blob/master/structural/Adapter/adapter.js)           |
| 结构型 |            [桥接模式](https://github.com/1360151219/JavaScript-design-patterns/blob/master/structural/Bridge/bridge.js)             |
| 结构型 |         [组合模式](https://github.com/1360151219/JavaScript-design-patterns/blob/master/structural/Composite/composite.js)          |
| 结构型 |        [装饰器模式](https://github.com/1360151219/JavaScript-design-patterns/blob/master/structural/Decorator/decorator.js)         |
| 结构型 |            [外观模式](https://github.com/1360151219/JavaScript-design-patterns/blob/master/structural/Facade/facade.js)             |
| 结构型 |         [享元模式](https://github.com/1360151219/JavaScript-design-patterns/blob/master/structural/Flyweight/flyweight.js)          |

## 创建型

### 生产者模式

> separate the construction of a complex object from its representation, allowing the same construction process to create various representations.

### 单例模式

> Singleton: ensure a class has only one instance, and provide a global point of access to it.

始终返回一个全局的类。如全局的弹窗对象...

### 原型模式

### 工厂模式

### 抽象工厂模式

## 结构型

### 适配器模式

> Adapter: allows classes with incompatible interfaces to work together by wrapping its own interface around that of an already existing class.

### 桥接模式

> Bridge: decouples an abstraction from its implementation so that the two can vary independently.

我认为跟组合模式很相似，但组合模式是将一类型的组件组合起来，而桥接模式是可以将多种不同类型的东西组合

### 组合模式

> Composite: composes zero-or-more similar objects so that they can be manipulated as one object.

将一些小的对象组合成大的对象，使得可以很容易的添加一些子组件，使用的时候只需要用组合起来的大组件对象即可。

### 装饰器模式

> Decorator: dynamically adds/overrides behaviour in an existing method of an object.

在已存在的对象函数中添加新的行为！

### 外观模式

> Facade: provides a simplified interface to a large body of code.

有点类似组合模式，但主要用于封装同类函数或者一类逻辑函数等，对接口和调用者进行了一定程度上的解耦。

### 享元模式

> Flyweight: reduces the cost of creating and manipulating a large number of similar objects.

运用共享技术有效地支持大量细粒度的对象。有效降低效率和内存的消耗。
