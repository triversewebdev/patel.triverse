import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "../src/App.css";
import "../src/fonts/stylesheet.css";
import Home from "./Home";
import "aos/dist/aos.css";
import Aos from "aos";
import Header from "./components/Header/Index";
import Footer from "./components/Footer/Index";
import AboutPatal from "./AboutPatal";
import Error from "./Error";
import BookAppointment from "./BookAppointment";
import DoctorDetails from "./DoctorDetails";
import Doctors from "./Doctors";
import ScrollToTop from "./ScrollToTop";
import CenterExcellence from "./CenterExcellence";
import HeartCare from "./HeartCare";
import Services from "./Services";
import Media from "./Media";
import Events from "./Events";
import Video from "./Video";

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
        <Route
          exact
          path="/centres-of-excellence"
          element={<CenterExcellence />}
        />
        <Route
          exact
          path="/centres-of-excellence/:slug"
          element={<HeartCare />}
        />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/doctors" element={<Doctors />} />
        <Route exact path="/doctors/:slug" element={<DoctorDetails />} />
        <Route exact path="/book-an-appoinment" element={<BookAppointment />} />
        <Route exact path="/media" element={<Media />} />
        <Route exact path="/media/events" element={<Events />} />
        <Route exact path="/media/video" element={<Video />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
