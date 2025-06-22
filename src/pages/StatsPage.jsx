import useLocalStorage from '../hooks/useLocalStorage';
import './StatsPage.css';

export default function StatsPage() {
  const [workouts] = useLocalStorage('workouts', []);

  const totalWorkouts = workouts.length;
  const exerciseTotals = {};

  workouts.forEach(w => {
    w.exercises.forEach(ex => {
      if (!exerciseTotals[ex.name]) {
        exerciseTotals[ex.name] = 0;
      }
      exerciseTotals[ex.name] += ex.reps * ex.weight;
    });
  });

  return (
    <div className="stats-page">
      <h2>Всего тренировок: {totalWorkouts}</h2>
      <h3>По упражнениям:</h3>
      <ul>
        {Object.entries(exerciseTotals).map(([name, total]) => (
          <li key={name}>{name}: {total}</li>
        ))}
      </ul>
    </div>
  );
}
