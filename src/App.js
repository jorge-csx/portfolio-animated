import "./css/tailwind.output.css";
import "./vendor/boxicons-2.1.2/css/boxicons.min.css";
import Welcome from "./views/Welcome";
import AboutMe from "./views/AboutMe";
import Projects from "./views/Projects";
import Contact from "./views/Contact";
import NavBar from "./components/NavBar";

function App() {
  const greeting = () => {
    return (
      <div>
        <p>Hola, bienvenidx,</p>
        <p>soy <span className="code-highlight bg-code-highlight">Jorge Soria</span> y tengo <span className="code-highlight bg-code-highlight">21 años</span></p>
      </div>
    )
  }
  const linksArea = () => {
    const links = [
      {id : 1, icon : 'bx bxl-whatsapp',        url : '#'},
      {id : 2, icon : 'bx bx-paper-plane',      url : '#'},
      {id : 3, icon : 'bx bxl-linkedin-square', url : '#'},
      {id : 4, icon : 'bx bxl-github',          url : '#'},
      {id : 5, icon : 'bx bxl-dribbble',        url : '#'}
    ]
    const content = links.map((link) => 
      <a key={link.id} href={link.url}>
        <i className={link.icon + ' text-3xl'}/>
      </a>
    );
    return (
      <div className="mt-8 flex flex-row gap-3">
        {content}
      </div>
    )
  }
  
  return (
    <div className=" text-slate-700 font-body">
      <NavBar/>
      <Welcome
        title="🐳 Portafolio 2022"
        greeting={greeting()}
        job="Frontend Jr"
        links={linksArea()}
      />
      <AboutMe/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
