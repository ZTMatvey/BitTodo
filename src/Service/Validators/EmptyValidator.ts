import Validator from "./Validator";

class EmptyValidator extends Validator{
    constructor(message: string) { 
        super(message);
    }
    validate (value: string): boolean{
        return value !== '';
    }
}
export default EmptyValidator;