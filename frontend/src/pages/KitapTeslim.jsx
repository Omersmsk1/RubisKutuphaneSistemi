import "./KitapTeslim.css";

function KitapTeslim() {
  return (
    <div className="teslim-container">

      <h1>Kitap Teslim</h1>

      <input
        type="text"
        placeholder="Öğrenci Numarası"
      />

      <input
        type="text"
        placeholder="Kitap ID"
      />

      <button>
        Kitabı Teslim Al
      </button>

    </div>
  );
}

export default KitapTeslim;