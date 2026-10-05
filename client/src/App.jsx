import React, { useState } from "react";
import "./index.css";

function App() {
  const [page, setPage] = useState("Dashboard");

  const patients = [
    { name: "Rahul", age: 32, disease: "Fever" },
    { name: "Anjali", age: 25, disease: "Diabetes" },
    { name: "Suresh", age: 45, disease: "Heart Problem" }
  ];

  return (
    <div>
      {/* Navbar */}
      <nav>
        <h2>🏥 LifeCare Hospital</h2>

        <div>
          <button onClick={() => setPage("Dashboard")}>
            Dashboard
          </button>

          <button onClick={() => setPage("Patients")}>
            Patients
          </button>

          <button onClick={() => setPage("Doctors")}>
            Doctors
          </button>

          <button onClick={() => setPage("Appointments")}>
            Appointments
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {page === "Dashboard" && (
          <section>
            <h1>Hospital Dashboard</h1>

            <div className="cards">
              <div>
                <h2>1,250</h2>
                <p>Total Patients</p>
              </div>

              <div>
                <h2>85</h2>
                <p>Total Doctors</p>
              </div>

              <div>
                <h2>120</h2>
                <p>Appointments</p>
              </div>

              <div>
                <h2>48</h2>
                <p>Available Beds</p>
              </div>
            </div>
          </section>
        )}

        {page === "Patients" && (
          <section>
            <h1>Patients</h1>

            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Disease</th>
                </tr>
              </thead>

              <tbody>
                {patients.map((patient, index) => (
                  <tr key={index}>
                    <td>{patient.name}</td>
                    <td>{patient.age}</td>
                    <td>{patient.disease}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}

        {page === "Doctors" && (
          <section>
            <h1>Doctors</h1>

            <div className="doctor">
              <h3>Dr. Priya Sharma</h3>
              <p>Cardiologist</p>
            </div>

            <div className="doctor">
              <h3>Dr. Arjun Rao</h3>
              <p>Neurologist</p>
            </div>

            <div className="doctor">
              <h3>Dr. Meena Devi</h3>
              <p>Orthopedic</p>
            </div>
          </section>
        )}

        {page === "Appointments" && (
          <section>
            <h1>Appointments</h1>

            <div className="appointment">
              <p><b>Rahul</b> - Dr. Priya Sharma</p>
              <p>10:00 AM - Cardiology</p>
            </div>

            <div className="appointment">
              <p><b>Anjali</b> - Dr. Arjun Rao</p>
              <p>11:30 AM - Neurology</p>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer>
        <h3>🏥 LifeCare Hospital</h3>
        <p>Quality Healthcare | Emergency: 108</p>
        <p>© 2026 LifeCare Hospital</p>
      </footer>
    </div>
  );
}

export default App;