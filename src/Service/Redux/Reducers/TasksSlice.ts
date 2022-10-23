import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Group from "../../Group";
import PriorityLevel from "../../PriorityLevel";
import Task from "../../Task";

type TasksState = {
    tasks: Task[],
    groups: Group[]
    removeTaskConfirmationOpened: boolean,
    focusedTask?: Task
}

const initialState: TasksState = {
    tasks: [
        new Task("Собственное", `Заголовок 1`, `Описание 1`, PriorityLevel.First, false, '1'),
        new Task("Собственное", `Заголовок 2`, `Описание 2`, PriorityLevel.First, false, '2'),
        new Task("Собственное", `Заголовок 3`, `Описание 3`, PriorityLevel.First, false, '3')],
    removeTaskConfirmationOpened: false,
    groups: [
        new Group("Собственное", '1'),
        new Group("Общее", '2'),
    ]
}

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: initialState,
    reducers: {
        addTask(state, action: PayloadAction<Task>){
            const task = action.payload;
            task.id = 'asdf';
            state.tasks.push(task);
        },
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
    }
});

export const { removeTask, openRemoveTaskConfirmation, closeRemoveTaskConfirmation, addTask } = tasksSlice.actions
export default tasksSlice.reducer