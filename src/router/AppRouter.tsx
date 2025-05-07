import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WelcomePage from '../pages/WelcomePage';
import LobbyPage   from '../pages/LobbyPage';

const AppRouter: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/"       element={<WelcomePage />} />
      <Route path="/lobby"  element={<LobbyPage  />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
