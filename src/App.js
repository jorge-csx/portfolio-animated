import Welcome from "./views/Welcome";
import Experience from "./views/Experience";
import Projects from "./views/Projects";
import Contact from "./views/Contact";
import Header from "./components/Header";

function App() {
  return (
    <div className="text-slate-700 font-body text-base">
      <Header/>
      <Welcome
        picProfileUrl="images/profile.jpg"
        location="Apodaca N.L."
        email="jorge_soriaw@outlook.com"
      />
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
