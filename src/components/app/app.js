import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Dashboard from '../dashboard/dashboard';
import './app.scss';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <div>
            <header>
              <h1>Makin' Notes</h1>
              <nav>
                <ul>
                  <li><Link to="/">Main</Link></li>
                  <li><Link to="/dashboard">Dashboard</Link></li>
                </ul>
              </nav>
            </header>
            <Route
              exact
              path="/"
              component={() => <h1>I am your HOME page</h1>}
            />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
