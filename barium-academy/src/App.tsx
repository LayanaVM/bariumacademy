import Header from "./components/Header";
import Hero from "./components/Hero";
import WhyBarium from "./components/WhyBarium";
import Courses from "./components/Courses";
import StatsCounter from "./components/StatsCounter";  // ✅ new
import Testimonials from "./components/Testimonials";
import RegistrationForm from "./components/RegistrationForm";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Header/>
      <Hero />
      <WhyBarium />
      <Courses/>
      <StatsCounter />       {/* ✅ add here */}
      <Testimonials />
      <RegistrationForm />
      <Footer />
    </>
  );
}

export default App;
