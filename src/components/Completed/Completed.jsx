const Completed = (props) => {
    return (
        <>
            {props.completedTodos.map(todo => todo.completed ? <li>{todo.text}</li> : null)}
        </>
    )
}

export default Completed;