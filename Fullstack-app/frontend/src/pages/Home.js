import React, { useEffect, useState } from "react";

function Home() {
  const [users, setUsers] = useState([
    { id: 1, name: "Rakesh" },
    { id: 2, name: "Chandu" },
    { id: 3, name: "Ramesh" },
  ]);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => setUsers((prev) => [...prev, ...data]))
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "40px 20px",
        textAlign: "center",
        background: "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          fontSize: "36px",
          marginBottom: "30px",
          color: "#fff",
          textShadow: "2px 2px 6px rgba(0,0,0,0.3)",
        }}
      >
        👥 Our Users
      </h1>

          <h1>Changes to reflect </h1>
                <h1>Changes to reflect </h1>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {users.map((u) => (
          <li
            key={u.id}
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              fontSize: "18px",
              fontWeight: "500",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow =
                "0 8px 20px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 4px 12px rgba(0,0,0,0.1)";
            }}
          >
            {u.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
