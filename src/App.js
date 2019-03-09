import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CallbackPage from './Pages/Callback';
import LoginPage from './Pages/Login';
import SilentLoginPage from './Pages/SilentLogin';
import NotFoundPage from './Pages/NotFound';
import SilentCallbackPage from './Pages/SilentCallback';
import HomePage from './Pages/Home/Home';
import { AuthProvider } from './Contexts/AuthContext';
import './Scss/App.scss';

const App = () => (
  <Router>
    <AuthProvider>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/dashboard/callback' component={CallbackPage} />
        <Route exact path='/dashboard/silent-login' component={SilentLoginPage} />
        <Route exact path='/dashboard/silent-callback' component={SilentCallbackPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </AuthProvider>
  </Router>
);

export default App;
