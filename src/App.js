import './App.css';
import React from 'react';
import Footer from '../../project-discord/src/components/Footer';
import Navigation from '../../project-discord/src/components/Navigation';
import Home from '../../project-discord/src/pages/PageHome';
import Login from '../../project-discord/src/pages/PageLogin';
import Nitro from '../../project-discord/src/pages/PageNitro';
import Securite from '../../project-discord/src/pages/PageSecurite';
import Error from '../../project-discord/src/pages/Error';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";




function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Nitro" element={<Nitro />} />
        <Route path="/Securite" element={<Securite />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
