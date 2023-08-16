import './Header.css';

import Navbar from '../Navigation/Navbar/Navbar';
import SearchBar from './SearchBar/SearchBar';

const Header = (props) => {
   return (
      <header className='header'>
         <Navbar />
         <SearchBar 
         count={props.prosCount} 
         sidebar={props.side} 
         darkMode={props.darkModer}
         search={props.search2}
         />
      </header>
   )
}

export default Header;