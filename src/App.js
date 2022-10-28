
import './App.css';
import {BrowserRouter, Routes, Route ,Navigate } from "react-router-dom";

import  Home  from "./Home/Home";
import  Architecture  from "./Services/Architecture";
import  Modelling  from "./Services/Modelling";
import  DecorPlan  from "./Services/DecorPlan";
import  UrbanDesign  from "./Services/UrbanDesign";
import  Planning  from "./Services/Planning";
import  InteriorDesign  from "./Services/InteriorDesign";
import  CottonHouse  from "./Projects/CottonHouse";
import  ArmadaCenter  from "./Projects/ArmadaCenter";
import  PrimeHotel  from "./Projects/PrimeHotel";
import  StonyaVilla  from "./Projects/StonyaVilla";
import Blog from "./Blog/Blog"
import Post from "./Blog/Post";
import Post2 from "./Blog/Post2";
import Post3 from "./Blog/Post3";
import Post4 from "./Blog/Post4";

function App() {
  return (
 
    <div className="App">


    <BrowserRouter>

       <Routes>
                    <Route path="/Swastika" element={<Home />} />
                    <Route path="/CottonHouse" element={<CottonHouse />} />
                    <Route path="/Architecture" element={<Architecture />} />
                    <Route path="/Modelling" element={<Modelling />} />
                    <Route path="/DecorPlan" element={<DecorPlan />} />
                    <Route path="/UrbanDesign" element={<UrbanDesign />} />
                    <Route path="/Planning" element={<Planning />} />
                    <Route path="/InteriorDesign" element={<InteriorDesign />} />
                    <Route path="/ArmadaCenter" element={<ArmadaCenter />} />
                    <Route path="/PrimeHotel" element={<PrimeHotel />} />
                    <Route path="/StonyaVilla" element={<StonyaVilla />} />
                    <Route path="/Post" element={<Post />} />
                    <Route path="/Post2" element={<Post2 />} />
                    <Route path="/Post3" element={<Post3 />} />
                    <Route path="/Post4" element={<Post4 />} />
                    <Route path="/Blog" element={<Blog />} />
                    <Route path="/*" element={<Navigate to="/Swastika"/>} />
                </Routes>
                </BrowserRouter>
    </div>
  
  );
}

export default App;
