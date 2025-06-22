import { useNavigate } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';
import WorkoutList from '../components/WorkoutList';

import '../components/WorkoutList.css';
import './WorkoutsPage.css';

export default function WorkoutsPage() {
  const navigate = useNavigate();
  const [workouts] = useLocalStorage('workouts', []);

  const handleAdd = () => {
    navigate('/workout');
  };

  return (
    <div className="workouts-page">
      <WorkoutList workouts={workouts} />
      <button onClick={handleAdd}>Добавить тренировку</button>
    </div>
  );
}
