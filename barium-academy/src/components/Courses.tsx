import React from "react";

const courses = [
  { id: 1, title: "UI curriculum", desc: "Learn advanced concepts with easy-to-follow explanations." },
  { id: 2, title: "UX  curriculum", desc: "Understand the laws of nature with practical examples." },
  { id: 3, title: "Indian curriclum", desc: "Get a clear grasp of chemical reactions and formulas." },
  { id: 4, title: "Programming and technologies", desc: "Improve grammar, writing, and communication skills." },
  { id: 5, title: "Foreign languages ", desc: "Learn programming and essential computing skills." },
  { id: 6, title: "extra curricular activites", desc: "Enhance your storytelling and writing abilities." },
];

export default function Courses() {
  return (
    <section
      id="courses"
      style={{ padding: "4rem 2rem", backgroundColor: "#ffffff", textAlign: "center" }}
    >
      <h2 style={{ fontSize: "2rem", marginBottom: "2rem", fontWeight: 700 }}>
        Our Courses
      </h2>
     <div className="courses-grid">
  {courses.map((course) => (
    <div
      key={course.id}
      style={{
        padding: "2rem",
        border: "1px solid #ddd",
        borderRadius: "10px",
        transition: "transform 0.3s, box-shadow 0.3s",
        cursor: "pointer",
      }}
      className="course-card"
    >
      <h3 style={{ fontSize: "1.25rem", marginBottom: "1rem", fontWeight: 600 }}>
        {course.title}
      </h3>
      <p style={{ color: "#555", fontSize: "1rem", lineHeight: "1.5" }}>
        {course.desc}
      </p>
    </div>
  ))}
</div>

      
      
    </section>
  );
}
