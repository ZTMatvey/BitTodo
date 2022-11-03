import React, { useState } from 'react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import TaskItem from './TaskCard/TaskCard'
import Styles from './AllTasks.module.scss'
import DeleteModal from '../../DeleteModal/DeleteModal';
import { useTypedSelector } from '../../../Service/Redux/UseTypeSelector'
import { useAppDispatch, useAppSelector } from '../../../Service/Redux/Reducers/Hooks';
import Multiselect from 'multiselect-react-dropdown';
import { openRemoveTaskConfirmation } from '../../../Service/Redux/Reducers/TasksSlice';

interface AllTasksProps {
}

const AllTasks: React.FC<AllTasksProps> = ({ }) => {
    const dispatch = useAppDispatch();
    var renderTasks = useTypedSelector(state => state.AllTasks.tasks).map(t => <TaskItem key={t.id} task={t}
        deleteButtonClick={()=>dispatch(openRemoveTaskConfirmation(t.id))} />);
    return (
        <div>
            {<DeleteModal />}
            <div className={Styles.tasksContainer}>
                {renderTasks}
            </div>
        </div>
    )
}

export default AllTasks