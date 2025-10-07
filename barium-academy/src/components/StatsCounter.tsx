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
    triggerOnce: false,
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
        padding: "6rem 2rem",
        background: "linear-gradient(135deg, #e8f1ff 0%, #ffffff 100%)",
        textAlign: "center",
        transition: "all 0.3s ease",
      }}
    >
      <h2
        style={{
          fontSize: "2.25rem",
          marginBottom: "3rem",
          fontWeight: 800,
          color: "#004aad",
        }}
      >
        Our Achievements
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "2rem",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            style={{
              background: "#fff",
              borderRadius: "16px",
              padding: "2.5rem 1rem",
              boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "default",
            }}
            className="stat-card"
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.08)";
            }}
          >
            <h3
              style={{
                fontSize: "2.5rem",
                color: "#004aad",
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
            <p
              style={{
                fontSize: "1.1rem",
                color: "#555",
                fontWeight: 600,
              }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsCounter;
