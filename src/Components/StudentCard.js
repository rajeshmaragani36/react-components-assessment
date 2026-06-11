import React from "react";

function StudentCard({ name, course, city }) {
  return (
    <div
      style={{
        border: "2px solid #333",
        padding: "20px",
        borderRadius: "10px",
        margin: "20px auto",
        width: "300px",
      }}
    >
      <h2>{name}</h2>
      <p><strong>Course:</strong> {course}</p>
      <p><strong>City:</strong> {city}</p>
    </div>
  );
}

export default StudentCard;