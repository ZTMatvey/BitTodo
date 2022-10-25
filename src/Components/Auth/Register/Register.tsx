import React, { useState, useEffect } from 'react'
import { FormGroup, Input, Label, FormFeedback, Button, Spinner } from 'reactstrap'
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
import InputWithValidation from '../../InputWithValidatoin/InputWithValidation'
import Form from '../../Form/Form'


const Register = () => {
    const requestSended = useAppSelector(state => state.Auth.isPending);
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
    const formButtonClickHandler = () => {
        dispatch(register(new UserRegistrationDTO(email.value, login.value, password.value)));
    }
    password.addAction(() => confirmPassword.update());
    return (
        <div className={Styles.formWrapper}>
            <Form title={<>Регистрация {requestSended && <Spinner size="sm" color="dark">Loading...</Spinner>}</>}>
                <InputWithValidation type='text' placeholder='Логин' validatorData={login} id='login' />
                <InputWithValidation type='email' placeholder='Email' validatorData={email} id='email' />
                <InputWithValidation type='password' placeholder='Пароль' validatorData={password} id='password' />
                <InputWithValidation type='password' placeholder='Подтвердите пароль' validatorData={confirmPassword} id='confirmPassword' />
            </Form>
            <div className={Styles.options}>
                <Button onClick={formButtonClickHandler} disabled={login.valueHasError || email.valueHasError || password.valueHasError || confirmPassword.valueHasError || requestSended}>
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