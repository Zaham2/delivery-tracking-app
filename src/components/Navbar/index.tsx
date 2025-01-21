import LanguageDropdown from './LanguageDropdown'
import Logo from './Logo'
import NavSearchIcon from './NavSearchIcon'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {

  return (
    <nav className='navbar-container'>
      <Logo />
      <div className='nav-icons-container'>
        <NavSearchIcon />
        <ThemeToggle />
        <LanguageDropdown />
      </div>
    </nav>
)
}

export default Navbar
