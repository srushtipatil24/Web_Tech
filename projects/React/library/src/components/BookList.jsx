function BookList({ books, deleteBook }) {
  return (
    <div>
      <h2>Book List</h2>

      {books.length === 0 && <p>No books available</p>}

      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author}
            <button onClick={() => deleteBook(book.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;