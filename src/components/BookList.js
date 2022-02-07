import React from 'react';
import { useContext } from 'react/cjs/react.development';
import { BookContext } from '../contexts/BookContext';

function BookList() {
    const {books} = useContext(BookContext)
  return(
    <ul>
        {books.map(book=>{
            return(
                <li>{book.title}</li>
            )
        })
        }
    </ul> 
  );
}

export default BookList;
