import { Link } from "react-router-dom";
import "./Giris.css";

function Giris() {
  return (
    <div className="login-container">
      <div className="login-card">

        <h1>Rubis Kütüphane Sistemi</h1>

        <input
          type="text"
          placeholder="Kullanıcı Adı"
        />

        <input
          type="password"
          placeholder="Şifre"
        />

        <button className="login-btn">
          Giriş Yap
        </button>

        <Link to="/kayit">
          <button className="register-btn">
            Kayıt Ol
          </button>
        </Link>

      </div>
    </div>
  );
}

export default Giris;