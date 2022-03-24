import "./css/tailwind.output.css";
import Welcome from "./views/Welcome";
import AboutMe from "./views/AboutMe";
import Projects from "./views/Projects";
import Contact from "./views/Contact";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="scroll-smooth">
      <NavBar/>
      <Welcome
        title="PORTF"
        plus="22"
      />
      <AboutMe/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
