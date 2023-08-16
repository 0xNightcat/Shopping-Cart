import './Shop.css';

import Wrapper from '../../../hoc/Wrapper';
import Product from './Product/Product';

const Shop = (props) => {
   return (
      <Wrapper class='shop'>
            <h1>Shop</h1>
         <div className='products-inner'>
            <Product addPro={props.add} products={props.pros} />
         </div>
      </Wrapper>
   )
}

export default Shop;