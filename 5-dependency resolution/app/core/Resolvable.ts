import IAmResolvable = require('./IAmResolvable.d')

class Resolvable implements IAmResolvable {

    name: string;
    instance: Object;

    constructor(name: string, instance: Object) {
        this.name = name;
        this.instance = instance;

        console.info(instance.constructor);
    }
}
export = Resolvable;
