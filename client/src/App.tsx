import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import LoansPage from './pages/LoansPage';
import ApplicationPage from './pages/ApplicationPage';
import "./index.css"
const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <nav className="sidebar">
          <h2>CREDIT APP</h2>
          <ul>
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/loans">Loans</Link></li>
            <li><Link to="/apply">Apply</Link></li>
          </ul>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/loans" element={<LoansPage />} />
            <Route path="/apply" element={<ApplicationPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;