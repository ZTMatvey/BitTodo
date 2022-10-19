import Action from '../../Action'
import PriorityLevel from '../../../PriorityLevel';
import Task from '../../../Task';
import AllTasksAction from './AllTasksAction';
import AllTasksState from './AllTasksState';

const initialState: AllTasksState = {
    tasks: []
};
for (let index = 0; index < 100; index++) {
    const task = new Task(
        "Собственное",
        `Заголовок ${index.toString()}`,
        `Описание ${index.toString()}`,
        PriorityLevel.First,
        false,
        index.toString())
    initialState.tasks.push(task);
}


const AllTasksReducer = (state = initialState, action: AllTasksAction): AllTasksState => {
    return state;
}

export default AllTasksReducer;