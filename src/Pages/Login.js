import { Component } from 'react';
import AuthContext from '../Contexts/AuthContext';

class LoginPage extends Component {
  async componentDidMount () {
    let value = this.context;
    await value.handleAuthorization();
  }

  render () {
    return null;
  }
}

LoginPage.contextType = AuthContext;
export default LoginPage;
