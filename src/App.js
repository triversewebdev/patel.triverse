import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';
import "../src/App.css";
import "../src/fonts/stylesheet.css";
import Home from "./Home";
import "aos/dist/aos.css";
import Aos from "aos";
import Header from "./components/Header/Index"
import Footer from "./components/Footer/Index"
import AboutPatal from "./AboutPatal";
import Error from './Error'
import BookAppointment from "./BookAppointment";
import DoctorDetails from "./DoctorDetails";
import Doctors from "./Doctors";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about-us" element={<AboutPatal />} />
        <Route exact path="/doctors" element={<Doctors />} />
        <Route exact path="/doctor-details/:slug" element={<DoctorDetails />} />
        <Route exact path="/book-an-appoinment" element={<BookAppointment />} />
        <Route path="*" element={<Error />} />
      </Routes>      
      <Footer />
    </Router>
  );
}

export default App;
