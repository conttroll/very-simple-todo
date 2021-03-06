import {NavLink} from "react-router-dom";

const NavLinks = () => {
    return (
        <div>
            <NavLink to={'/'}>all</NavLink>
            <NavLink to={'/active'}>active</NavLink>
            <NavLink to={'/completed'}>completed</NavLink>
        </div>
    )
}

export default NavLinks;