import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavHeader from './components/NavHeader';
import Home from './routes/Home';
import Show from './routes/Show';
import './App.css';
import 'animate.css';

const App = () => (
  <Router>
    <div>
      <NavHeader />
    </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Show />} />
    </Routes>
  </Router>
);

export default App;
