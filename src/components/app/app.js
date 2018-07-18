import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Dashboard from '../dashboard/dashboard';
import Landing from '../landing/landing';

import './app.scss';

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <div>
          <header>
            <h1>Lab 28: Notes App</h1>
            <nav>
              <ul>
                <li><Link to="/">About</Link></li>
                <li><Link to="/dashboard">Notes Dashboard</Link></li>
              </ul>
            </nav>
          </header>
          <Route
            exact
            path="/"
            component={ Landing }
          />
          <Route
            exact
            path="/dashboard"
            component={ Dashboard }
          />
        </div>
      </BrowserRouter>
    </div>
  );
}
