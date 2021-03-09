import {NavLink} from "react-router-dom";
import styles from './Navlinks.module.css';

const NavLinks = () => {
    return (
        <div className={styles.navlinks}>
            <NavLink to={'/'}>all</NavLink>
            <NavLink to={'/active'}>active</NavLink>
            <NavLink to={'/completed'}>completed</NavLink>
        </div>
    )
}

export default NavLinks;