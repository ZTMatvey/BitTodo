import { combineReducers } from 'redux';
import AllTasksReducer from './TasksSlice';
import AuthReducer from './AuthSlice'
import GroupsReducer from './GroupsSlice'

const reducers = combineReducers({
    AllTasks: AllTasksReducer,
    Auth: AuthReducer,
    Groups: GroupsReducer
});
export default reducers;
export type RootState = ReturnType<typeof reducers>;