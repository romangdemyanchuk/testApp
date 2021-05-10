import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Switch} from 'react-router'
import MainLayout from './components/Layout/Layout';
import Entry from './components/Entry/Entry';
import Register from './components/Auth/Register/Register';
import Login from './components/Auth/Login/Login';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Entry} exact/>
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/people" render={() => <MainLayout path="people" />} />
                <Route path="/planets" render={() => <MainLayout path="planets" />} />
                <Route path="/starships" render={() => <MainLayout path="starships" />} />
            </Switch>
        </Router>
    );
}

export default App;
