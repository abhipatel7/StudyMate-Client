import React from "react";
import classes from './NavBar.module.css';
import StudyMate from './Logo/StudyMate.svg'

const NavBar = (props) => {
    return (
        <div>
            <nav className={classes.nav_container}>
                <div className={classes.nav_logo}>
                    <img src={StudyMate} alt="Study Mate Logo"/>
                </div>
                <ul>
                    <li>
                        <button className={classes.loginBtn} href="">Login</button>
                    </li>
                    <li>
                        <button className={classes.registerBtn} href="">Register</button>
                    </li>
                </ul>
            </nav>
            <hr></hr>
        </div>
    );
};

export default NavBar