import React, { useState } from "react";
import "./App.css";

function App() {
  const [students, setStudents] = useState([
    { name: "ram", age: 20, course: "BSC" },
    { name: "abc", age: 34, course: "45" },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    course: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const addStudent = () => {
    if (!formData.name || !formData.age || !formData.course) return;

    setStudents([...students, formData]);

    setFormData({
      name: "",
      age: "",
      course: "",
    });
  };

  return (
    <div className="container">
      <header className="hero">
        <h1>Student Management Portal</h1>

        <nav>
          <a href="/">Home</a>
          <a href="/">Students</a>
          <a href="/">Courses</a>
          <a href="/">Contact</a>
        </nav>
      </header>

      <section className="welcome">
        <h2>Welcome to Student Portal</h2>
        <p>Manage student records easily using React.</p>
      </section>

      <div className="cards">
        <div className="card">
          <h3>Students</h3>
          <p>Total student records managed in one place.</p>
        </div>

        <div className="card">
          <h3>Courses</h3>
          <p>Track enrolled courses and batches.</p>
        </div>

        <div className="card">
          <h3>Reports</h3>
          <p>Generate reports and monitor progress.</p>
        </div>
      </div>

      <section className="form-section">
        <h2>Add Student</h2>

        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
        />

        <input
          type="text"
          name="course"
          placeholder="Course"
          value={formData.course}
          onChange={handleChange}
        />

        <button onClick={addStudent}>Add Student</button>
      </section>

      <section className="table-section">
        <h2>Student Records</h2>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Course</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.course}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="resources">
        <h2>Learning Resources</h2>

        <div className="links">
          <a href="https://react.dev">React Documentation</a>
          <a href="https://developer.mozilla.org">
            MDN Web Docs
          </a>
          <a href="https://vitejs.dev">
            Vite Documentation
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
