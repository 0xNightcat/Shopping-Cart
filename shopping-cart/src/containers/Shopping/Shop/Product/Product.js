import './Product.css';

import Button from '../../../../components/UI/Button/Button';

const Product = (props) => {
   return (
      props.products.map((item) => {
         return (
            <div id={item.id} key={item.id} className='product-item'>
               <img src={item.img} width='180' height='180' />
               <h3 className='pro-name'>{item.title}</h3>
               <span className='price'>$ {item.price}</span>
               <Button class='btn-add-product add' click={props.addPro}>Add to Cart</Button>
            </div>
         )
      })
   )
}

export default Product;