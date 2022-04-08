import { Home, Experience, Projects, Contact} from "./views";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import scrollSpy from "./scripts/scrollSpy";

function App() {
  scrollSpy()

  return (
    <div className="
      w-screen h-screen snap-y snap-mandatory font-body text-base relative overflow-scroll scroll-smooth
      text-slate-700 
      dark:text-slate-400 dark:bg-slate-800

      after:content-['min'] after:absolute after:bg-red-500 after:top-10 after:text-white after:left-1/2 after:-translate-1/2-full

      sm:after:content-['small']
      md:after:content-['medium']
      lg:after:content-['large']
      xl:after:content-['xlarge']
      2xl:after:content-['2xlarge']
    ">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={
              <>
                <Home/>
                <Experience/>
                <Projects/>
                <Contact/>
              </>
            }
          />
          <Route path="/test" element={
              <>
                <Projects/>
              </>
            }
          />
        </Routes>
      </Router>
      {/*
        Faltan
        - funcion para enviar form
        - responsive
        x darkmode
        - open project
        x navegabilidad
        - función para navbar con scroll
      */}
    </div>
  );
}

export default App;
