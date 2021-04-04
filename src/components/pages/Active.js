import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

const Active = () => {
    const [todos, setTodos] = useState([]);

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
                    todos.filter(todo => !todo.completed).map((todo) => {
                        return (
                            <tr>
                                <input className="form-check" type="checkbox" />
                                <td>{todo.title}</td>
                                <td>
                                    <Link className="btn btn-outline-primary mr-2" to="#">Edit</Link>
                                    <Link onClick={() => deleteTodo(todo.id)} className="btn btn-danger" to="#">Del</Link>
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

export default Active;