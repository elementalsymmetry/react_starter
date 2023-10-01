import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.js';

import './styles.css';  
import './App.css';
import './components/Header/Header.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);