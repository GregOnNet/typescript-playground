import IAmResolvable = require('./IAmResolvable.d');

interface IIoC {

    register<IT>(resolvable: IAmResolvable);
}
export = IIoC
