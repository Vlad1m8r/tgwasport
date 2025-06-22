import { useState } from 'react';

export default function ExerciseForm({ onAdd }) {
  const [name, setName] = useState('');
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');

  const handleAdd = () => {
    if (!name) return;
    onAdd({
      id: Date.now(),
      name,
      reps: Number(reps),
      weight: Number(weight)
    });
    setName('');
    setReps('');
    setWeight('');
  };

  return (
    <div className="exercise-form">
      <input
        type="text"
        placeholder="Упражнение"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Повторения"
        value={reps}
        onChange={e => setReps(e.target.value)}
      />
      <input
        type="number"
        placeholder="Вес"
        value={weight}
        onChange={e => setWeight(e.target.value)}
      />
      <button type="button" onClick={handleAdd}>Добавить</button>
    </div>
  );
}

import PropTypes from 'prop-types';

ExerciseForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};
