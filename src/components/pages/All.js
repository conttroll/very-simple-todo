import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";

const AllTodo = () => {
    const [todos, setTodos] = useState([]);

    const [changedTodo, setChangedTodo] = useState('');

    const [editMode, setEditMode] = useState({
        mode: false,
        todoId: ''
    });

    const {mode, todoId} = editMode;

    const loadTodos = async () => {
        const result = await axios.get('http://localhost:3002/todos');
        setTodos(result.data);
    }

    useEffect(() => {
        loadTodos();
    }, []);

    const deleteTodo = async (id) => {
        await axios.delete(`http://localhost:3002/todos/${id}`);
        loadTodos();
    }

    const activateEditMode = (id, text) => {
        setEditMode({mode: true, todoId: id});
        setChangedTodo(text);
    }

    const deactivateEditMode = async (id) => {
        setEditMode({mode: false, todoId: ''});
        await axios.put(`http://localhost:3002/todos/${id}`, {...todos, title: changedTodo});
        loadTodos();
    }

    const oninputChange = (e) => {
        setChangedTodo(e.target.value);
    }

    return (
        <div className="container">
            <table className="table">
                <thead className="thead-dark">
                <tr>
                    <th scope="col">Состояние</th>
                    <th scope="col">Надо сделать</th>
                    <th scope="col">Действия</th>
                </tr>
                </thead>
                <tbody>
                {
                    todos.map((todo) => {
                        return (
                            <tr>
                                <input className="form-check"
                                       type="checkbox"
                                       checked={todo.completed ? 'checked' : ''}/>
                                {mode && todoId == todo.id ?
                                    <td>
                                        <input autoFocus="true"
                                               className="w-100"
                                               value={changedTodo}
                                               type="text"
                                               onBlur={() => deactivateEditMode(todo.id)}
                                               onChange={(e) => oninputChange(e)}
                                        />
                                    </td> :
                                    <td>{todo.title}</td>
                                }
                                <td>
                                    <Link onClick={() => activateEditMode(todo.id, todo.title)}
                                          className="btn btn-outline-primary mr-2" to="#">Edit</Link>
                                    <Link onClick={() => deleteTodo(todo.id)} className="btn btn-danger"
                                          to="#">Del</Link>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}

export default AllTodo;