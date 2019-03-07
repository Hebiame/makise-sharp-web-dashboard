import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CallbackPage from './Pages/Callback';
import LoginPage from './Pages/Login';
import SilentCallbackPage from './Pages/SilentCallback';
import SilentLoginPage from './Pages/SilentLogin';
import NotFoundPage from './Pages/NotFound';
import StartPage from './Pages/Start/Start';
import { AuthProvider } from './Components/AuthContext';
import './Scss/App.scss';

const App = props => (
  <Router>
    <AuthProvider>
      <Switch>
        <Route exact path='/' component={StartPage} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/dashboard/callback' component={CallbackPage} />
        <Route exact path='/dashboard/silent-callback' component={SilentCallbackPage} />
        <Route exact path='/dashboard/silent-login' component={SilentLoginPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </AuthProvider>
  </Router>
);

export default App;
