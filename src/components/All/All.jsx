const All = (props) => {
    let todos;
    if (props.match.params.status === 'active') {
        todos = props.todos.map(todo => !todo.completed ? <li>{todo.text}</li> : null)
    } else if (props.match.params.status === 'completed') {
        todos = props.todos.map(todo => todo.completed ? <li>{todo.text}</li> : null)
    } else {
        todos = props.todos.map(todo => <li><input type="checkbox"/>{todo.text}</li>);
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