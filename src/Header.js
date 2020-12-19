import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  {Link} from 'react-router-dom';
class Header extends React.Component
{
  render()
  {
    return (
      <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="Wheather">Current Wheather</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>
    </nav>
      
    )
  }
}
export default Header;