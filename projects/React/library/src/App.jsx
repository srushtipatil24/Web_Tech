import { useState, useEffect } from "react";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  // Load from localStorage
  useEffect(() => {
    const savedBooks = JSON.parse(localStorage.getItem("books"));
    if (savedBooks) setBooks(savedBooks);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  const deleteBook = (id) => {
    setBooks(books.filter((b) => b.id !== id));
  };

  const filteredBooks = books.filter((b) =>
    b.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>📚 Library Management System</h1>

      <SearchBar setSearch={setSearch} />
      <AddBook addBook={addBook} />
      <BookList books={filteredBooks} deleteBook={deleteBook} />
    </div>
  );
}

export default App;