import { combineReducers } from 'redux';
import AllTasksReducer from './TasksSlice';

const reducers = combineReducers({
    AllTasks: AllTasksReducer
});
export default reducers;
export type RootState = ReturnType<typeof reducers>;