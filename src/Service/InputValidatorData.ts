interface InputValidatorData {
    value: string;
    valueHasError: boolean;
    inputIsTouched: boolean;
    errorMessage: string;
    onChange: (event: React.FormEvent<HTMLInputElement>) => void;
    onBlur: () => void;
    update: () => void;
    addAction: (action: () => void) => number;
}
export default InputValidatorData