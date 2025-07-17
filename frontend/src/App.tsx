import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import AppRoutes from './routes';

const App: React.FC = () => (
  <ErrorBoundary>
    <Router>
      <nav>
        <Link to="/">Submit Secret</Link>
      </nav>
      <AppRoutes />
    </Router>
  </ErrorBoundary>
);

export default App; 