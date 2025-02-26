import Navbar from "./componenets/Navbar/Navbar";
import About from "./componenets/About/About";
import Contact from "./componenets/Contact/Contact";
import Footer from "./componenets/Footer/Footer";
import { Routes, Route } from  "react-router";
import Home from './componenets/Home/Home';
import Services from "./componenets/Services/Services";
import Team from "./componenets/Team/Team";
import Client from "./componenets/Client/Client";
import "./App.css";
function App() {
  return (
    <div>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/client" element={<Client/>} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team/>} />
      </Routes>
    <Footer />
    </div>
  );
}

export default App;
