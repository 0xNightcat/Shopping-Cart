import react from 'react';

import './Checkout.css';
import Wrapper from '../../hoc/Wrapper';
import Header from '../../components/Header/Header';

class Checkout extends react.Component {
   render() {
      return (
         <Wrapper class='shopping checkout'>
            <Header />
            <h1>Checkout</h1>
         </Wrapper>
      )
   }
}

export default Checkout;