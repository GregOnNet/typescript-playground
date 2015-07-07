module CallbackInfrastructure {
  /** Decorator */
  export interface CallOthers { }

  export interface HaveCallbacks {
    cb : Function
  }
  export interface CanBeCalled {
    cb() : string;
  }
}
