import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WorkoutsPage from './pages/WorkoutsPage';
import WorkoutEditorPage from './pages/WorkoutEditorPage';
import StatsPage from './pages/StatsPage';

import './App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/workouts" element={<WorkoutsPage />} />
        <Route path="/workout" element={<WorkoutEditorPage />} />
        <Route path="/stats" element={<StatsPage />} />
      </Routes>
    </Router>
  );
}
