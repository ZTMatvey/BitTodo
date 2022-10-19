import React from 'react'
import Task from '../../../Service/Task'
import TaskItem from './TaskItem/TaskItem'
import Styles from './AllTasks.module.scss'
import TaskProp from '../../../Service/TaskProp';
import DeleteModal from '../../DeleteModal/DeleteModal';
import {useTypedSelector} from '../../../Service/Redux/UseTypeSelector'

interface AllTasksProps {
}

const AllTasks: React.FC<AllTasksProps> = ({}) => {
    var renderTasks = useTypedSelector(state=>state.AllTasks.tasks).map(t => <TaskItem task={t} />);
    return (
        <div className={Styles.tasksContainer}>
            {/* <DeleteModal opened={deleteModalOpened} task={activeTask}/> */}
            {renderTasks}
        </div>
    )
}

export default AllTasks