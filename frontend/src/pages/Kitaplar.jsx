import { useEffect, useState } from "react";
import "./Kitaplar.css";

function Kitaplar() {

  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const fetchBooks = () => {
    fetch("http://localhost:5000/api/books")
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const addBook = async () => {

    if (!title || !author) {
      alert("Lütfen tüm alanları doldurun");
      return;
    }

    await fetch("http://localhost:5000/api/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title,
        author
      })
    });

    setTitle("");
    setAuthor("");

    fetchBooks();
  };

  const deleteBook = async (id) => {

    await fetch(`http://localhost:5000/api/books/${id}`, {
      method: "DELETE"
    });

    fetchBooks();
  };

  return (
    <div className="kitaplar-container">

      <h1>Kitaplar</h1>

      <div className="form-container">

        <input
          type="text"
          placeholder="Kitap Adı"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Yazar"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <button onClick={addBook}>
          Kitap Ekle
        </button>

      </div>

      {books.map((book) => (
        <div className="kitap-card" key={book._id}>

          <h3>{book.title}</h3>

          <p>{book.author}</p>

          <p>{book.status}</p>

          <button
            className="delete-btn"
            onClick={() => deleteBook(book._id)}
          >
            Sil
          </button>

        </div>
      ))}

    </div>
  );
}

export default Kitaplar;