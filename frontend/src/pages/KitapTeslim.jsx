import { useEffect, useState } from "react";
import "./KitapTeslim.css";

function KitapTeslim() {

  const [studentNo, setStudentNo] = useState("");
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState("");

  useEffect(() => {

    fetch("http://localhost:5000/api/books")
      .then((res) => res.json())
      .then((data) => {

        const borrowedBooks = data.filter(
          (book) => book.status === "Ödünçte"
        );

        setBooks(borrowedBooks);
      });

  }, []);

  const returnBook = async () => {

    if (!studentNo || !selectedBook) {
      alert("Tüm alanları doldurun");
      return;
    }

    await fetch(
      `http://localhost:5000/api/books/return/${selectedBook}`,
      {
        method: "PUT"
      }
    );

    alert("Kitap teslim alındı");

    window.location.reload();
  };

  return (
    <div className="teslim-container">

      <h1>Kitap Teslim</h1>

      <input
        type="text"
        placeholder="Öğrenci Numarası"
        value={studentNo}
        onChange={(e) => setStudentNo(e.target.value)}
      />

      <select
        value={selectedBook}
        onChange={(e) => setSelectedBook(e.target.value)}
      >
        <option value="">
          Kitap Seçiniz
        </option>

        {books.map((book) => (
          <option
            key={book._id}
            value={book._id}
          >
            {book.title}
          </option>
        ))}
      </select>

      <button onClick={returnBook}>
        Kitabı Teslim Al
      </button>

    </div>
  );
}

export default KitapTeslim;