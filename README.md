## 5 - Dependency resolution

Using external modules you can register classes giving them a `name`.

```ts

import IoC        = require('../core/IoC');
import Resolvable = require('../core/Resolvable');

// Class you want to register
import ClassA     = require('./ClassA');

// Using the Interface to resolve the registered class
import InterfaceA = require('./InterfaceA');

// Create an instance of the class
var classA = new ClassA('http://google.de');

var ioc = new IoC();
    ioc.register(new Resolvable('classA', classA));

var resolved = ioc.resolve<InterfaceA>('classA');
    resolved.greet();

```
