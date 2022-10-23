import React, {useState} from 'react'
import { Form, FormGroup, Input, Label, FormFeedback, Button } from 'reactstrap'
import Styles from '../Auth.module.scss'
import { useNavigate } from 'react-router-dom'
import EmailValidator from '../../../Service/Validators/EmailValidator'
import { useValidatingInput } from '../../../Service/ValidatingInput'
import EmptyValidator from '../../../Service/Validators/EmptyValidator'
import LengthValidator from '../../../Service/Validators/LengthValidator'
import ConfirmValidator from '../../../Service/Validators/ConfirmValidator'


const Login = () => {
    const navigate = useNavigate();
    const email = useValidatingInput([
        new EmptyValidator("Поле email не может быть пустым"), 
        new EmailValidator("Некорректный email")]);
    const password = useValidatingInput([
        new EmptyValidator("Пароль не может быть пустым"), 
        new LengthValidator("Минимальная длина пароля — 6", 6)]);
    const handleRegisterClick = (path: string) => {
        navigate(path);
    };
    return (
        <div className={Styles.formWrapper}>
            <span className={Styles.title}>Вход</span>
            <Form className={Styles.form}>
                <FormGroup>
                    <Label for="email">
                        Email
                    </Label>
                    <Input 
                        invalid = {email.valueHasError && email.inputIsTouched}
                        valid ={!email.valueHasError}
                        onBlur={email.onBlur}
                        value={email.value}
                        onChange={email.onChange}
                        id="email"
                        name="email"
                        placeholder="Email"
                        type="email"/>
                    <FormFeedback invalid={email.valueHasError}>{email.inputIsTouched && <>{email.errorMessage}</>}</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label for="password">
                        Пароль
                    </Label>
                    <Input
                        invalid={password.valueHasError && password.inputIsTouched}
                        valid={!password.valueHasError}
                        value={password.value}
                        onBlur={password.onBlur}
                        onChange={password.onChange}
                        id="password"
                        name="password"
                        placeholder="Пароль"
                        type="password" />
                    <FormFeedback invalid={password.valueHasError}>{password.inputIsTouched && <>{password.errorMessage}</>}</FormFeedback>
                </FormGroup>
            </Form>
            <div className={Styles.options}>
                <Button disabled={email.valueHasError || password.valueHasError}>Войти</Button>
                <div className={Styles.login}>
                    <span>Нет аккаунта? Тогда</span>
                    <Button outline onClick={() => handleRegisterClick("/register")}>Зарегистрируйтесь</Button>
                </div>
            </div>
        </div>

    )
}

export default Login