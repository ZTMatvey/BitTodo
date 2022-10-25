import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'
import { loadGroups } from '../../../Service/Redux/Reducers/GroupsSlice'
import { useAppDispatch, useAppSelector } from '../../../Service/Redux/Reducers/Hooks'
import { useTypedSelector } from '../../../Service/Redux/UseTypeSelector'
import GroupCard from './GroupCard/GroupCard'
import Styles from './Groups.module.scss'

const Groups = () => {
    const navigate = useNavigate();
    const groups = useAppSelector(state => state.Groups.groups).map(g => <GroupCard key={g.id} title={g.name} description='' />);
    const addGroup = ()=>{
        navigate('/add-group');
    }

    return (
        <div>
            <Button  onClick={addGroup} className={Styles.addGroupBtn} children='Добавить группу' />
            <div className={Styles.tasksContainer}>
                {groups}
            </div>
        </div>
    )
}

export default Groups