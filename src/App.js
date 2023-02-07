import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FeaturePages from './pages/FeaturePages';
import HomePage from './pages/HomePage';
import SigninPage from './pages/SigninPage';
import TeamPage from './pages/TeamPage';

const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/features" element={<FeaturePages/>}/>
          <Route path="/team" element={<TeamPage/>}/>
          <Route path="/signin" element={<SigninPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App