// src/pages/BookList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './BookList.css';

const BookList = () => {
  const [books, setBooks] = useState([]);

  // Fetch books from backend
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/books');
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books', error);
      }
    };

    fetchBooks();
  }, []);

  // Handle delete book
  const handleDelete = async (id) => {
    try {
      // Send DELETE request to the backend
      await axios.delete(`http://localhost:5000/api/books/${id}`);
      
      // Update the state to remove the book from the list
      setBooks(books.filter((book) => book._id !== id));
    } catch (error) {
      console.error('Error deleting book', error);
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Book List</h1>
      <div className="row">
        {books.map((book) => (
          <div key={book._id} className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text">{book.author}</p>
                <p className="card-text">{book.review}</p>
              </div>
              <div className="card-footer">
                <Link to={`/edit-book/${book._id}`} className="btn">Edit</Link>
                <button onClick={() => handleDelete(book._id)} className="btn">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
