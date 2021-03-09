const All = (props) => {
    let todos;
    if (props.match.params.status === 'active') {
        todos = props.todos.map(todo => !todo.completed ? <li><input onChange={() => props.completeTodo(todo.id)} value={todo.id} type="checkbox"/>{todo.text}</li> : null)
    } else if (props.match.params.status === 'completed') {
        todos = props.todos.map(todo => todo.completed ? <li><input onChange={() => props.activeTodo(todo.id)} checked='checked' type="checkbox"/>{todo.text}</li> : null)
    } else {
        todos = props.todos.map(todo => todo.completed ? <li><input onChange={() => props.activeTodo(todo.id)} checked='checked' type="checkbox"/>{todo.text}</li> : <li><input onChange={() => props.completeTodo(todo.id)} value={todo.id} type="checkbox"/>{todo.text}</li>);
    }
    return (
        <>
            <ul>
                { todos }
            </ul>
        </>
    )
}

export default All;