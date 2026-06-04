import { useEffect, useState } from "react";
import "./OduncAlma.css";

function OduncAlma() {

  const [studentNo, setStudentNo] = useState("");
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState("");

  useEffect(() => {

    fetch("http://localhost:5000/api/books")
      .then((res) => res.json())
      .then((data) => {

        const availableBooks = data.filter(
          (book) => book.status === "Müsait"
        );

        setBooks(availableBooks);
      });

  }, []);

  const borrowBook = async () => {

    if (!studentNo || !selectedBook) {
      alert("Tüm alanları doldurun");
      return;
    }

    await fetch(
      `http://localhost:5000/api/books/borrow/${selectedBook}`,
      {
        method: "PUT"
      }
    );

    alert("Kitap ödünç verildi");

    window.location.reload();
  };

  return (
    <div className="odunc-container">

      <h1>Kitap Ödünç Alma</h1>

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

      <button onClick={borrowBook}>
        Ödünç Ver
      </button>

    </div>
  );
}

export default OduncAlma;