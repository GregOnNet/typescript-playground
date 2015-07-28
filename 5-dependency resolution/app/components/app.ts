import IoC        = require('../core/IoC');
import Resolvable = require('../core/Resolvable');
import ClassA     = require('./ClassA');
import InterfaceA     = require('./InterfaceA');

var classA = new ClassA('http://google.de');

var ioc = new IoC();
    ioc.register(new Resolvable('classA', classA));

    var resolved = ioc.resolve<InterfaceA>('classA');
        resolved.greet();
