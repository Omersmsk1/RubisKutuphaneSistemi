import { useEffect, useState } from "react";
import "./KitapTeslim.css";

function KitapTeslim() {

  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState("");

  const studentNo = localStorage.getItem("studentNo");
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  useEffect(() => {

    fetch("https://rubiskutuphanesistemi.onrender.com/api/books")
      .then((res) => res.json())
      .then((data) => {

        const borrowedBooks = data.filter((book) => {

          if (role === "admin") {
            return book.status === "Ödünçte";
          }

          return (
            book.status === "Ödünçte" &&
            book.borrowedBy === studentNo
          );

        });

        setBooks(borrowedBooks);
      });

  }, [role, studentNo]);

  const returnBook = async () => {

    if (!selectedBook) {
      alert("Kitap seçiniz");
      return;
    }

    await fetch(
      `https://rubiskutuphanesistemi.onrender.com/api/books/return/${selectedBook}`,
      {
        method: "PUT",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      }
    );

    alert("Kitap başarıyla teslim edildi");

    setBooks(
      books.filter(
        (book) => book._id !== selectedBook
      )
    );

    setSelectedBook("");
  };

  return (
    <div className="teslim-container">

      <h1>📥 Kitap Teslim</h1>

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

      <button onClick={returnBook}>
        📥 Kitabı Teslim Et
      </button>

    </div>
  );
}

export default KitapTeslim;