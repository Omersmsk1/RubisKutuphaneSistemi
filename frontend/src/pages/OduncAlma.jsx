import "./OduncAlma.css";

function OduncAlma() {
  return (
    <div className="odunc-container">
      <h1>Kitap Ödünç Alma</h1>

      <input
        type="text"
        placeholder="Öğrenci Numarası"
      />

      <input
        type="text"
        placeholder="Kitap ID"
      />

      <button>Ödünç Ver</button>
    </div>
  );
}

export default OduncAlma;