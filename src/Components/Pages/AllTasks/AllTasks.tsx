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
    var renderTasks = useTypedSelector(state => state.AllTasks.tasks).map(t => <TaskItem key={t.id} title={t.title} description={t.description}
        deleteButtonClick={()=>dispatch(openRemoveTaskConfirmation(t.id))} />);
    const groups = useAppSelector(x => x.Groups.groups);
    const groupOptions = groups.map(x => <DropdownItem key={x.id}>{x.name}</DropdownItem>);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen((prevState) => !prevState);
    return (
        <div>
            <Multiselect
                placeholder='Группы'
                options={groups}
                selectedValues={[]}
                displayValue="name"
                emptyRecordMsg='Пусто'/>
            {<DeleteModal />}
            <div className={Styles.tasksContainer}>
                {renderTasks}
            </div>
        </div>
    )
}

export default AllTasks