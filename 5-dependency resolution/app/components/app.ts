import i = require('./IoC');
import c = require('./ClassA');

var classA = new c.ClassA('http://google.de');

var ioc = new i.IoC();
    ioc.register(new i.Resolvable('classA', classA));
    var resolved:c.InterfaceA = ioc.resolve<c.InterfaceA>('classA');
    resolved.greet();

    ioc.printAll();
