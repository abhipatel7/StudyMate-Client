import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NavBar from "./Components/NavBar/NavBar";
import LoginPage from './Containers/LoginPage/LoginPage';
import StudentRegisterPage from './Containers/StudentRegisterPage/RegisterPage'
import FacultyRegisterPage from './Containers/FacultyRegisterPage/RegisterPage'

function App() {
    return (
        <>
            <NavBar/>
            <Switch>
                <Route path={'/'} exact component={LoginPage} />
                <Route path={'/studentregister'} component={StudentRegisterPage} />
                <Route path={'/facultyregister'} component={FacultyRegisterPage} />
            </Switch>
        </>
    );
}

export default App;

// import React from 'react';
// import './App.css';
// import NavBar from "./Components/NavBar/NavBar";
// import LandingPage from "./Components/LandingPage/LandingPage";
//
// function App() {
//     return (
//         <div className="App">
//             <NavBar/>
//             <LandingPage/>
//         </div>
//     );
// }
//
// export default App;
