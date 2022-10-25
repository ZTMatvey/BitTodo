import Validator from "./Validator";

class CheckOnDefaultValidator extends Validator{
    constructor(message: string, private _checkOn:string) {
        super(message);
    }
    validate (value: string): boolean{
        return value !== this._checkOn;
    }
}
export default CheckOnDefaultValidator;