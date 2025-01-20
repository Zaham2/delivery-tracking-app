import LanguageDropdown from './NavbarAssets/LanguageDropdown'
import Logo from './NavbarAssets/Logo'
import NavSearchIcon from './NavbarAssets/NavSearchIcon'

const Navbar = () => {

  return (
    <nav>
      <div className='navbar-container'>
        <Logo />
        <div className='nav-icons-container'>
          <NavSearchIcon />
          <LanguageDropdown />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
