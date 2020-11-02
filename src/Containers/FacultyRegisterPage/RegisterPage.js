import React from "react";

import classes from './RegisterPage.module.css';


const RegisterPage = (props) => {
    return (
        <div>
            <h1 className={classes.form_title}>Enter Your Correct Faculty Details</h1>
            <form className={classes.form_container}>
                <div className={classes.column_3}>
                    <div><input type="text" placeholder={"First Name"}/>
                    </div>
                    <div>
                        <input type="text" placeholder={"Middle Name"}/>
                    </div>
                    <div>
                        <input type="text" placeholder={"Last Name"}/>
                    </div>
                </div>
                <div>
                    <input type="email" placeholder={"Email Address"}/>
                </div>
                <div className={classes.column_2}>
                    <div>
                        <input type="text" placeholder={"Phone Number"}/>
                    </div>
                    <div>
                        <input type="text" placeholder={"Department"}/>
                    </div>
                </div>
                <div>
                    <button className={classes.submitBtn} type={"submit"}>Submit →</button>
                </div>
            </form>

        </div>
    );
};

export default RegisterPage;