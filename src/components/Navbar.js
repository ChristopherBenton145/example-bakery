import { Link } from 'react-router-dom';
import '../styles/Navbar.scss';

function Navbar() {
  return (
    <div>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/store'>Store</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </nav>
    </div>
  );
}

export default Navbar;
