import { useState } from "react";
import "./Giris.css";

function KayitOl() {

  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async () => {

    if (!fullName || !username || !email || !password) {
      alert("Tüm alanları doldurun");
      return;
    }

    const response = await fetch(
      "http://localhost:5000/api/users/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          fullName,
          username,
          email,
          password
        })
      }
    );

    const data = await response.json();

    alert(data.message);

    setFullName("");
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login-container">

      <div className="login-card">

        <h1>Kayıt Ol</h1>

        <input
          type="text"
          placeholder="Ad Soyad"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Kullanıcı Adı"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="email"
          placeholder="E-Posta"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Şifre"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="login-btn"
          onClick={registerUser}
        >
          Kayıt Ol
        </button>

      </div>

    </div>
  );
}

export default KayitOl;