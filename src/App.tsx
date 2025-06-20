import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router';
import Home from './pages/Home';
import SeasonBadgePage from './pages/SeasonBadgePage';
import ErrorBoundary from './components/ErrorBoundary';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/badge/:leagueId"
          element={
            <ErrorBoundary>
              <SeasonBadgePage />
            </ErrorBoundary>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
