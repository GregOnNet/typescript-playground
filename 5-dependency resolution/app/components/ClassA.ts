import InterfaceA = require('./InterfaceA.d');

class ClassA implements InterfaceA {

    url: string;

    constructor(url: string) {
        this.url = url;
    }

    greet() {
        console.log('Hello');
    }
}
export = ClassA;
