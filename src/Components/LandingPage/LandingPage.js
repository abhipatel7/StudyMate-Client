import React from "react";
import classes from "./LandingPage.module.css"

const LandingPage = (props) => {
    return (
        <div className={classes.center}>
            <div className={classes.text}>
                <h1>StudyMate</h1>
                <p>One Stop for Students to Study</p>
            </div>
            <div className={classes.landingPageBtn}>
                <button className={classes.loginBtn}>Login</button>
                <button className={classes.registerBtn}>Register →</button>
            </div>
        </div>
    )
}

export default LandingPage