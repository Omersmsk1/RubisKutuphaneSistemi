import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Giris.css";

function Giris() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const loginUser = async () => {

    const response = await fetch(
      "http://localhost:5000/api/users/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username,
          password
        })
      }
    );

    const data = await response.json();

    alert(data.message);

    if (response.ok) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="login-container">

      <div className="login-card">

        <h1>Rubis Kütüphane Sistemi</h1>

        <input
          type="text"
          placeholder="Kullanıcı Adı"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Şifre"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="login-btn"
          onClick={loginUser}
        >
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