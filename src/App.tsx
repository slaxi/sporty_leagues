import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router';
import Home from './pages/Home';
import SeasonBadgePage from './components/season-badge-page/SeasonBadgePage';
import ErrorBoundary from './components/ErrorBoundary';

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
      </Routes>
    </Router>
  );
}

export default App;
