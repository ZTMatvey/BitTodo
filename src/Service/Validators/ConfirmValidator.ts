import Validator from "./Validator";

class ConfirmValidator extends Validator{
    constructor(message: string, private _other:string) {
        super(message);
    }
    validate (value: string): boolean{
        return value === this._other;
    }
}
export default ConfirmValidator;