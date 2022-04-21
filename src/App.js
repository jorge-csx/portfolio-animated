import { Home, Experience, Projects, Contact} from "./views";
import TabBar from "./components/TabBar";
import ProjectSerestech from "./pages/ProjectSerestech";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import useObserver from "./customHooks/useObserver";
import { useEffect } from "react";
import toggleClasses from "./scripts/toggleClasses"

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
    const indicators = document.querySelectorAll('#navbar ul li a')

    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = '#' + entry.target.id
      
        indicators.forEach(indicator => {
          const href  = indicator.attributes.href.nodeValue
          const title = indicator.querySelector('#indicator-title')
          const bar   = indicator.querySelector('#indicator-bar')

          if (href === id) {
            // Active
            toggleClasses(title, ["text-slate-700", "font-medium", "dark:text-white"], ["text-slate-500"])
            toggleClasses(bar, ["bg-cyan-400"], ["bg-trasparent", "group-hover:bg-slate-300", "dark:group-hover:bg-slate-400"])
          } else {
            // Inactive
            toggleClasses(title, ["text-slate-500"], ["text-slate-700", "font-medium", "dark:text-white"])
            toggleClasses(bar, ["bg-trasparent", "group-hover:bg-slate-300", "dark:group-hover:bg-slate-400"], ["bg-cyan-400"])
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
        "
      // sm:after:content-['small'] md:after:content-['medium'] lg:after:content-['large'] xl:after:content-['xlarge'] 2xl:after:content-['2xlarge']
      // after:content-['min'] after:absolute after:bg-red-500 after:top-10 after:text-white after:left-1/2 after:-translate-1/2-full
    >
    <Router>
      <TabBar/>
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
        <Route path="test" element={
          <ProjectSerestech/>
        }/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;