import { Link } from 'react-router-dom';
import useTelegram from '../hooks/useTelegram';
import Avatar from '../components/Avatar';
import Calendar from '../components/Calendar';

import './HomePage.css';

export default function HomePage() {
  const { user } = useTelegram();
  return (
    <div className="home-page">
      <div className="user-section">
        <Avatar user={user} />
        <Calendar />
      </div>
      <div className="actions">
        <Link to="/workouts" className="btn">Тренировки</Link>
        <Link to="/stats" className="btn">Статистика</Link>
      </div>
    </div>
  );
}
