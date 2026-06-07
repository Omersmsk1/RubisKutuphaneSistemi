import { useEffect, useState } from "react";
import "./OduncAlma.css";

function OduncAlma() {

  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState("");

  const studentNo = localStorage.getItem("studentNo");
  const token = localStorage.getItem("token");

  useEffect(() => {

    fetch("https://rubiskutuphanesistemi.onrender.com/api/books")
      .then((res) => res.json())
      .then((data) => {

        const availableBooks = data.filter(
          (book) => book.status === "Müsait"
        );

        setBooks(availableBooks);
      });

  }, []);

  const borrowBook = async () => {

    if (!selectedBook) {
      alert("Kitap seçiniz");
      return;
    }

    await fetch(
      `https://rubiskutuphanesistemi.onrender.com/api/books/borrow/${selectedBook}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
          studentNo
        })
      }
    );

    alert("Kitap başarıyla ödünç alındı");

    window.location.reload();
  };

  return (
    <div className="odunc-container">

      <h1>📖 Kitap Ödünç Alma</h1>

      <p className="student-info">
        Öğrenci No: {studentNo}
      </p>

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
        📖 Ödünç Al
      </button>

    </div>
  );
}

export default OduncAlma;