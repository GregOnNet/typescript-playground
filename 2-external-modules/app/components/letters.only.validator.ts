import validation = require('./validation');

export class LettersOnlyValidator implements validation.StringValidator {

  letterExpression : RegExp;

  constructor() {

    this.letterExpression = /^[A-Za-z]+$/;
  }

  isAcceptable(s: string) {
    return this.letterExpression.test(s)
  }
}
