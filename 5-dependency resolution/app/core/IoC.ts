import IIoC = require('./IIoC.d');
import Resolvable = require('./Resolvable');

class IoC implements IIoC {

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
export = IoC;
