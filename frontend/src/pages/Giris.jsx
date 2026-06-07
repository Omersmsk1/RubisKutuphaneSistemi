import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Giris.css";

function Giris() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

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

    if (!response.ok) {

      setMessage(data.message);
      setMessageType("error");

      return;
    }

    localStorage.setItem(
      "studentNo",
      data.studentNo
    );

    localStorage.setItem(
      "username",
      data.username
    );

    localStorage.setItem(
      "role",
      data.role
    );

    localStorage.setItem(
      "token",
      data.token
    );

    setMessage("Giriş başarılı");
    setMessageType("success");

    setTimeout(() => {
      navigate("/dashboard");
    }, 1000);
  };

  return (
    <div className="login-container">

      <div className="login-card">

        <h1>📚 Rubis Kütüphane Sistemi</h1>

        {message && (
          <div className={`message ${messageType}`}>
            {message}
          </div>
        )}

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