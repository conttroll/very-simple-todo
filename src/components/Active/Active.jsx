const Active = (props) => {
    return (
        <>
            {props.activeTodos.map(todo => !todo.completed ? <li>{todo.text}</li> : null)}
        </>
    )
}

export default Active;