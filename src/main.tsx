
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/index.css';
import './styles/modern/index.css';
import './styles/dark-mode-enhancement.css'; // Import our enhanced dark mode styles
import { initializeRouteHandling } from './utils/routeUtils';

// Initialize route handling for SPA
initializeRouteHandling();

// Detect if browserslist database is outdated
// const checkBrowserslistVersion = async () => {
//   try {
//     // Check is done client-side only in dev environment
//     if (process.env.NODE_ENV === 'development') {
//       const response = await fetch('https://caniuse.lite.version');
//       if (response.ok) {
//         console.log('Browserslist database is up to date!');
//       }
//     }
//   } catch (error) {
//     // Silently fail - not critical for application functioning
//     console.debug('Could not verify browserslist version.');
//   }
// };

// Check browserslist version
// checkBrowserslistVersion();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
