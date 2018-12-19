import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './Scss/App.scss';
import StartPage from './Pages/Start';
import CallbackPage from './Pages/Callback';
import NotFoundPage from './Pages/NotFound';
import Navbar from './UIComponents/Navbar';
import { AuthProvider } from "./Components/AuthContext";

class App extends Component {

  render() {
    return (
      <Router basename={'/dashboard/'}>
        <div className='container-fluid pl-0 pr-0'>
          <AuthProvider>
            <Navbar />
            <Switch>
              <Redirect from='/' exact to='/start' />
              <Route exact path='/start' component={StartPage} />
              <Route exact path='/login' component={CallbackPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </AuthProvider>
        </div>
      </Router>
    );
  }

}

export default App;