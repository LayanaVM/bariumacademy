import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "Student",
    quote: "Barium Academy helped me understand complex topics easily. Highly recommend!",
  },
  {
    id: 2,
    name: "Michael Lee",
    role: "Student",
    quote: "The tutors are amazing and really care about your progress.",
  },
  {
    id: 3,
    name: "Sofia Martinez",
    role: "Student",
    quote: "I improved my skills faster than I expected. Great platform!",
  },
];

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: false,
  };

  const reviewEmail = "youremail@example.com";

  return (
    <section
      id="testimonials"
      style={{
        padding: "4rem 2rem",
        background: "#f9faff",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "2rem",
          marginBottom: "2rem",
          fontWeight: 700,
          color: "#004aad",
        }}
      >
        What Our Students Say
      </h2>

      <Slider {...settings} className="testimonials-slider">
        {testimonials.map((t) => (
          <div key={t.id} className="testimonial-card">
            <p
              style={{
                fontStyle: "italic",
                color: "#555",
                marginBottom: "1rem",
                lineHeight: 1.6,
              }}
            >
              "{t.quote}"
            </p>
            <h4 style={{ margin: 0, fontWeight: 600, color: "#004aad" }}>
              {t.name}
            </h4>
            <small style={{ color: "#888" }}>{t.role}</small>
          </div>
        ))}
      </Slider>

      <div style={{ marginTop: "3rem" }}>
        <a
          href={`mailto:${reviewEmail}?subject=New Review for Barium Academy`}
          style={{
            padding: "0.8rem 1.8rem",
            backgroundColor: "#004aad",
            color: "#fff",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: 600,
            transition: "0.3s",
            display: "inline-block",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#0068c9")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#004aad")
          }
        >
          Add Your Review
        </a>
      </div>
    </section>
  );
}
