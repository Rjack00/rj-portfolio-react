import { useState } from 'react'
import './Navbar.css'

const GIF_LOGO = 'https://media.tenor.com/ukFvMg2-CZYAAAAM/cubes-shapes.gif'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNav = () => setIsOpen(prev => !prev)

  // Close menu when a nav link is clicked
  const handleNavClick = () => setIsOpen(false)

  return (
    <header id="navbar" className={`topnav${isOpen ? ' responsive' : ''}`}>
      <div className="header-title-img">
        <img id="header-img" src={GIF_LOGO} alt="RJ Development logo" />
        <h1 id="nav-title" className="nav-title footer-title">RJ Development</h1>
      </div>

      <nav id="nav">
        {/* Hamburger icon — only visible on mobile */}
        <a href="#!" className="icon" onClick={e => { e.preventDefault(); toggleNav() }}>
          <i className="fa fa-bars"></i>
        </a>

        <a href="#main" onClick={handleNavClick}>Introduction</a>
        <a href="#projects" onClick={handleNavClick}>Projects</a>
        <a href="#contact" onClick={handleNavClick}>Contact Info</a>
      </nav>
    </header>
  )
}

export default Navbar
