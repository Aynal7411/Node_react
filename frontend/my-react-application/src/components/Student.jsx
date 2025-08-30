import { useEffect, useState } from "react";

function Student() {
    const [students, setStudents] = useState([]);
   const [form, setForm] = useState({ name: "", age: "", skills: "" });

  useEffect(() => {
    fetch("http://localhost:5000/api/students")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = {
      name: form.name,
      age: parseInt(form.age),
      skills: form.skills.split(",").map((s) => s.trim())
    };

    fetch("http://localhost:5000/api/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newStudent)
    })
      .then((res) => res.json())
      .then((data) => setStudents([...students, data]));

    setForm({ name: "", age: "", skills: "" });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Student List</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Age"
          value={form.age}
          onChange={(e) => setForm({ ...form, age: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Skills (comma separated)"
          value={form.skills}
          onChange={(e) => setForm({ ...form, skills: e.target.value })}
          required
        />
        <button type="submit">Add Student</button>
      </form>

      {students.map((student, index) => (
        <div key={index} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
          <h3>{student.name}</h3>
          <p>Age: {student.age}</p>
          <p>Skills: {student.skills.join(", ")}</p>
        </div>
      ))}
    </div>
  );
}

export default Student;
