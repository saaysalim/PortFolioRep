import { Link , Routes, Route } from 'react-router-dom';
import SalimSaayLogo from './assets/SalimSaay.jpg';
import Logo from './assets/logo.png';
import About from './Pages/About';
import Home from'./Pages/Home';
import SignUp from'./Pages/SignUp';
import Contact from'./Pages/Contact';
import Gallery from './Pages/Gallery';
import Project from './Pages/Project';
function App() {
  return (
    <div>
       <nav>
       <ul className="navbar">
        <div className="navbar-logo">
        <div className="logo-container">
        <img src={Logo} alt="Logo" />
        <img src={SalimSaayLogo} alt="Logo" />
          </div>
        </div>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li> 
        <li><Link to="/signup">SignUp</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/NavBar">NavBar</Link></li>
        <li><Link to="/project">Project</Link></li>

      </ul>
    </nav>

      <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path="/about" element={<About />} />
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
      <Route path="/signUp" element={<SignUp/>}/>
      <Route path="/project" element={<Project/>}/>

    </Routes>
    <footer className="footer"> {/* Footer section */}
        <p>&copy; {new Date().getFullYear()} Salim Saay. All Rights Reserved.</p> {/* Dynamic copyright year */}
      </footer>    </div>
  );
}
export default App;
