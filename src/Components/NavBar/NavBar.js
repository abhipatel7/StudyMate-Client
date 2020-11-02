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
                        {/*<button className={classes.studentBtn} href="">Add New Student</button>*/}
                        <a href="" className={classes.student}>Add New Student</a>
                    </li>
                    <li>
                        {/*<button className={classes.logoutBtn} href="">Logout</button>*/}
                        <a href="" className={classes.logout}>Logout</a>
                    </li>
                </ul>
            </nav>
            <hr></hr>
        </div>
    );
};

export default NavBar