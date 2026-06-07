import { useState } from "react";
import "./Giris.css";

function KayitOl() {

  const [fullName, setFullName] = useState("");
  const [studentNo, setStudentNo] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const registerUser = async () => {

    if (
      !fullName ||
      !studentNo ||
      !username ||
      !email ||
      !password
    ) {

      setMessage("Lütfen tüm alanları doldurun");
      setMessageType("error");

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
          studentNo,
          username,
          email,
          password
        })
      }
    );

    const data = await response.json();

    if (response.ok) {

      setMessage("Kayıt başarılı");
      setMessageType("success");

      setFullName("");
      setStudentNo("");
      setUsername("");
      setEmail("");
      setPassword("");

      setTimeout(() => {
        window.location.href = "/";
      }, 1000);

    } else {

      setMessage(data.message);
      setMessageType("error");

    }
  };

  return (
    <div className="login-container">

      <div className="login-card">

        <h1>Kayıt Ol</h1>

        {message && (
          <div className={`message ${messageType}`}>
            {message}
          </div>
        )}

        <input
          type="text"
          placeholder="Ad Soyad"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Öğrenci Numarası"
          value={studentNo}
          onChange={(e) => setStudentNo(e.target.value)}
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