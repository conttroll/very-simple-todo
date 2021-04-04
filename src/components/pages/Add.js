import React, {useEffect, useState} from 'react';
import axios from "axios";

const AddTodo = () => {
    const [newTodo, setNewTodo] = useState('');

    const onInputChange = (e) => {
        setNewTodo(e.target.value);
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:3002/todos', {title: newTodo, completed: false});
    }

    return (
        <div>
            <form onSubmit={(event => onSubmit(event))}>
                <input
                    type="text"
                    className="input-group-text m-auto w-100"
                    placeholder="Add todo"
                    value={newTodo}
                    onChange={(e) => onInputChange(e)}
                />
            </form>
        </div>
    )
}

export default AddTodo;