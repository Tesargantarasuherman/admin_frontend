import React from 'react';

const BookReducers = (state, action) => {
    let idS = Math.floor((Math.random() * 999) + 1);

    switch (action.type) {
        case 'ADD_BOOK':
            return [
                ...state,
                {
                    title: action.book.title,
                    author: action.book.author,
                    id: idS
                }
            ]
        case 'REMOVE_BOOK':
            return state.filter(book => book.id !== action.id)
        default:
            return state;
    }
}

export default BookReducers;
