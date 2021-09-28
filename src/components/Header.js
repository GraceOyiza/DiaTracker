import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import { clearHeaders } from '../services/common';

const Header = () => {
  const handleClick = () => {
    clearHeaders();
      <Redirect to="/" />;
  };
  return (
    <div className="d-flex align-items-end justify-content-center position-relative header">
      <Link to="/">
        <h3 className="heading">DiaTrack</h3>
      </Link>

      <button className="btn btn-secondary logout-btn" type="button" onClick={handleClick}>Logout</button>
    </div>
  );
};

export default Header;
