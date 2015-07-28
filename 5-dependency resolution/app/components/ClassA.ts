export class ClassA implements InterfaceA {
    url: string;

    constructor(url: string) {
        this.url = url;
    }

    greet() {
        console.log('Hello');
    }
}

export interface InterfaceA {
    url: string;
    
    greet();
}
