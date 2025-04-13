import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import BookList from './pages/BookList';  
import AddBook from './pages/AddBook';  
import EditBook from './pages/EditBook';
import './App.css';  

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><a href="/books">Books</a></li>
            <li><a href="/add-book">Add Book</a></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/books" element={<BookList />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/edit-book/:id" element={<EditBook />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
