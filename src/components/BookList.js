import React from 'react';
import { useContext } from 'react/cjs/react.development';
import { BookContext } from '../contexts/BookContext';
import BookDetails from './BookDetails';

function BookList() {
    const {books} = useContext(BookContext)
  return(
    <ul>
        {books.map(book=>{
            return(
                <BookDetails book={book} key={book.id} />
            )
        })
        }
    </ul> 
  );
}

export default BookList;
