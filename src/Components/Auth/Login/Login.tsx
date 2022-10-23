import React, {useState} from 'react'
import { Form, FormGroup, Input, Label, FormFeedback, Button, Spinner } from 'reactstrap'
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


const Login = () => {
    const requestSended = useAppSelector(state=> state.Register.isPending);
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
    const formButtonClickHandler = ()=>{
        dispatch(login(new UserLoginDTO(username.value, password.value)));
    };
    return (
        <div className={Styles.formWrapper}>
            <span className={Styles.title}>Вход {requestSended && <Spinner size="sm" color="dark">Loading...</Spinner>}</span>
            <Form className={Styles.form}>
                <FormGroup>
                    <Label for="login">
                        Логин
                    </Label>
                    <Input 
                        invalid = {username.valueHasError && username.inputIsTouched}
                        valid ={!username.valueHasError}
                        onBlur={username.onBlur}
                        value={username.value}
                        onChange={username.onChange}
                        disabled={requestSended}
                        id="login"
                        name="login"
                        placeholder="Логин"
                        type="text"/>
                    <FormFeedback invalid={username.valueHasError.toString()}>{username.inputIsTouched && <>{username.errorMessage}</>}</FormFeedback>
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
                        disabled={requestSended}
                        id="password"
                        name="password"
                        placeholder="Пароль"
                        type="password" />
                    <FormFeedback invalid={password.valueHasError.toString()}>{password.inputIsTouched && <>{password.errorMessage}</>}</FormFeedback>
                </FormGroup>
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