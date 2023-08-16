import react from 'react';

import './Contact.css';
import Wrapper from '../../hoc/Wrapper';
import Header from '../../components/Header/Header';

class Contact extends react.Component {
   render() {
      return (
         <Wrapper class='shopping contact'>
            <Header />
            <h1>Contact US</h1>
         </Wrapper>
      )
   }
}

export default Contact;