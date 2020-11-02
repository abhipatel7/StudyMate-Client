import React from "react";

import classes from './RegisterPage.module.css';


const RegisterPage = (props) => {
    return (
        <div>
            <h1 className={classes.form_title}>Enter Correct Student Details</h1>
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
                        <input type="password" placeholder={"Password"}/>
                    </div>
                    <div>
                        <input type="password" placeholder={"Confirm Password"}/>
                    </div>
                </div>
                <div className={classes.column_2}>
                    <div className={classes.label}>
                        {/*<label htmlFor="academicYear">Academic Year</label><br/>*/}
                        <select id="academicYear">
                            <option>Academic Year</option>
                            <option value="2017">2017</option>
                            <option value="2018">2018</option>
                            <option value="2019">2019</option>
                            <option value="2020">2020</option>
                        </select>
                    </div>
                    <div className={classes.label}>
                        <input type="text" placeholder={"Enrollment Number"}/>
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