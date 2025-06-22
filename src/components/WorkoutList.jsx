import WorkoutItem from './WorkoutItem';

export default function WorkoutList({ workouts }) {
  if (!workouts.length) {
    return <p>Тренировок нет</p>;
  }
  return (
    <ul className="workout-list">
      {workouts.map(w => (
        <WorkoutItem key={w.id} workout={w} />
      ))}
    </ul>
  );
}

import PropTypes from 'prop-types';

WorkoutList.propTypes = {
  workouts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
