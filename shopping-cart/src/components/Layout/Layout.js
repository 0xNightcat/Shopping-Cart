import { Navigate } from 'react-router-dom';

import './Layout.css';

import Wrapper from '../../hoc/Wrapper';
import Header from '../Header/Header';
import Shop from '../../containers/Shopping/Shop/Shop';
import Footer from '../Footer/Footer';
import SideBar from '../../containers/Shopping/SideBar/SideBar';
import Alert from '../UI/Alert/Alert';
import Loading from '../UI/Loading/Loading';

const Layout = (props) => {
   const body = document.querySelector('body');
   return (
      <Wrapper class='shopping'>
         {
            props.loading ? <Loading /> : null
         }
         {
            props.posted ? <Navigate replace to='/checkout' /> : null
         }
         <Alert 
         alertState={props.alertStatus} 
         class={props.color}
         text={props.alertText}
         />
         {
            body.setAttribute('class', props.darkLight)
         }
         <Header 
         prosCount={props.proCount} 
         side={props.sideshow} 
         darkModer={props.darkModeHandle}
         search2={props.inputSearch}
         />
         <Shop add={props.addProduct} pros={props.prs} />
         <Footer />
         <SideBar 
            removeItm={props.removeCartItem} 
            products={props.selItems} 
            close={props.closeSide} 
            visible={props.vis} 
            incPro={props.incAmount}
            decPro={props.decAmount}
            total={props.totalPrice}
            clear={props.clearCart}
            order={props.orderPros}
         />
      </Wrapper>
   )
}

export default Layout;