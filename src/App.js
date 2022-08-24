import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/index";
import Sobre from "./Components/Sobre/index";
import Portifolio from "./Components/Portifolio/index";
import Contato from "./Components/Contato/index";


function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Home />
          <Sobre />
          <Portifolio />
          <Contato />
        </div>
    </BrowserRouter>
  );
}

export default App;
