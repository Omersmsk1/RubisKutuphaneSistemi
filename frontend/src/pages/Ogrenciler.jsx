import { useEffect, useState } from "react";
import "./Ogrenciler.css";

function Ogrenciler() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    fetch("http://localhost:5000/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));

  }, []);

  return (
    <div className="ogrenciler-container">

      <h1>👥 Kayıtlı Öğrenciler</h1>

      <table>

        <thead>
          <tr>
            <th>Ad Soyad</th>
            <th>Öğrenci No</th>
            <th>Kullanıcı Adı</th>
            <th>E-Posta</th>
          </tr>
        </thead>

        <tbody>

          {users
            .filter(user => user.role === "student")
            .map((user) => (

            <tr key={user._id}>
              <td>{user.fullName}</td>
              <td>{user.studentNo}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default Ogrenciler;