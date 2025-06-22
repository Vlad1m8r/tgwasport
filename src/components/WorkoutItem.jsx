export default function WorkoutItem({ workout }) {
  const date = new Date(workout.date);
  const label = date.toLocaleDateString('ru-RU', {
    weekday: 'long',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });

  return (
    <li className="workout-item">
      {label}
    </li>
  );
}

import PropTypes from 'prop-types';

WorkoutItem.propTypes = {
  workout: PropTypes.shape({
    date: PropTypes.string.isRequired,
  }).isRequired,
};
