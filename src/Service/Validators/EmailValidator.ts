import Validator from "./Validator";

class EmailValidator extends Validator{
    private _regexp: RegExp;
    constructor(message: string) { 
        super(message);
        this._regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    }
    validate (value: string): boolean{
        return this._regexp.test(value);
    }
}
export default EmailValidator;