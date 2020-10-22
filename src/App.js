import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NavBar from "./Components/NavBar/NavBar";
import LandingPage from "./Components/LandingPage/LandingPage";
import LoginPage from './Containers/LoginPage/LoginPage';
import RegisterPage from './Containers/RegisterPage/RegisterPage'

function App() {
    return (
        <>
            <NavBar/>
            <Switch>
                <Route path={'/login'} component={LoginPage} />
                <Route exact path={'/'} component={LandingPage} />
                <Route path={'/register'} component={RegisterPage} />
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
