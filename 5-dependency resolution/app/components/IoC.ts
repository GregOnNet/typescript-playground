import I = require('./IIoC');

export class IoC implements I.IIoC {

    instances: Array<Resolvable>;

    constructor() {

        this.instances = [];
    }

    register(resolvable: Resolvable) {

        this.instances.push(resolvable);
    }

    resolve<T>(name: string): T {

        return this.instances.map((found)=> {
            if (found.name === name)
              return (<T> found.instance);
        })[0];
    }

    printAll(): void {
        console.log(this.instances);
    }
}

export class Resolvable implements I.IAmResolvable {

    name: string;
    instance: Object;

    constructor(name: string, instance: Object) {
        this.name = name;
        this.instance = instance;

        console.info(instance.constructor);
    }
}
