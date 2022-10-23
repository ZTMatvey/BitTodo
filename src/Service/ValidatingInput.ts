import { useState, useEffect } from 'react';
import IValidator from "./Validators/Validator";

export const useValidatingInput = (validators: IValidator[], actions: (() => void)[] = [], initialValue: string = '') => {
    const [value, setValue] = useState(initialValue);
    const [valueHasError, setValueHasError] = useState(true);
    const [inputIsTouched, setInputIsTouched] = useState(false);
    const [errorMessage, setErrorMessage] = useState(``);
    const checkForErrors = (value: string) => {
        let hasError = false;
        for (let i = 0; i < validators.length; i++)
            if (!validators[i].validate(value)) {
                setErrorMessage(validators[i].message);
                hasError = true;
                break;
            }
        setValueHasError(hasError);
    }
    const addAction = (action: () => void) => actions.push(action);
    useEffect(() =>
        actions.forEach(action => {
            action();
        }), [value]);
    const update = () => {
        checkForErrors(value);
    }
    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value);
        checkForErrors(event.currentTarget.value);
    }
    const onBlur = () => {
        setInputIsTouched(true);
        checkForErrors(value);
    }
    return {
        value,
        valueHasError,
        inputIsTouched,
        errorMessage,
        onChange,
        onBlur,
        update,
        addAction
    }
}