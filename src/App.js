import { Home, Experience, Projects, Contact} from "./views";
import { Header } from "./components/Layout";

function App() {
  return (
    <div className="text-slate-700 font-body text-base">
      <Header/>
      <Home/>
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
