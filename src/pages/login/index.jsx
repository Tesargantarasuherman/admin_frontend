import React, { Component } from 'react';
import BookForm from '../../components/BookForm';
import BookList from '../../components/BookList';
import { AuthContext } from '../../contexts/AuthContext';
import BookContextProvider from '../../contexts/BookContext';

class login extends Component {
  static contextType = AuthContext;
  render() {
    return (
      <div>
        <BookContextProvider>
          {/* <BookList />
          <BookForm /> */}
        </BookContextProvider>
      </div>
    );
  }
}

export default login;
