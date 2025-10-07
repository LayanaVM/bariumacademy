import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import DatePicker from "react-datepicker";

import "react-phone-input-2/lib/style.css";
import "react-datepicker/dist/react-datepicker.css";

export default function TutorRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    date: new Date(),
    time: new Date(),
    description: "",
    cvLink: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const resp = await fetch(
        "https://script.google.com/macros/s/AKfycbzknubxzkO44TxZiyjTy4pDvz-yVrFAEKQCsAD5-2Q1Mx7kYarZtvmX9egWXkzPA7vKNQ/exec",
        {
          method: "POST",
          body: JSON.stringify(formData),
        }
      );

      const text = await resp.text();
      console.log("Response:", text);

      alert("Thank you! Your registration has been received.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        phone: "",
        date: new Date(),
        time: new Date(),
        description: "",
        cvLink: "",
      });
    } catch (err) {
      console.error("Submit error:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="tutor-registration"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e8f1ff 0%, #fefefe 100%)",
        padding: "5rem 2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          padding: "3rem 2.5rem",
          width: "100%",
          maxWidth: "720px",
          transition: "all 0.3s ease",
        }}
      >
        <h2
          style={{
            fontSize: "2.2rem",
            fontWeight: 800,
            color: "#004aad",
            textAlign: "center",
            marginBottom: "0.3rem",
          }}
        >
          Tutor Registration
        </h2>
        <p
          style={{
            textAlign: "center",
            fontSize: "1.2rem",
            color: "#f9b233",
            fontWeight: 600,
            marginBottom: "2.5rem",
          }}
        >
          Join Our Passionate Teaching Community
        </p>

        <form onSubmit={handleSubmit}>
          {/* Input wrapper for uniform spacing */}
          <div style={{ display: "grid", gap: "1.8rem" }}>
            {/* Full Name */}
            <div>
              <label
                style={{
                  color: "#004aad",
                  fontWeight: 600,
                  marginBottom: "0.4rem",
                  display: "block",
                }}
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
                className="modern-input"
              />
            </div>

            {/* Email */}
            <div>
              <label
                style={{
                  color: "#004aad",
                  fontWeight: 600,
                  marginBottom: "0.4rem",
                  display: "block",
                }}
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="modern-input"
              />
            </div>

            {/* Subject */}
            <div>
              <label
                style={{
                  color: "#004aad",
                  fontWeight: 600,
                  marginBottom: "0.4rem",
                  display: "block",
                }}
              >
                Subject Expertise
              </label>
              <input
                type="text"
                name="subject"
                placeholder="e.g. Mathematics, Physics"
                value={formData.subject}
                onChange={handleChange}
                required
                className="modern-input"
              />
            </div>

            {/* Phone */}
            <div>
              <label
                style={{
                  color: "#004aad",
                  fontWeight: 600,
                  marginBottom: "0.4rem",
                  display: "block",
                }}
              >
                Contact Number
              </label>
              <PhoneInput
                country={"in"}
                value={formData.phone}
                onChange={(value) => setFormData({ ...formData, phone: value })}
                inputStyle={{
                  width: "100%",
                  height: "50px",
                  borderRadius: "10px",
                  border: "1.5px solid #ccd5e0",
                  fontSize: "1rem",
                }}
              />
            </div>

            {/* Date & Time */}
            <div
              style={{
                display: "flex",
                gap: "1.5rem",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              <div style={{ flex: "1 1 48%" }}>
                <label
                  style={{
                    color: "#004aad",
                    fontWeight: 600,
                    marginBottom: "0.4rem",
                    display: "block",
                  }}
                >
                  Available Date
                </label>
                <DatePicker
                  selected={formData.date}
                  onChange={(date: Date) => setFormData({ ...formData, date })}
                  dateFormat="MMMM d, yyyy"
                  className="modern-input"
                />
              </div>

              <div style={{ flex: "1 1 48%" }}>
                <label
                  style={{
                    color: "#004aad",
                    fontWeight: 600,
                    marginBottom: "0.4rem",
                    display: "block",
                  }}
                >
                  Available Time
                </label>
                <DatePicker
                  selected={formData.time}
                  onChange={(time: Date) => setFormData({ ...formData, time })}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={15}
                  timeCaption="Time"
                  dateFormat="h:mm aa"
                  className="modern-input"
                />
              </div>
            </div>

            {/* CV Link */}
            <div>
              <label
                style={{
                  color: "#004aad",
                  fontWeight: 600,
                  marginBottom: "0.4rem",
                  display: "block",
                }}
              >
                CV (Google Drive Link)
              </label>
              <input
                type="url"
                name="cvLink"
                placeholder="Paste your Google Drive CV link"
                value={formData.cvLink}
                onChange={handleChange}
                className="modern-input"
              />
            </div>

            {/* About */}
            <div>
              <label
                style={{
                  color: "#004aad",
                  fontWeight: 600,
                  marginBottom: "0.4rem",
                  display: "block",
                }}
              >
                About You
              </label>
              <textarea
                name="description"
                placeholder="Briefly describe your teaching experience"
                value={formData.description}
                onChange={handleChange}
                className="modern-input"
                style={{ height: "110px", resize: "none" }}
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            style={{
              width: "100%",
              marginTop: "2rem",
              background:
                "linear-gradient(90deg, #004aad 0%, #0068c9 50%, #004aad 100%)",
              backgroundSize: "200% 100%",
              color: "#fff",
              border: "none",
              borderRadius: "12px",
              padding: "1rem",
              fontSize: "1.1rem",
              fontWeight: 700,
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundPosition = "100% 0")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundPosition = "0 0")
            }
          >
            Submit
          </button>
        </form>
      </div>

      {/* Input styles */}
      <style>
        {`
        .modern-input {
          width: 100%;
          padding: 0.9rem 1rem;
          border: 1.5px solid #ccd5e0;
          border-radius: 10px;
          font-size: 1rem;
          transition: all 0.3s ease;
          outline: none;
        }
        .modern-input:focus {
          border-color: #004aad;
          box-shadow: 0 0 0 3px rgba(0,74,173,0.1);
        }
        .modern-input::placeholder {
          color: #9daab6;
        }
        `}
      </style>
    </section>
  );
}
