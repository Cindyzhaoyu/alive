import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './App.css';

ReactDOM.render(
  <div className="page">
    <Router>
      <App />
    </Router>
  </div>,
  document.getElementById('app')
);
