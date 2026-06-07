# 📚 Rubis Kütüphane Sistemi

## Proje Hakkında

Rubis Kütüphane Sistemi, öğrencilerin kütüphane kaynaklarını dijital ortamda yönetebilmesini sağlayan web tabanlı bir otomasyon sistemidir.

Sistem sayesinde öğrenciler kayıt olup giriş yapabilir, kitapları görüntüleyebilir, ödünç alabilir ve teslim edebilir. Yönetici kullanıcılar ise kitap yönetimi ve öğrenci takibi işlemlerini gerçekleştirebilir.

Bu proje, İstanbul Rumeli Üniversitesi Bilgisayar Mühendisliği Bölümü BLG330 Web Programlama dersi kapsamında MERN mimarisi kullanılarak geliştirilmiştir.

---

## Kullanılan Teknolojiler

### Frontend

* React.js
* React Router DOM
* CSS3

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
* Sisteme güvenli giriş yapma
* Kitap listesini görüntüleme
* Kitap ödünç alma
* Kendi ödünç aldığı kitapları görüntüleme
* Kendi ödünç aldığı kitapları teslim etme
* Güvenli çıkış yapma

### Yönetici İşlemleri

* Kitap ekleme
* Kitap silme
* Kayıtlı öğrencileri görüntüleme
* Tüm ödünç işlemlerini takip etme
* Sistem istatistiklerini görüntüleme

### Yetkilendirme Sistemi

* Admin ve Öğrenci rol ayrımı
* JWT tabanlı kimlik doğrulama
* Protected Route yapısı
* Yetkisiz erişimlerin engellenmesi

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
| status     | String |
| borrowedBy | String |

---

## Güvenlik Özellikleri

* Şifreler bcryptjs kullanılarak şifrelenmektedir.
* JWT ile kullanıcı doğrulaması yapılmaktadır.
* Korumalı sayfalar için Protected Route kullanılmaktadır.
* Kullanıcı yetkileri rol bazlı olarak kontrol edilmektedir.
* Öğrenciler yalnızca kendi ödünç aldıkları kitapları teslim edebilmektedir.

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
* Kitap Yönetimi
* Kitap Ödünç Alma
* Kitap Teslim
* Öğrenci Yönetimi

---

## Geliştirici

**Muhammet Ömer Şimşek**
Bilgisayar Mühendisliği
İstanbul Rumeli Üniversitesi
Öğrenci No: 241201026

---

## Ders Bilgisi

**BLG330 - Web Programlama**

2025-2026 Bahar Dönemi Projesi
