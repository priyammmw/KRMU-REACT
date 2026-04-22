import react from "react";
import Bollywood from "./Component/Bollywood";
import Hollywood from "./Component/Hollywood";
import Fitness from "./Component/Fitness";
import Food from "./Component/Food";
import Technology from "./Component/Technology";
import Home from "./Component/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
    return (
        <div>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/bollywood" element={<Bollywood />} />
              <Route path="/hollywood" element={<Hollywood />} />
              <Route path="/fitness" element={<Fitness />} />
              <Route path="/food" element={<Food />} />
              <Route path="/technology" element={<Technology />} />
            </Routes>
          </BrowserRouter>
        </div>
    )
} 
export default App;
