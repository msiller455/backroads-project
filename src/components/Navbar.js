import React from 'react'
// import './navbar.css'
import styles from './navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <h1>I'm Navbar</h1>
            <div className={styles.links}>Navbar linnk</div>
        </div>
    )
}

export default Navbar
