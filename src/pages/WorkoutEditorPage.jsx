import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import ExerciseForm from '../components/ExerciseForm';

import '../components/ExerciseForm.css';
import './WorkoutEditorPage.css';

export default function WorkoutEditorPage() {
  const navigate = useNavigate();
  const [workouts, setWorkouts] = useLocalStorage('workouts', []);
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [exercises, setExercises] = useState([]);

  const addExercise = (ex) => {
    setExercises(prev => [...prev, ex]);
  };

  const handleSave = () => {
    const workout = {
      id: Date.now(),
      date,
      exercises,
    };
    setWorkouts([...workouts, workout]);
    navigate('/workouts');
  };

  return (
    <div className="workout-editor">
      <label>
        Дата тренировки:
        <input type="date" value={date} onChange={e => setDate(e.target.value)} />
      </label>
      <ExerciseForm onAdd={addExercise} />
      <ul className="exercise-list">
        {exercises.map(ex => (
          <li key={ex.id}>{ex.name} - {ex.reps}x{ex.weight}</li>
        ))}
      </ul>
      <button onClick={handleSave}>Сохранить</button>
    </div>
  );
}
