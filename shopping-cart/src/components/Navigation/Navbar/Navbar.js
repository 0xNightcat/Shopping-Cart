import './Navbar.css';

import Wrapper from '../../../hoc/Wrapper';
import logo from '../../../assets/images/logo-1.png';
import NavItem from './NavItem/NavItem';

const Navbar = (props) => {
   return (
      <Wrapper class='navbar'>
         <ul className='navbar-nav'>
            <NavItem link='/shop'>Shop</NavItem>
            <NavItem link='/about'>About</NavItem>
            <NavItem link='/contact'>Contact</NavItem>
         </ul>
         <div className='logo'>
            <img src={logo} width='70' height='70' alt='logo' />
         </div>
      </Wrapper>
   )
}

export default Navbar;