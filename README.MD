# 📚 Rubis Kütüphane Sistemi

## Proje Hakkında

Rubis Kütüphane Sistemi, öğrencilerin kitapları görüntüleyebildiği, ödünç alabildiği ve teslim edebildiği web tabanlı bir kütüphane otomasyon sistemidir.

Proje, İstanbul Rumeli Üniversitesi Bilgisayar Mühendisliği Bölümü BLG330 Web Programlama dersi kapsamında geliştirilmiştir.

---

## Canlı Sistem

### Frontend

https://rubis-kutuphane-sistemi.vercel.app

### Backend API

https://rubiskutuphanesistemi.onrender.com

---

## Kullanılan Teknolojiler

### Frontend

* React.js
* React Router DOM
* CSS3
* Vite

### Backend

* Node.js
* Express.js

### Veritabanı

* MongoDB Atlas
* Mongoose

### Güvenlik

* JWT (JSON Web Token)
* bcryptjs

### Versiyon Kontrol

* Git
* GitHub

---

## Sistem Özellikleri

### Öğrenci İşlemleri

* Kullanıcı kaydı oluşturma
* Sisteme giriş yapma
* Kitapları görüntüleme
* Kitap ödünç alma
* Kendi ödünç aldığı kitapları teslim etme
* Çıkış yapma

### Yönetici İşlemleri

* Kitap ekleme
* Kitap silme
* Kayıtlı öğrencileri görüntüleme
* Tüm ödünç alınan kitapları görüntüleme

---

## Güvenlik Özellikleri

* Şifreler bcrypt ile şifrelenmektedir.
* JWT tabanlı kimlik doğrulama kullanılmaktadır.
* Protected Route yapısı kullanılmaktadır.
* Yetkisiz kullanıcıların korumalı sayfalara erişimi engellenmektedir.
* Yönetici yetkisi gerektiren işlemler JWT doğrulaması ile korunmaktadır.

---

## Veritabanı Yapısı

### User

| Alan      | Tip    |
| --------- | ------ |
| fullName  | String |
| studentNo | String |
| username  | String |
| email     | String |
| password  | String |
| role      | String |

### Book

| Alan       | Tip    |
| ---------- | ------ |
| title      | String |
| author     | String |
| quantity   | Number |
| status     | String |
| borrowedBy | String |

### Borrow

| Alan       | Tip      |
| ---------- | -------- |
| studentNo  | String   |
| bookId     | ObjectId |
| borrowDate | Date     |
| returnDate | Date     |
| returned   | Boolean  |

---

## Kurulum

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## Ortam Değişkenleri (.env)

```env
MONGO_URI=YOUR_MONGODB_CONNECTION
JWT_SECRET=YOUR_SECRET_KEY
```

---

## Proje Ekranları

* Giriş Sayfası
* Kayıt Ol Sayfası
* Dashboard
* Kitaplar
* Kitap Ödünç Alma
* Kitap Teslim
* Öğrenci Yönetimi

---

## Geliştirici

Muhammet Ömer Şimşek

İstanbul Rumeli Üniversitesi

Bilgisayar Mühendisliği

Öğrenci No: 241201026

---

## Ders Bilgisi

BLG330 - Web Programlama

2025-2026 Bahar Dönemi Projesi
