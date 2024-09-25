import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header.jsx";
import Welcome from "./components/Welcome.jsx";
import Brands from "./components/Brands.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Resume from "./components/Resume.jsx";
import Say from "./components/Say.jsx";
import Trusted from "./components/Trusted.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <div className=".container-lg container">
        <Header />
        <Welcome />
        <Brands />
        <Skills />
        <Projects />
        <Resume />
        <Say />
        <Trusted />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
