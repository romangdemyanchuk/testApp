import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Switch} from 'react-router'
import Login from "./components/Login/Login";
import MainLayout from "./components/Layout/Layout";
import Register from "./components/Login/Register";
import Entry from "./components/Entry/Entry";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Entry} exact/>
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/people" component={MainLayout} />
                <Route path="/planets" component={MainLayout} />
                <Route path="/starships" component={MainLayout} />
            </Switch>
        </Router>
    );
}

export default App;
