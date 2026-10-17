function StudentCard({ nama, kelas, jurusan }) {
  return (
    <div className="student-card">
      <h3>{nama}</h3>
      <p>Kelas: {kelas}</p>
      <p>Jurusan: {jurusan}</p>
    </div>
  );
}

export default StudentCard;