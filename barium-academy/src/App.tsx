import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhyBarium from "./components/WhyBarium";
import Courses from "./components/Courses";
import StatsCounter from "./components/StatsCounter";
import Testimonials from "./components/Testimonials";
import RegistrationForm from "./components/RegistrationForm";
import Footer from "./components/Footer";
import TutorRegistration from "./TutorRegistration";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home page */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <WhyBarium />
              <Courses />
              <StatsCounter />
              <Testimonials />
              <RegistrationForm />
              <Footer />
            </>
          }
        />

        {/* Tutor registration page */}
        <Route path="/tutor-registration" element={<TutorRegistration />} />
      </Routes>
    </Router>
  );
}

export default App;
