/// <reference path="./interfaces"/>

module App {
  import I = CallbackInfrastructure;

  /** Defines Callback */
  export class CallbackContainer implements I.HaveCallbacks {
    cb: Function;

    constructor(cb: Function) {
      this.cb = cb;
    }
  }
}
