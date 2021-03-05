import {NavLink} from "react-router-dom";

const ToDo = (props) => {
    return (
        <>
            <input type="text" value={props.text} onChange={(e) => props.writeNewText(e.target.value)} />
            <button onClick={() => {
                props.addTodo(props.text)
                props.writeNewText('')
            }}>Add</button>
            <NavLink to={'/'}>all</NavLink>
            <NavLink to={'/active'}>active</NavLink>
            <NavLink to={'/completed'}>completed</NavLink>
        </>
    )
}

export default ToDo;