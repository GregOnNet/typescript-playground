import validation = require('./validation');

export class ZipCodeValidator implements validation.StringValidator {

    zipCodeExpression: RegExp

    constructor() {

      this.zipCodeExpression = /^[0-9]+$/;
    }

    isAcceptable(s: string) {

        return s.length === 5 && this.zipCodeExpression.test(s);
    }
}
