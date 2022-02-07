import React, { createContext, useState } from 'react';
export const BookContext = createContext();

const BookContextProvider = (props) => {
    let idS = Math.floor((Math.random() * 999) + 1);
    const [books, setBooks] = useState([
        { title: 'lorem', id: 1, author: 'saya' },
        { title: 'lorem 2', id: 2, author: 'saya' },
        { title: 'lorem 3', id: 3, author: 'saya' },
    ])
    const addBook = (title, author) => {
        setBooks([...books, { title, author, id: idS }])
    }
    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id))
    }
    return (
        <BookContext.Provider value={{ books, addBook, removeBook }}>
            {props.children}
        </BookContext.Provider>
    );
}

export default BookContextProvider;
