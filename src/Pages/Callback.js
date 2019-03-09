import { Component } from 'react';
import AuthContext from '../Contexts/AuthContext';

class CallbackPage extends Component {
  async componentDidMount () {
    let value = this.context;
    await value.handleCallback();
    this.props.history.replace('/');
  }

  render () {
    return null;
  }
}

CallbackPage.contextType = AuthContext;
export default CallbackPage;
