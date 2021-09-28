import { Link } from 'react-router-dom';

const Header = () => (
  <div className="d-flex align-items-end justify-content-center position-relative header">
    <Link to="/">
      <h3 className="heading">DiaTrack</h3>
    </Link>
  </div>
);

export default Header;
