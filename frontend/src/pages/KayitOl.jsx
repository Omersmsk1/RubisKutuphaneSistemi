import "./Giris.css";

function KayitOl() {
  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Kayıt Ol</h1>

        <input type="text" placeholder="Ad Soyad" />
        <input type="text" placeholder="Kullanıcı Adı" />
        <input type="email" placeholder="E-Posta" />
        <input type="password" placeholder="Şifre" />

        <button className="login-btn">
          Kayıt Ol
        </button>
      </div>
    </div>
  );
}

export default KayitOl;