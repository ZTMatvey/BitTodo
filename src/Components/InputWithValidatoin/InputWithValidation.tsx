import React from 'react'
import { FormFeedback, FormGroup, Input, InputGroupProps, InputProps, Label } from 'reactstrap'
import { InputType } from 'reactstrap/types/lib/Input'
import InputValidatorData from '../../Service/InputValidatorData'
import { useValidatingInput } from '../../Service/ValidatingInput'
import Validator from '../../Service/Validators/Validator'

interface InputWithValidationProps {
    validatorData: InputValidatorData
    id: string
    type: InputType
    placeholder: string
    children?: JSX.Element[]
    onClick?: ()=> void
}

const InputWithValidation: React.FC<InputWithValidationProps> = ({ validatorData, id, type, placeholder, children, onClick }) => {
    const state = validatorData;
    return (
        <FormGroup>
            <Label for={id}>
                {placeholder}
            </Label>
            <Input
                onClick={onClick}
                invalid={state.valueHasError && state.inputIsTouched}
                valid={!state.valueHasError}
                onBlur={state.onBlur}
                value={state.value}
                onChange={state.onChange}
                id={id}
                name={id}
                placeholder={placeholder}
                type={type}>
                {children}
            </Input>
            <FormFeedback invalid={state.valueHasError.toString()}>{state.inputIsTouched && <>{state.errorMessage}</>}</FormFeedback>
        </FormGroup>
    )
}

export default InputWithValidation