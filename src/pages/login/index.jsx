import React, { Component } from 'react';
import BookList from '../../components/BookList';
import { AuthContext } from '../../contexts/AuthContext';
import BookContextProvider from '../../contexts/BookContext';

class login extends Component {
  static contextType = AuthContext;
  render() {
    const { isLogin } = this.context
    const login = isLogin ? (
      <div>
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
        <BookContextProvider>
          <BookList />
        </BookContextProvider>
        {login}
      </div>
    );
  }
}

export default login;
