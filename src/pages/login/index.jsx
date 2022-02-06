import React, { Component } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

class login extends Component {
  static contextType = AuthContext;
  render() {
    const { isLogin } = this.context
    const login = isLogin ? (
        login
      </div>
    )
      :
      (
        <div>
          not login
        </div>
      )

    return (
      <div>
        {login}
      </div>
    );
  }
}

export default login;
