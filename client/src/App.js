import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './componants/layout/Navbar';
import Home from './componants/pages/Home';
import About from './componants/pages/About';
import Regsiter from './componants/auth/Register';
import Login from './componants/auth/Login';
import Alerts from './componants/layout/Alerts';
import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar />
              <div className='container'>
                <Alerts />
                <Switch>
                  <Route exact path='/' component={Home}></Route>
                  <Route exact path='/about' component={About}></Route>
                  <Route exact path='/register' component={Regsiter}></Route>
                  <Route exact path='/login' component={Login}></Route>
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
};

export default App;
