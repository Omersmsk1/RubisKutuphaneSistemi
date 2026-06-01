import "./Kitaplar.css";

function Kitaplar() {
  return (
    <div className="kitaplar-container">
      <h1>Kitaplar</h1>

      <div className="kitap-card">
        <h3>Suç ve Ceza</h3>
        <p>Fyodor Dostoyevski</p>
      </div>

      <div className="kitap-card">
        <h3>Sefiller</h3>
        <p>Victor Hugo</p>
      </div>

      <div className="kitap-card">
        <h3>Nutuk</h3>
        <p>Mustafa Kemal Atatürk</p>
      </div>

      <div className="kitap-card">
        <h3>Simyacı</h3>
        <p>Paulo Coelho</p>
      </div>
    </div>
  );
}

export default Kitaplar;