import './Avatar.css';

export default function Avatar({ user }) {
  if (!user) return null;
  return (
    <div className="avatar">
      {user.photo_url && (
        <img src={user.photo_url} alt="avatar" className="avatar-img" />
      )}
      <div className="avatar-name">{user.first_name}</div>
    </div>
  );
}

import PropTypes from 'prop-types';

Avatar.propTypes = {
  user: PropTypes.shape({
    first_name: PropTypes.string,
    photo_url: PropTypes.string,
  }),
};
