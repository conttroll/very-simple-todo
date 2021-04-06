import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useParams} from 'react-router-dom';
import AddTodo from "./Add";

function TodosContainer() {
    let {param} = useParams(); // ПАРАМЕТР В УРЛЕ

    ///////// ---- ХУКИ ----- ///////
    const [todos, setTodos] = useState([]);
    const [changedTodo, setChangedTodo] = useState({
        title: '',
    });
    const [editMode, setEditMode] = useState({
        mode: false,
        todoId: ''
    });

    useEffect(() => {
        loadTodos();
    }, []);
    ///////// ---- ХУКИ ----- ///////

    const loadTodos = async () => {  /// ЗАГРУЗКА ТУДУШЕК
        const result = await axios.get('http://localhost:3002/todos');
        setTodos(result.data.reverse());
        console.log(todos);
    }

    const {mode, todoId} = editMode;

    const deleteTodo = async (id) => {
        await axios.delete(`http://localhost:3002/todos/${id}`);
        loadTodos();
    }

    const activateEditMode = (id, title) => {
        setEditMode({mode: true, todoId: id});
        setChangedTodo({...changedTodo, title});
    }

    const deactivateEditMode = async (id) => {
        setEditMode({mode: false, todoId: ''});
        await axios.put(`http://localhost:3002/todos/${id}`, changedTodo);
        loadTodos();
    }

    const oninputChange = (e) => {
        setChangedTodo({...changedTodo, title: e.target.value});
    }

    const activateTodo = async (id, title) => {
        await axios.put(`http://localhost:3002/todos/${id}`, {...changedTodo, title, completed: false});
        loadTodos();
    }

    const completeTodo = async (id, title) => {
        await axios.put(`http://localhost:3002/todos/${id}`, {...changedTodo, title, completed: true});
        loadTodos();
    }

    return (
        <div className="container">
            <AddTodo loadTodos={loadTodos}/>

            <table className="table mt-3">
                <thead className="thead-dark">
                <tr>
                    <th scope="col">Состояние</th>
                    <th scope="col">Надо сделать</th>
                    <th scope="col">Действия</th>
                </tr>
                </thead>
                <tbody>
                {
                    todos.filter(todo => {
                        if (param === 'active') {
                            return !todo.completed;
                        } else if (param === 'completed') {
                            return todo.completed
                        } else {
                            return todo
                        }
                    })
                        .map((todo) => {
                            return (
                                <tr>
                                    <td>
                                        <input className="form-check"
                                               type="checkbox"
                                               checked={todo.completed ? 'checked' : ''}
                                        onChange={() => {
                                            if (todo.completed) {
                                                activateTodo(todo.id, todo.title);
                                            } else {
                                                completeTodo(todo.id, todo.title);
                                            }
                                        }}/>
                                    </td>
                                    {mode && todoId == todo.id ? //РЕЖИМ РЕДАКТИРОВАНИЯ ВКЛЮЧЕНА?
                                        <td>
                                            <input autoFocus="true"
                                                   name="title"
                                                   className="w-100"
                                                   value={changedTodo.title}
                                                   type="text"
                                                   onBlur={() => deactivateEditMode(todo.id)} //ОТКЛ. РЕЖИМ РЕДАКТИРОВАНИЯ
                                                   onChange={(e) => oninputChange(e)}
                                            />
                                        </td> :
                                        <td>{todo.title}</td> //НЕТ, НЕ ВКЛЮЧЕНА
                                    }
                                    <td>
                                        <Link
                                            onClick={() => activateEditMode(todo.id, todo.title)} ////ВКЛ. РЕЖИМ РЕДАКТИРОВАНИЯ
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

export default TodosContainer;