import React, { useState, useEffect } from 'react'
import { Form, FormGroup, Input, Label, FormFeedback, Button, Spinner } from 'reactstrap'
import Styles from '../Auth.module.scss'
import { useNavigate } from 'react-router-dom'
import EmailValidator from '../../../Service/Validators/EmailValidator'
import { useValidatingInput } from '../../../Service/ValidatingInput'
import EmptyValidator from '../../../Service/Validators/EmptyValidator'
import LengthValidator from '../../../Service/Validators/LengthValidator'
import ConfirmValidator from '../../../Service/Validators/ConfirmValidator'
import { useAppDispatch, useAppSelector } from '../../../Service/Redux/Reducers/Hooks'
import { useTypedSelector } from '../../../Service/Redux/UseTypeSelector'
import UserRegistrationDTO from '../../../Service/DTO/UserRegistrationDTO'
import { register } from '../../../Service/Redux/Reducers/AuthSlice'


const Register = () => {
    const requestSended = useAppSelector(state=> state.Register.isPending);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const login = useValidatingInput([
        new EmptyValidator("Логин не может быть пустым"),
        new LengthValidator("Минимальная длина логина — 4", 4)]);
    const email = useValidatingInput([
        new EmptyValidator("Email не может быть пустым"),
        new EmailValidator("Некорректный email")]);
    const password = useValidatingInput([
        new EmptyValidator("Пароль не может быть пустым"),
        new LengthValidator("Минимальная длина пароля — 6", 6)]);
    const confirmPassword = useValidatingInput([
        new ConfirmValidator("Пароли не совпадают", password.value),
        new LengthValidator("Минимальная длина пароля — 6", 6)]);
    const handleLoginClick = (path: string) => {
        navigate(path);
    };
    const formButtonClickHandler =()=>{
        dispatch(register(new UserRegistrationDTO(email.value, login.value, password.value)));
    }
    password.addAction(() => confirmPassword.update());
    return (
        <div className={Styles.formWrapper}>
            <span className={Styles.title}>Регистрация {requestSended && <Spinner size="sm" color="dark">Loading...</Spinner>}</span>
            <Form className={Styles.form}>
                <FormGroup>
                    <Label for="login">
                        Логин
                    </Label>
                    <Input
                        disabled={requestSended}
                        invalid={login.valueHasError && login.inputIsTouched}
                        valid={!login.valueHasError}
                        onBlur={login.onBlur}
                        onChange={login.onChange}
                        value={login.value}
                        id="login"
                        name="login"
                        placeholder="Логин"
                        type="text"
                    />
                    <FormFeedback invalid={login.valueHasError.toString()}>{login.inputIsTouched && <>{login.errorMessage}</>}</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label for="email">
                        Email
                    </Label>
                    <Input
                        disabled={requestSended}
                        invalid={email.valueHasError && email.inputIsTouched}
                        valid={!email.valueHasError}
                        onBlur={email.onBlur}
                        value={email.value}
                        onChange={email.onChange}
                        id="email"
                        name="email"
                        placeholder="Email"
                        type="email" />
                    <FormFeedback invalid={email.valueHasError.toString()}>{email.inputIsTouched && <>{email.errorMessage}</>}</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label for="password">
                        Пароль
                    </Label>
                    <Input
                        disabled={requestSended}
                        invalid={password.valueHasError && password.inputIsTouched}
                        valid={!password.valueHasError}
                        value={password.value}
                        onBlur={password.onBlur}
                        onChange={password.onChange}
                        id="password"
                        name="password"
                        placeholder="Пароль"
                        type="password" />
                    <FormFeedback invalid={password.valueHasError.toString()}>{password.inputIsTouched && <>{password.errorMessage}</>}</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label for="confirmPassword">
                        Подтвердите пароль
                    </Label>
                    <Input
                        disabled={requestSended}
                        invalid={confirmPassword.valueHasError && confirmPassword.inputIsTouched}
                        valid={!confirmPassword.valueHasError}
                        value={confirmPassword.value}
                        onBlur={confirmPassword.onBlur}
                        onChange={confirmPassword.onChange}
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Подтвердите пароль"
                        type="password"
                    />
                    <FormFeedback invalid={confirmPassword.valueHasError.toString()}>{confirmPassword.inputIsTouched && <>{confirmPassword.errorMessage}</>}</FormFeedback>
                </FormGroup>
            </Form>
            <div className={Styles.options}>
                <Button onClick={formButtonClickHandler} disabled={login.valueHasError || email.valueHasError || password.valueHasError || confirmPassword.valueHasError || requestSended }>
                    Зарегистрироваться
                </Button>
                <div className={Styles.login}>
                    <span>Уже есть аккаунт? Тогда</span>
                    <Button outline onClick={() => handleLoginClick("/login")}>Войдите</Button>
                </div>
            </div>
        </div>

    )
}

export default Register