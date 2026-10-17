import { useState } from "react";

function RegisterForm() {
  const [nama, setNama] = useState("");
  const [jurusan, setJurusan] = useState("");
  const [kelas, setKelas] = useState("");
  const [setuju, setSetuju] = useState(false);
  const [pesan, setPesan] = useState("");
  const [data, setData] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    if (!nama.trim() || !jurusan.trim() || !kelas || !setuju) {
      setPesan("Semua kolom wajib diisi dan syarat harus disetujui!");
      setData(null);
      return;
    }

    setData({ nama, jurusan, kelas });
    setPesan("Pendaftaran berhasil!");
  }

  return (
    <section>
      <h2>Form Registrasi Siswa</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nama Lengkap"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />

        <input
          type="text"
          placeholder="Jurusan"
          value={jurusan}
          onChange={(e) => setJurusan(e.target.value)}
        />

        <select
          value={kelas}
          onChange={(e) => setKelas(e.target.value)}
        >
          <option value="">Pilih Kelas</option>
          <option value="XII RPL 1">XII RPL 1</option>
          <option value="XII RPL 2">XII RPL 2</option>
          <option value="XII TKJ">XII TKJ</option>
        </select>

        <label>
          <input
            type="checkbox"
            checked={setuju}
            onChange={(e) => setSetuju(e.target.checked)}
          />
          Saya menyetujui syarat pendaftaran
        </label>

        <button type="submit">Daftar</button>
      </form>

      {pesan && <p>{pesan}</p>}

      {data && (
        <div className="student-card">
          <h3>Data Pendaftaran</h3>
          <p>Nama: {data.nama}</p>
          <p>Jurusan: {data.jurusan}</p>
          <p>Kelas: {data.kelas}</p>
        </div>
      )}
    </section>
  );
}

export default RegisterForm;