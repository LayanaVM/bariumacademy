import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import DatePicker from "react-datepicker";
import PlacesAutocomplete, { geocodeByAddress } from "react-places-autocomplete";

import "react-phone-input-2/lib/style.css";
import "react-datepicker/dist/react-datepicker.css";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    Class: "",
    number: "",
    date: new Date(),
    location: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // inside RegistrationForm.tsx - replace handleSubmit with this exact code
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    // send JSON WITHOUT custom headers (avoids CORS preflight)
    const resp = await fetch("https://script.google.com/macros/s/AKfycby6odJFED3ikZS2RQFt1P7EqasWIlL1300FV5nmXsLPMp50PU9yzGPcekJFNU7KeRea/exec", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    // debug: print HTTP status and raw response
    console.log("HTTP status:", resp.status, resp.statusText);
    const text = await resp.text();
    console.log("Raw response text:", text);

    // try parse JSON if possible
    try {
      const json = JSON.parse(text);
      console.log("Parsed JSON response:", json);
    } catch (err) {
      console.log("Response is not JSON.");
    }

    if (!resp.ok) {
      throw new Error("Server returned " + resp.status);
    }

    alert("Thank you! Your registration has been received.");
    setFormData({ name: "", email: "", Class: "", number: "", date: new Date(), location: "", message: "" });
  } catch (err) {
    console.error("Submit error:", err);
    alert("Something went wrong. Please try again.");
  }
};


  return (
    <section id="registration" style={{ padding: "4rem 2rem", backgroundColor: "#fff", textAlign: "center" }}>
     <h3
  style={{
    fontSize: "2.25rem",
    marginBottom: "0.75rem",
    fontWeight: 700,
    color: "#222",
    letterSpacing: "1px",
  }}
>
  Book a Free Demo Session
</h3>

<h5
  style={{
    fontSize: "2rem",
    marginBottom: "2rem",
    fontWeight: 600,
    color: "#0077ff", // subtle accent color
    lineHeight: 1.3,
  }}
>
  Start Your Journey Today
</h5>

      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <input
          type="text"
          name="Class"
          placeholder="Class/Grade"
          value={formData.Class}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        {/* 🌍 Country code & flag phone input */}
        <PhoneInput
          country={"in"}
          value={formData.number}
          onChange={(value) => setFormData({ ...formData, number: value })}
          inputStyle={{ width: "100%", height: "45px", fontSize: "1rem" }}
        />

        {/* 📅 Date & Time Picker */}
        {/* 📅 Date & Time Picker (Improved Layout) */}
<div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "space-between" }}>
  {/* Date Picker */}
  <div style={{ flex: "1 1 48%", minWidth: "250px", textAlign: "left" }}>
    <label style={{ display: "block", fontWeight: 600, marginBottom: "0.5rem" }}>
      Select Date
    </label>
    <DatePicker
      selected={formData.date}
      onChange={(date: Date) => setFormData({ ...formData, date })}
      dateFormat="MMMM d, yyyy"
      placeholderText="Choose a date"
      className="datepicker-input"
      wrapperClassName="date-picker-wrapper"
      required
      style={inputStyle}
    />
  </div>

  {/* Time Picker */}
  <div style={{ flex: "1 1 48%", minWidth: "250px", textAlign: "left" }}>
    <label style={{ display: "block", fontWeight: 600, marginBottom: "0.5rem" }}>
      Preferred Time
    </label>
    <DatePicker
      selected={formData.date}
      onChange={(date: Date) => setFormData({ ...formData, date })}
      showTimeSelect
      showTimeSelectOnly
      timeIntervals={15}
      timeCaption="Time"
      dateFormat="h:mm aa"
      placeholderText="Select a time"
      className="timepicker-input"
      wrapperClassName="time-picker-wrapper"
      required
      style={inputStyle}
    />
  </div>
</div>

       {/* 📍 Location Input (temporary version without API) */}



        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          style={inputStyle}
        />

        <button type="submit" style={buttonStyle}>Submit</button>
      </form>
    </section>
  );
}

// shared styles
const inputStyle: React.CSSProperties = {
  padding: "0.75rem",
  borderRadius: "5px",
  border: "1px solid #ddd",
  fontSize: "1rem",
  width: "100%",
};

const buttonStyle: React.CSSProperties = {
  padding: "0.75rem",
  backgroundColor: "#222",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  fontSize: "1rem",
  cursor: "pointer",
};
