import react from 'react';

import './About.css';
import Wrapper from '../../hoc/Wrapper';
import Header from '../../components/Header/Header';

class About extends react.Component {
   render() {
      return (
         <Wrapper class='shopping about'>
            <Header />
            <h1>About Us</h1>
         </Wrapper>
      )
   }
}

export default About;