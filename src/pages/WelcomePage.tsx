import React from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Welcome to the Game Lobby</h1>
      <button onClick={() => navigate('/lobby')}>
        Connect Wallet
      </button>
    </div>
  );
};

export default WelcomePage;
