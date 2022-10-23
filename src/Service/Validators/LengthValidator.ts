import Validator from "./Validator";

class LengthValidator extends Validator{
    constructor(message: string, private _minLength: number) { 
        super(message);
    }
    validate (value: string): boolean{
        return value.length >= this._minLength;
    }
}
export default LengthValidator;