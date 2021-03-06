import styles from './ToDo.module.css';

const ToDo = (props) => {
    return (
        <>
            <input onKeyDown={(e) => {
                if (e.keyCode === 13) {
                    props.addTodo(props.text)
                    props.writeNewText('')
                }
                }} className={styles.newTodo} type="text" value={props.text} onChange={(e) => props.writeNewText(e.target.value)} />
        </>
    )
}

export default ToDo;