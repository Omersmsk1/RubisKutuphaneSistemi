import "./Dashboard.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Dashboard() {

  const [books, setBooks] = useState([]);

  const navigate = useNavigate();

  const username = localStorage.getItem("username");
  const role = localStorage.getItem("role");
  const studentNo = localStorage.getItem("studentNo");

  const panelTitle =
    role === "admin"
      ? "👑 Yönetici Paneli"
      : "🎓 Öğrenci Paneli";

  const logout = () => {

    localStorage.clear();

    navigate("/");
  };

  useEffect(() => {

    fetch("https://rubiskutuphanesistemi.onrender.com/api/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));

  }, []);

  const totalBooks = books.length;

  const availableBooks = books.filter(
    (book) => book.status === "Müsait"
  ).length;

  const borrowedBooks = books.filter(
    (book) => book.status === "Ödünçte"
  ).length;

  return (
    <div className="dashboard-container">

      <h1>📚 Rubis Kütüphane Sistemi</h1>

      <div className="welcome-card">

        <h2>{panelTitle}</h2>

        <h3>
          👋 Hoş Geldin {username}
        </h3>

        {role === "admin" ? (
          <p>👑 Yetki: Yönetici</p>
        ) : (
          <p>🎓 Öğrenci No: {studentNo}</p>
        )}

      </div>

      <div className="stats-grid">

        <div className="stat-card">
          <h3>📚 Toplam Kitap</h3>
          <span>{totalBooks}</span>
        </div>

        <div className="stat-card">
          <h3>🟢 Müsait</h3>
          <span>{availableBooks}</span>
        </div>

        <div className="stat-card">
          <h3>🔴 Ödünçte</h3>
          <span>{borrowedBooks}</span>
        </div>

      </div>

      <div className="dashboard-grid">

        {role === "admin" && (
          <Link to="/ogrenciler">
            <div className="card">
              <h2>👥 Öğrenciler</h2>
            </div>
          </Link>
        )}

        <Link to="/kitaplar">
          <div className="card">
            <h2>📚 Kitaplar</h2>
          </div>
        </Link>

        <Link to="/odunc">
          <div className="card">
            <h2>📖 Ödünç Al</h2>
          </div>
        </Link>

        <Link to="/teslim">
          <div className="card">
            <h2>📥 Kitap Teslim</h2>
          </div>
        </Link>

        <div
          className="card"
          onClick={logout}
        >
          <h2>🚪 Çıkış Yap</h2>
        </div>

      </div>

      <footer className="footer">

        <h3>📚 Rubis Kütüphane Sistemi</h3>

        <p>
          BLG330 Web Programlama Projesi
        </p>

        <p>
          İstanbul Rumeli Üniversitesi
        </p>

        <p>
          Muhammet Ömer Şimşek - 241201026
        </p>

      </footer>

    </div>
  );
}

export default Dashboard;