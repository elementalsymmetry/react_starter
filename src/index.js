import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.js';

// ALL stylesheet imports go here
import './index.css';  
// import './App.css';
// import './components/Header/Header.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);