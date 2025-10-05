import React, { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface Stat {
  value: number;
  label: string;
  suffix?: string;
}

const StatsCounter: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Allow multiple triggers
    threshold: 0.3,
  });

  const [startAnimation, setStartAnimation] = useState(false);

  const stats: Stat[] = [
    { value: 6000, label: "Students Enrolled", suffix: "+" },
    { value: 30000, label: "Classes Completed", suffix: "+" },
    { value: 98, label: "Satisfaction Rate", suffix: "%" },
    { value: 400, label: "Top Instructors", suffix: "+" },
  ];

  const handleMouseEnter = () => {
    setStartAnimation(false);
    setTimeout(() => setStartAnimation(true), 50); // Restart animation on hover
  };

  return (
    <section
      ref={ref}
      id="stats"
      onMouseEnter={handleMouseEnter}
      style={{
        padding: "4rem 2rem",
        backgroundColor: "#f9f9f9",
        textAlign: "center",
        transition: "all 0.3s ease",
      }}
    >
      <h2
        style={{
          fontSize: "2rem",
          marginBottom: "2rem",
          fontWeight: 700,
          color: "#222",
        }}
      >
        Our Achievements
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "2rem",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            style={{
              background: "#fff",
              borderRadius: "10px",
              padding: "2rem 1rem",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            className="stat-card"
          >
            <h3
              style={{
                fontSize: "2.5rem",
                color: "#222",
                marginBottom: "0.5rem",
                fontWeight: 700,
              }}
            >
              {inView && startAnimation ? (
                <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
              ) : (
                "0"
              )}
            </h3>
            <p style={{ fontSize: "1.1rem", color: "#555" }}>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsCounter;
