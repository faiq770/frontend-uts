import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StudentCard from "./components/StudentCard";
import RegisterForm from "./components/RegisterForm";
import "./App.css";

function App() {
  const sekolah = "SMK Teknologi";
  const [angka, setAngka] = useState(0);

  return (
    <>
      <Header />

      <main className="container">
        <h2>Selamat Datang di {sekolah}</h2>
        <p>Kelas XII - Sistem Informasi Siswa</p>

        <section>
          <h2>Daftar Siswa</h2>

          <StudentCard
            nama="Andi"
            kelas="XII RPL 1"
            jurusan="Rekayasa Perangkat Lunak"
          />

          <StudentCard
            nama="Budi"
            kelas="XII RPL 2"
            jurusan="Rekayasa Perangkat Lunak"
          />

          <StudentCard
            nama="Siti"
            kelas="XII TKJ"
            jurusan="Teknik Komputer dan Jaringan"
          />
        </section>

        <section>
          <h2>Counter: {angka}</h2>
          <button onClick={() => setAngka(angka + 1)}>
            Tambah
          </button>
          <button onClick={() => setAngka(angka - 1)}>
            Kurang
          </button>
          <button onClick={() => setAngka(0)}>
            Reset
          </button>
        </section>

        <RegisterForm />
      </main>

      <Footer />
    </>
  );
}

export default App;