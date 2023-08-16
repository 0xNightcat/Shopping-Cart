import './SearchBar.css';

import Wrapper from '../../../hoc/Wrapper';

const SearchBar = (props) => {
   return (
      <Wrapper class='search-bar'>
         <div className='cart-item'>
            <a href='#cart' onClick={props.sidebar}>
               <span className='logo'>&#128722;</span>
               <span className='count'>{props.count}</span>
            </a>
         </div>
         <div className='search'>
            <a href='#search'>
            <span className='search-icon'>&#x2315;</span>
            </a>
            <input type='text' placeholder='search' onChange={props.search} />
         </div>
         <div className='dark-mode-item'>
            <a href='#test' onClick={props.darkMode}>&#10050;</a>
         </div>
      </Wrapper>
   )
}

export default SearchBar;
