import React, { useState } from 'react'
import { Button, Spinner } from 'reactstrap'
import Styles from '../Auth.module.scss'
import { useNavigate } from 'react-router-dom'
import EmailValidator from '../../../Service/Validators/EmailValidator'
import { useValidatingInput } from '../../../Service/ValidatingInput'
import EmptyValidator from '../../../Service/Validators/EmptyValidator'
import LengthValidator from '../../../Service/Validators/LengthValidator'
import ConfirmValidator from '../../../Service/Validators/ConfirmValidator'
import { useAppDispatch, useAppSelector } from '../../../Service/Redux/Reducers/Hooks'
import { login } from '../../../Service/Redux/Reducers/AuthSlice'
import UserLoginDTO from '../../../Service/DTO/UserLoginDTO'
import InputWithValidation from '../../InputWithValidatoin/InputWithValidation'
import Form from '../../Form/Form'


const Login = () => {
    const requestSended = useAppSelector(state => state.Auth.isPending);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const username = useValidatingInput([
        new EmptyValidator("Логин не может быть пустым"),
        new LengthValidator("Минимальная длина пароля — 4", 4)]);

    const password = useValidatingInput([
        new EmptyValidator("Пароль не может быть пустым"),
        new LengthValidator("Минимальная длина пароля — 6", 6)]);
    const handleRegisterClick = (path: string) => {
        navigate(path);
    };
    const formButtonClickHandler = () => {
        dispatch(login(new UserLoginDTO(username.value, password.value)));
    };
    return (
        <div className={Styles.formWrapper}>
            <Form title={<>Вход {requestSended && <Spinner size="sm" color="dark">Loading...</Spinner>}</>}>
                <InputWithValidation type='text' placeholder='Логин' validatorData={username} id='username' />
                <InputWithValidation type='password' placeholder='Пароль' validatorData={password} id='password' />
            </Form>
            <div className={Styles.options}>
                <Button onClick={formButtonClickHandler} disabled={username.valueHasError || password.valueHasError || requestSended}>Войти</Button>
                <div className={Styles.login}>
                    <span>Нет аккаунта? Тогда</span>
                    <Button outline onClick={() => handleRegisterClick("/register")}>Зарегистрируйтесь</Button>
                </div>
            </div>
        </div>

    )
}

export default Login