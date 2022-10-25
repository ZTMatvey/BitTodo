import { useAppDispatch } from './Hooks';
import { showToast } from './../../Toast';
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import UserRegistrationDTO from "../../DTO/UserRegistrationDTO";
import ToastNotificationType from '../../ToastNotificationType';
import Group from '../../Group';
import AddGroupDTO from '../../DTO/AddGroupDTO'

const _loadGroups = async()=>{
    const requestOptions = {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
    }
    const response = await fetch('https://localhost:7197/api/account/groups', requestOptions);
    const data = await response.json();
    return data;
}
export const loadGroups = createAsyncThunk(
    'groups/load',
    async () => await _loadGroups()
);
export const addGroup = createAsyncThunk(
    'groups/add',
    async (params: AddGroupDTO) => {
        const body = JSON.stringify(params);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` },
            body
        }
        const response = await fetch('https://localhost:7197/api/account/addgroup', requestOptions).then(async ()=> await _loadGroups());
        return response;
    }
);
type GroupsState = {
    isPending: boolean,
    loaded: boolean,
    groups: Group[]
}

const initialState: GroupsState = {
    isPending: false,
    loaded: false,
    groups: []
}

const groupsSlice = createSlice({
    name: 'groups',
    initialState: initialState,
    reducers: {
    },
    extraReducers: builder => {
        builder.addCase(loadGroups.pending, (state) => {
            state.isPending = true;
        });
        builder.addCase(loadGroups.fulfilled, (state, action) => {
            state.isPending = false;
            state.groups = action.payload;
        });
        builder.addCase(loadGroups.rejected, (state) => {
            state.isPending = false;
            showToast(ToastNotificationType.Error, 'Ошибка при загрузке групп');
        });
        builder.addCase(addGroup.fulfilled, (state, action) => {
            showToast(ToastNotificationType.Success, 'Группа успешно добавлена');
            state.groups = action.payload;
        });
        builder.addCase(addGroup.rejected, () => {
            showToast(ToastNotificationType.Error, 'Ошибка при добавлении группы');
        });
    }
});

export const { } = groupsSlice.actions
export default groupsSlice.reducer