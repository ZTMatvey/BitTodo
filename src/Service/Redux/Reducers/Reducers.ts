import { combineReducers } from 'redux';
import AllTasksReducer from './TasksSlice';
import AuthReducer from './AuthSlice'

const reducers = combineReducers({
    AllTasks: AllTasksReducer,
    Register: AuthReducer
});
export default reducers;
export type RootState = ReturnType<typeof reducers>;