import { Home, Experience, Projects, Contact} from "./views";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {


  return (
    <div className="text-slate-700 font-body text-base">
      <Router>
        <Routes>
          <Route
            path="/" element={
              <>
                <Navbar/>
                <Home/>
                <Experience/>
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
