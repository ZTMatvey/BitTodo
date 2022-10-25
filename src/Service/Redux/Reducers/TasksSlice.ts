import { showToast } from './../../Toast';
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import AddTaskDTO from "../../DTO/AddTaskDTO";
import Group from "../../Group";
import PriorityLevel from "../../PriorityLevel";
import Task from "../../Task";
import ToastNotificationType from '../../ToastNotificationType';

const _loadTasks = async()=>{
    const requestOptions = {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
    }
    const response = await fetch('https://localhost:7197/api/account/tasks', requestOptions);
    const data = await response.json();
    return data;
}
export const loadTasks = createAsyncThunk(
    'tasks/load',
    async () => await _loadTasks()
);
export const addTask = createAsyncThunk(
    'tasks/add',
    async (params: AddTaskDTO) => {
        const body = JSON.stringify(params);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` },
            body
        }
        const response = await fetch('https://localhost:7197/api/account/addtask', requestOptions).then(async ()=> await _loadTasks());
        return response;
    }
);
type TasksState = {
    tasks: Task[],
    removeTaskConfirmationOpened: boolean,
    focusedTask?: Task
}

const initialState: TasksState = {
    tasks: [],
    removeTaskConfirmationOpened: false
}

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: initialState,
    reducers: {
        removeTask(state, action: PayloadAction<string>) {
            state.tasks = state.tasks.filter(x => x.id !== action.payload);
        },
        openRemoveTaskConfirmation(state, action: PayloadAction<string>) {
            state.focusedTask = state.tasks.find(x => x.id === action.payload);
            if (state.focusedTask !== undefined)
                state.removeTaskConfirmationOpened = true;
        },
        closeRemoveTaskConfirmation(state, action: PayloadAction) {
            state.removeTaskConfirmationOpened = false;
        }
    },
    extraReducers: builder=>{
        
        builder.addCase(loadTasks.fulfilled, (state, action) => {
            state.tasks = action.payload;
        });
        builder.addCase(loadTasks.rejected, (state) => {
            showToast(ToastNotificationType.Error, 'Ошибка при загрузке задач');
        });
        builder.addCase(addTask.fulfilled, (state, action) => {
            showToast(ToastNotificationType.Success, 'Задача успешно добавлена');
            state.tasks = action.payload;
            
        });
        builder.addCase(addTask.rejected, () => {
            showToast(ToastNotificationType.Error, 'Ошибка при добавлении задачи');
        });
    }
});

export const { removeTask, openRemoveTaskConfirmation, closeRemoveTaskConfirmation } = tasksSlice.actions
export default tasksSlice.reducer