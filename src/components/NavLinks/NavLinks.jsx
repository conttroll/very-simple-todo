import {NavLink} from "react-router-dom";
import styles from './Navlinks.module.css';
import {connect} from "react-redux";

const NavLinks = (props) => {
    let items = props.todos.filter(todo => !todo.completed);

    return (
        <div className={styles.navlinks}>
            <div>{items.length === 1 ? items.length + ' item left' : items.length + ' items left'}</div>
            <NavLink to={'/'}>all</NavLink>
            <NavLink to={'/active'}>active</NavLink>
            <NavLink to={'/completed'}>completed</NavLink>
        </div>
    )
}

const mapStateToProps = (state) => ({
    todos: state.allTodos.todos
})

export default connect(mapStateToProps, {})(NavLinks);