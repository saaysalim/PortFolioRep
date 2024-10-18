import { Link } from 'react-router-dom';
function NavBar() {
  return (
    <nav>
      <ul className="navbar">
        <div className="navbar-logo">
        </div>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/project">Project</Link></li>
        <li><Link to="/contact">Contact</Link></li> {/* Corrected the typo 'conctact' */}
        <li><Link to="/signup">SignUp</Link></li>
        <li><Link to="/news">News</Link></li>
        <li><Link to="/chat">Chat</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;

