import {Link} from 'react-router-dom'

function Header() {
    return <nav className="green darken-1">
    <div className="nav-wrapper">
      <a href="/" className="brand-logo">React recipe</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </div>
  </nav>
   
}

export {Header}