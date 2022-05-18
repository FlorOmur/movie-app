import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Films from "./components/Films";
import Serials from "./components/Serials";
import More from "./components/More";
import People from "./components/People";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/films" element={<Films />}/>
          <Route path="/serials" element={<Serials />}/>
          <Route path="/people" element={<People />}/>
          <Route path="/more" element={<More />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
