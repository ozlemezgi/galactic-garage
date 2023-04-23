import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter ,Routes,Route
} from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import StarshipList from './components/StarshipList/StarshipList';
import StarshipDetails from './components/StarshipDetails/StarshipDetails';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="about" element={<About />}></Route>
        <Route path="starship" element={<StarshipList />}></Route>
        <Route path="starship/:id" element={<StarshipDetails />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);


