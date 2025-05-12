import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { setupScrollRevealAnimation } from './utils/animationObserver.ts';

// Component to handle global side effects
const AppWithEffects = () => {
  useEffect(() => {
    // Set page title
    document.title = 'Trash to Treasure - Bali';
    
    // Setup animation observers
    const cleanupAnimation = setupScrollRevealAnimation();
    
    return () => {
      cleanupAnimation();
    };
  }, []);

  return <App />;
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppWithEffects />
  </StrictMode>
);
