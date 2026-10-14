import { useState } from "react";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [quantity, setQuantity] = useState("");
  const [search, setSearch] = useState("");

  function addBook() {
    if (name === "" || author === "" || quantity === "") {
      alert("Please fill all fields");
      return;
    }

    const newBook = {
      id: Date.now(),
      name: name,
      author: author,
      quantity: quantity
    };

    setBooks([...books, newBook]);

    setName("");
    setAuthor("");
    setQuantity("");
  }

  function deleteBook(id) {
    setBooks(books.filter((book) => book.id !== id));
  }

  const filteredBooks = books.filter((book) =>
    book.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Library Management System</h1>

      <h2>Add New Book</h2>

      <input
        type="text"
        placeholder="Book Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Author Name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />

      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        min="1"
        onChange={(e) => setQuantity(e.target.value)}
      />

      <button onClick={addBook}>Add Book</button>

      <h2>Book List</h2>

      <input
        type="text"
        placeholder="Search book..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            <th>Book Name</th>
            <th>Author</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredBooks.map((book) => (
            <tr key={book.id}>
              <td>{book.name}</td>
              <td>{book.author}</td>
              <td>{book.quantity}</td>
              <td>
                <button
                  className="delete"
                  onClick={() => deleteBook(book.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {filteredBooks.length === 0 && <p>No books found.</p>}
    </div>
  );
}

export default App;