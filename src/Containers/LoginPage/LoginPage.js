import React from "react";
import classes from "./LoginPage.module.css"
// import StudyMate from "../../Components/NavBar/Logo/StudyMate.svg";
import StudyMateAdmin from '../../Components/NavBar/Logo/Group 114.png'
const LoginPage = (props) => {
    return (
        <div className={classes.form_container}>
            <div>
                <div>
                    <img src={StudyMateAdmin} alt="Study Mate Logo"/>
                </div>
            </div>
            <form>
                <div>
                    <input className={classes.email} type="text"
                           placeholder={"Email Address"}
                    />
                </div>
                <div>
                    <input className={classes.password} type="password" placeholder={"Password"}/>
                </div>
                <div>
                    <button className={classes.loginBtn}>Submit →</button>
                </div>
            </form>
        </div>
    )
}

export default LoginPage;