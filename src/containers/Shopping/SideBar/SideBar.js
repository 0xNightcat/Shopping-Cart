import './SideBar.css';

import Pros from './Products/Pros';
import Button from '../../../components/UI/Button/Button';

const SideBar = (props) => {
   return (
      <div className='side-bar' style={{
         right: props.visible ? '0' : '-100%'
      }}>
         <div className='top'>
            <h2 className='title'>Shopping Cart</h2>
            <a className='close' href='#test' onClick={props.close}>X</a>
         </div>
         <div className='products'>
            <Pros 
            inc={props.incPro}
            dec={props.decPro}
            removeItem={props.removeItm} 
            items={props.products} 
            />
         </div>
         <div className='bottom'>
            <div className='total'>Total: $<span>{props.total}</span></div>
            <Button class='order' click={props.order}>Order</Button>
            <Button class='clear' click={props.clear}>Clear</Button>
         </div>
      </div>
   )
}

export default SideBar;