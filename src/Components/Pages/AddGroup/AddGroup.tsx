import React from 'react'
import { FormGroup, Label, Input, Button, FormFeedback } from 'reactstrap'
import AddGroupDTO from '../../../Service/DTO/AddGroupDTO'
import { addGroup } from '../../../Service/Redux/Reducers/GroupsSlice'
import { useAppDispatch } from '../../../Service/Redux/Reducers/Hooks'
import { useValidatingInput } from '../../../Service/ValidatingInput'
import EmptyValidator from '../../../Service/Validators/EmptyValidator'
import Form from '../../Form/Form'
import InputWithValidation from '../../InputWithValidatoin/InputWithValidation'
import Styles from './AddGroup.module.scss'

const AddGroup = () => {
    const dispatch = useAppDispatch();
    const name = useValidatingInput([new EmptyValidator('Название не может быть пустым')]);
    const description = useValidatingInput([new EmptyValidator('Описание не может быть пустым')]);
    const add = () => {
        dispatch(addGroup(new AddGroupDTO(name.value, description.value)))
    }

    return (
        <div>
            <Form title={<>Создание группы</>}>
                <InputWithValidation id='name' type='text' placeholder='Название' validatorData={name} />
                <InputWithValidation id='description' type='textarea' placeholder='Описание' validatorData={description} />
            </Form>
            <Button disabled={name.valueHasError || description.valueHasError} onClick={add}>
                Добавить
            </Button>
        </div>
    )
}

export default AddGroup