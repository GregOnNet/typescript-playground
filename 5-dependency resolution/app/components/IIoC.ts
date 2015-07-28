export interface IIoC {

    register<IT>(resolvable: IAmResolvable);
}

export interface IAmResolvable{
    name: string;
    instance: Object;
}
