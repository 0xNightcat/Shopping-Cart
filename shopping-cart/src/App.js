import react from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate  } from 'react-router-dom';

import './App.css';

import Shopping from './containers/Shopping/Shopping';
import About from './containers/About/About';
import Contact from './containers/Contact/Contact';
import Checkout from './containers/Checkout/Checkout';

class App extends react.Component {
render() {
    return (
      <div className='app'>
        <Router>
          <Routes>
            <Route path='/' element={<Navigate replace to='/shop' />} />
            <Route path='/shop' Component={Shopping} />
            <Route path='/about' Component={About} />
            <Route path='/contact' Component={Contact} />
            <Route path='/checkout' Component={Checkout} />
            <Route 
              path='*' style={{ textAlign:'center' }} element={<h1>Not Found</h1>} 
            />
          </Routes>
        </Router>
      </div>
    )
  }
}

export default App;