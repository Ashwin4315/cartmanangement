import styles from "./Header.module.css"
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className={styles.container}>
            <nav className={styles.navbar}>
               <Link to= "/"> <h1 className={styles.logo}>Cart-Management</h1></Link>
                <Link to="/Cart" className={styles.link}><h2>cart</h2></Link>
            </nav>
        </header>
    );
}

export default Header;