import { showToast } from './../../Toast';
import { createSlice, PayloadAction, createAsyncThunk, isPending } from "@reduxjs/toolkit";
import UserRegistrationDTO from "../../DTO/UserRegistrationDTO";
import ToastNotificationType from '../../ToastNotificationType';
import UserLoginDTO from '../../DTO/UserLoginDTO';

export const register = createAsyncThunk(
    'auth/register',
    async (params: UserRegistrationDTO) => {
        const body = JSON.stringify(params);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body
        }
        const response = await fetch('https://localhost:7197/api/auth/register', requestOptions);
        const data = await response.json();
        return data;
    }
);
export const login = createAsyncThunk(
    'auth/login',
    async (params: UserLoginDTO) => {
        const body = JSON.stringify(params);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body
        }
        const response = await fetch('https://localhost:7197/api/auth/login', requestOptions);
        const data = await response.json();
        return data;
    }
);
type AuthState = {
    isAuthorized: boolean,
    isPending: boolean
}

const initialState: AuthState = {
    isAuthorized: false,
    isPending: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(register.pending, (state, action) => {
            state.isPending = true;
        });
        builder.addCase(register.fulfilled, (state, action) => {
            state.isPending = false;
            if (action.payload.succeeded)
                showToast(ToastNotificationType.Success, 'Аккаунт создан');
            else {
                switch (action.payload.errors[0].code) {
                    case 'DuplicateUserName':
                        showToast(ToastNotificationType.Error, 'Данный логин уже занят');
                        break;
                    case 'DuplicateEmail':
                        showToast(ToastNotificationType.Error, 'Данный email уже занят');
                        break;
                    default:
                        showToast(ToastNotificationType.Error, 'Ошибка при создании аккаунта');
                        break;
                }
            }
        });
        builder.addCase(register.rejected, (state, action) => {
            state.isPending = false;
            showToast(ToastNotificationType.Error, 'Ошибка при создании аккаунта');
        });
        builder.addCase(login.pending, (state, action) => {
            state.isPending = true;
        });
        builder.addCase(login.fulfilled, (state, action) => {
            state.isPending = false;
            if (action.payload.status === 400)
                showToast(ToastNotificationType.Error, 'Ошибка при входе');
            else showToast(ToastNotificationType.Success, 'Вход успешно выполнен');
        });
        builder.addCase(login.rejected, (state, action) => {
            state.isPending = false;
            console.log(action);
            showToast(ToastNotificationType.Error, 'Ошибка при входе');
        });
    }
});

export const { } = authSlice.actions
export default authSlice.reducer