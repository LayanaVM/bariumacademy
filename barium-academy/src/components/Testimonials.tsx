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
    speed: 700,
    slidesToShow: 1, // show 1 slide at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <section
      id="testimonials"
      style={{ padding: "4rem 2rem", backgroundColor: "#ffffff", textAlign: "center" }}
    >
      <h2 style={{ fontSize: "2rem", marginBottom: "2rem", fontWeight: 700 }}>
        What Our Students Say
      </h2>
      <Slider {...settings} className="testimonials-slider">
        {testimonials.map((t) => (
          <div key={t.id} className="testimonial-card">
            <p style={{ fontStyle: "italic", color: "#555", marginBottom: "1rem" }}>
              "{t.quote}"
            </p>
            <h4 style={{ margin: 0, fontWeight: 600 }}>{t.name}</h4>
            <small style={{ color: "#888" }}>{t.role}</small>
          </div>
        ))}
      </Slider>
    </section>
  );
}
