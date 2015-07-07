/// <reference path="./interfaces"/>

module App {
  import I = CallbackInfrastructure;

  /** Uses Callback */
  export class Caller implements I.CallOthers {

    useCallback: Function;
    callbackResponse: string;

    constructor(configuration: I.HaveCallbacks) {
      this.useCallback = configuration.cb;
      this.callOthers();
    }

    callOthers() {
      this.callbackResponse = this.useCallback();
      console.info(this.callbackResponse);
    }
  }
}
