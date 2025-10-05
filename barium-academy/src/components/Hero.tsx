import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

 const slides = [
 

  {
    id: 2,
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1400&q=80",
    text: "Boost Your Skills Anytime",
    buttons: ["Book a Tutor", "Explore Courses"],
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80",
    text: "Connect with Mentors Globally",
    buttons: ["Book a Tutor", "Whatsapp"],
  },
];


  return (
    <section id="home" className="hero">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="slide">
            <img src={slide.image} alt={slide.text} className="slide-img" />
            <div className="slide-content">
              <h2 className="slide-title">{slide.text}</h2>
              <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginTop: "1rem" }}>
                {slide.buttons.map((btnText, idx) => (
                  <button key={idx} className="slide-button">{btnText}</button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
