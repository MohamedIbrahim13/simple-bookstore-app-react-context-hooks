import React from 'react'
import { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'
import { useState } from 'react';

const NewBookForm = () => {
    const {dispatch} = useContext(BookContext);
    const [title,setTitle]=useState('');
    const [author,setAuthor] = useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch({type:'ADD_BOOK',book:{title,author}})
        setTitle('');
        setAuthor('');

    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} required placeholder="Book Title.."/>
            <input type="text" value={author} onChange={(e)=>setAuthor(e.target.value)} required placeholder="Book Author.."/>
            <button type="submit">Add Book</button>
        </form>
    )
}

export default NewBookForm
