import IoC        = require('./IoC');
import Resolvable = require('./Resolvable');
import c          = require('./ClassA');

var classA = new c.ClassA('http://google.de');

var ioc = new IoC();
    ioc.register(new Resolvable('classA', classA));
    var resolved:c.InterfaceA = ioc.resolve<c.InterfaceA>('classA');
    resolved.greet();

    ioc.printAll();
