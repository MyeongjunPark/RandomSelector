import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Random from "./components/Random";

function App() {
  return (
    <div>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/random" element={<Random />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
