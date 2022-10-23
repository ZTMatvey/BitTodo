import React, { useState } from 'react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import TaskItem from './TaskItem/TaskItem'
import Styles from './AllTasks.module.scss'
import DeleteModal from '../../DeleteModal/DeleteModal';
import { useTypedSelector } from '../../../Service/Redux/UseTypeSelector'
import { useAppSelector } from '../../../Service/Redux/Reducers/Hooks';
import Multiselect from 'multiselect-react-dropdown';

interface AllTasksProps {
}

const AllTasks: React.FC<AllTasksProps> = ({ }) => {
    var renderTasks = useTypedSelector(state => state.AllTasks.tasks).map(t => <TaskItem key={t.id} task={t} />);
    const groups = useAppSelector(x => x.AllTasks.groups);
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