import React from 'react';
import AuthContext from '../Components/AuthContext';

class CallbackPage extends React.Component {
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
