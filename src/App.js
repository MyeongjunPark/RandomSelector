import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import RandomFood from "./components/RandomFood";
import RandomCity from "./components/RandomCity";
import RandomPlay from "./components/RandomPlay";

function App() {
  return (
    <div>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/food" element={<RandomFood />} />
          <Route path="/city" element={<RandomCity />} />
          <Route path="/play" element={<RandomPlay />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
