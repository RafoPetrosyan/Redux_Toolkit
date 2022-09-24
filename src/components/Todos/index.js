import { useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import { v4 as uuid } from 'uuid';

import { addTodo } from "features/todo/todoSlice";

const Todos = () => {
    const dispatch = useDispatch();
    const [todoValue, setTodoValue] = useState('');
    const todos = useSelector(({todo}) => todo);

    console.log(todos)

    const addTodoHandler = (e) => {
        e.preventDefault()

        const newTodo = {
            id: uuid(),
            text: todoValue,
            completed: false,
        };

        dispatch(addTodo(newTodo));
        setTodoValue('');
    };

    return (
        <div className="user">
            <form onSubmit={addTodoHandler}>
                <input
                    type='text'
                    id='text'
                    placeholder='Enter new Todo'
                    name='todo'
                    onChange={({target: {value}}) => setTodoValue(value)}
                />
            </form>
        </div>
    )
};

export default Todos;