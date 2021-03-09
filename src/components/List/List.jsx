const List = (props) => {
    return (
        <div>
            <li><input value={props.id} type="checkbox"/>{props.text}</li>
        </div>
    )
}

export default List;