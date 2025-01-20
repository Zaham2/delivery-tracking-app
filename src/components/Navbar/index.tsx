import LanguageDropdown from './LanguageDropdown'
import Logo from './Logo'
import NavSearchIcon from './NavSearchIcon'

const Navbar = () => {

  return (
    <nav className='navbar-container'>
      <Logo />
      <div className='nav-icons-container'>
        <NavSearchIcon />
        <LanguageDropdown />
      </div>
    </nav>
)
}

export default Navbar
