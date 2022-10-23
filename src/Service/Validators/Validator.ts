abstract class Validator {
    private _message: string;
    constructor(message: string) { 
        this._message = message;
    }
    public get message(): string{
        return this._message;
    }
    abstract validate (value: string): boolean;
}
export default Validator;