import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Hero() {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const slides = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1400&q=80",
      text: "Boost Your Skills Anytime",
      buttons: ["Book a Tutor", "Whatsapp", "Be a Tutor"],
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80",
      text: "Connect with Mentors Globally",
      buttons: ["Book a Tutor", "Whatsapp", "Be a Tutor"],
    },
  ];

  const handleButtonClick = (btnText: string) => {
    if (btnText.toLowerCase() === "be a tutor") {
      navigate("/tutor-registration");
    } else if (btnText.toLowerCase() === "whatsapp") {
      window.open("https://wa.me/1234567890", "_blank");
    } else if (btnText.toLowerCase() === "book a tutor") {
      navigate("/registration");
    }
  };

  return (
    <section id="home" className="hero">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="slide relative">
            <img
              src={slide.image}
              alt={slide.text}
              className="slide-img w-full h-[80vh] object-cover"
            />
            <div className="slide-content">
              <h2>{slide.text}</h2>

              {/* 🔹 Buttons Row — spaced nicely */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "1.5rem",
                  marginTop: "1.5rem",
                  flexWrap: "wrap",
                }}
              >
                {slide.buttons.map((btnText, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleButtonClick(btnText)}
                    style={{
                      backgroundColor: "#f9b233",
                      color: "#fff",
                      border: "none",
                      padding: "0.8rem 1.8rem",
                      borderRadius: "6px",
                      fontSize: "1rem",
                      fontWeight: 600,
                      cursor: "pointer",
                      transition: "background 0.3s ease",
                    }}
                    onMouseOver={(e) =>
                      ((e.target as HTMLButtonElement).style.backgroundColor =
                        "#004aad")
                    }
                    onMouseOut={(e) =>
                      ((e.target as HTMLButtonElement).style.backgroundColor =
                        "#f9b233")
                    }
                  >
                    {btnText}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
