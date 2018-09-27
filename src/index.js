import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import logo from './chinasofti_logo.png';
import './App.css';
<<<<<<< HEAD
import Navigator from './step6/Navigator'
import Footer from './step6/Footer'

import registerServiceWorker from './registerServiceWorker';

import './index.css';
import S5 from './step5/';

const NotFound = ({location}) => (
    <h3 className="alert-danger alert-primary">
        No match for <code>{location.pathname}</code>
    </h3>
)
=======
import './index.css';
import Home from './components/Home'
import Navigator from './components/Navigator'
import Footer from './components/Footer'
import NotFound from './components/NotFound'
import S5 from './step5/';
import ListTable from './step6/ListTable'
import RequestForm from './step6/RequestForm'
import Data from './step7/Data'

import registerServiceWorker from './registerServiceWorker';
const removeRequest = index => {
};
>>>>>>> bed0e0c8f429c7cdda471992fca2af557ed94cc4

const App = () => (
    <Router>
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1 className="App-title">Welcome to On-Leave Management Dashboard</h1>
                <Navigator/>
            </header>
            <Switch>
<<<<<<< HEAD
                <Route exact path="/" component={S5.Home}/>
                <Route path="/login" component={S5.Login}/>
                <Route path="/admin" component={S5.Admin}/>
                <Route path="/info" component={S5.Information}/>
                <Route component={NotFound}/>
            </Switch>
        <hr/>
=======
                <Route exact path="/" component={Home}/>
                <Route path="/generallogin" component={S5.GeneralLogin}/>
                <Route path="/adminlogin" component={S5.AdminLogin}/>
                <Route path="/info" component={S5.Information}/>
                <Route path="/list"
                       render={(routeProps) => (
                           <ListTable
                               requests={Data.requests}
                               removeRequest={removeRequest}
                               isAdmin="true"
                               {...routeProps}
                           />
                       )}
                />
                <Route path="/request" component={RequestForm}/>
                <Route component={NotFound}/>
            </Switch>
            <hr/>
>>>>>>> bed0e0c8f429c7cdda471992fca2af557ed94cc4
            <Footer/>
        </div>
    </Router>
)

ReactDOM.render(
    <div>
        <App/>
<<<<<<< HEAD
    </div>,
=======
    </div>
    ,
>>>>>>> bed0e0c8f429c7cdda471992fca2af557ed94cc4
    document.getElementById('root')
)

registerServiceWorker();
