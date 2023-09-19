import { Link } from "react-router-dom";

import style from "./header.module.css";

export const Header = () => {
    return(
        <nav className={style.nav}>
            <Link to='/'>Home</Link>
            <span> | </span>
            <Link to='/produtos'>Produtos</Link>
        </nav>
    )
}

export default Header