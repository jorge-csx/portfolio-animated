import { Home, Experience, Projects, Contact} from "./views";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import useObserver from "./customHooks/useObserver";
import { useEffect } from "react";

function App() {
  const [observer, setElements, entries] = useObserver({
    threshold : 0.5,
    rootMargin: '0px',
  })

  useEffect(() => {
    const sections = document.querySelectorAll('section')
    setElements(sections)
  }, [setElements])

  // Efecto que se ejecuta cada una entry es intersectada
  useEffect(() => {
    const indicators = document.querySelectorAll('nav ul li a')

    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = '#' + entry.target.id
      
        indicators.forEach(indicator => {
          const href  = indicator.attributes.href.nodeValue
          const title = indicator.querySelector('#indicator-title')
          const bar   = indicator.querySelector('#indicator-bar')

          if (href === id) {
            // Active
            title.classList.add('text-slate-700', 'font-medium', 'dark:text-white')
            title.classList.remove('text-slate-500')
            
            bar.classList.add('bg-cyan-400')
            bar.classList.remove('bg-trasparent', 'group-hover:bg-slate-300', 'dark:group-hover:bg-slate-400')
          } else {
            // Inactive
            title.classList.remove('text-slate-700', 'font-medium', 'dark:text-white')
            title.classList.add('text-slate-500')

            bar.classList.remove('bg-cyan-400')
            bar.classList.add('bg-trasparent', 'group-hover:bg-slate-300', 'dark:group-hover:bg-slate-400')
          }
        })
      }
    })
  }, [entries, observer])

  return (
    <div 
      className="
        w-screen h-screen overflow-y-auto font-body text-base scroll-smooth
        text-slate-700
        dark:text-slate-400 dark:bg-slate-800

        sm:after:content-['small'] md:after:content-['medium'] lg:after:content-['large'] xl:after:content-['xlarge'] 2xl:after:content-['2xlarge']
      "
      // after:content-['min'] after:absolute after:bg-red-500 after:top-10 after:text-white after:left-1/2 after:-translate-1/2-full
    >
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={
            <>
              {/* <Home/>
              <Experience/> */}
              <Projects/>
              <Contact/>
            </>
          }
        />
      </Routes>
    </Router>
    </div>
  );
}

export default App;

{/*
  Faltan
  - funcion para enviar form
  - responsive
  x darkmode
  x open project
  x navegabilidad
  x función para navbar con scroll
*/}