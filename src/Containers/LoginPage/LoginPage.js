import React from "react";
import classes from "./LoginPage.module.css"

const LoginPage = (props) => {
    return (
        <div className={classes.form_container}>
            <div>
                <div className={classes.form_title}>
                    Enter Your Credentials
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