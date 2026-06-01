import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1>Rubis Kütüphane Sistemi</h1>

      <div className="dashboard-grid">

        <div className="card">
          <h2>📚 Kitaplar</h2>
        </div>

        <div className="card">
          <h2>📖 Ödünç Al</h2>
        </div>

        <div className="card">
          <h2>📥 Kitap Teslim</h2>
        </div>

        <div className="card">
          <h2>🚪 Çıkış</h2>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;