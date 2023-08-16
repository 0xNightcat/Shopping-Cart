import react from 'react';
import axios from 'axios';

import './Shopping.css';

import Layout from '../../components/Layout/Layout';
import image from '../../assets/images/logo-1.png';

class Shopping extends react.Component {
   state = {
      products: [
         {img:image, id:10, title:'Asus N552', price:2000, amount:1},
         {img:image, id:20, title:'Acer 2023', price:3000, amount:1},
         {img:image, id:30, title:'Mac 2022', price:4000, amount:1},
         {img:image, id:40, title:'Dell H255', price:5000, amount:1},
      ],
      basePrices: [],
      selectedPros: [],
      searchedProducts: [],
      totalPrice: 0,
      darkMode: 'light',
      sidebar: false,
      alert: {status: false,color:'', text:''},
      inputSearchValue: '',
      posted: false,
      loading: false
   }

   totalPriceHandler = () => {
      // update the totalPrice
      setTimeout(() => {
         const prices = this.state.selectedPros.map(item => {
            return item.price;
         })

         const sum = prices.reduce((acc, val) => {
            return acc + val;
         }, 0)
         
         this.setState({ totalPrice: sum })
      }, 100);
   }

   componentDidMount() {
      // base price calculate
      const basePricesArr = [];
      this.state.products.forEach((item) => {
         const basePrices = {id: item.id, basePrice: item.price};
         basePricesArr.push(basePrices); 
         
         setTimeout(() => {
            this.setState({
                  basePrices: [basePricesArr]
            })
         }, 100);
      })

      // dark mode handle
      const darkModeState = window.localStorage.getItem('DarkMode');

      if(darkModeState) {
         this.setState({ darkMode: darkModeState })
      }
   }

   addProductHandler = (event) => {
      const parentElem = event.target.parentElement;
      const itemId = Number(parentElem.id);
      const itemImg = parentElem.querySelector('img').src;
      const itemTitle = parentElem.querySelector('.pro-name').textContent;
      const itemPrice = Number(parentElem.querySelector('.price').textContent.split(' ')[1]);     
      const itemAmount = 1;

      const selItem = {
         img:itemImg, 
         id:itemId, 
         title:itemTitle, 
         price:itemPrice, 
         amount:itemAmount
      }

      const currentStates = [...this.state.selectedPros];
      const newItem = selItem;

      this.setState({
         selectedPros: currentStates.concat(newItem)
      }, () => {
         // check for repeat items
         const ids = currentStates.map(item => {
            return item.id
         })
         
         if(ids.indexOf(newItem.id) !== -1) {
            this.setState({
               selectedPros: currentStates,
               alert: {
                  status: true,
                  color:'warning', 
                  text:'Product Already Added to Cart'
               }
            }, () => {
               setTimeout(() => {
                  this.setState({
                    alert: {status: false,color:'', text:''}
                  })
               }, 1500);
            })
         }

         // update the totalPrice
         this.totalPriceHandler();
      })
   }

   removeProductHandler = (event) => {
      const itemId = Number(event.target.parentElement.id);

      const remainedItems = this.state.selectedPros.filter(item => {
         return itemId !== item.id;
      })

      this.setState({
         selectedPros: remainedItems,
      })

      // update the totalPrice
      this.totalPriceHandler();
   }

   incAmountHandler = (event) => {
      event.preventDefault();

      const itemId = Number(event.target.parentElement.parentElement.id);
      const prevItem = this.state.basePrices[0].find(item => {
         return item.id === itemId;
      })
      const basePrice = prevItem.basePrice;

      this.state.selectedPros.forEach(item => {
         if(itemId === item.id) {
            item.amount += 1;
            item.price = item.amount * basePrice;
            
            this.setState({
               selectedPros: [...this.state.selectedPros]
            })
         }
      })

      // update the totalPrice
      this.totalPriceHandler();
   }

   decAmountHandler = (event) => {
      event.preventDefault();

      const itemId = Number(event.target.parentElement.parentElement.id);
      const prevItem = this.state.basePrices[0].find(item => {
         return item.id === itemId;
      })
      const basePrice = prevItem.basePrice;

      this.state.selectedPros.forEach(item => {
         if(itemId === item.id) {
            item.amount -= 1;
            item.price = item.amount * basePrice;
            
            this.setState({
               selectedPros: [...this.state.selectedPros]
            })
         }
      })

      // update the totalPrice
      this.totalPriceHandler();
   }

   clearCartHandler = () => {
      this.setState({
         selectedPros: [],
         totalPrice: 0,
         alert: {
            status: true,
            color:'warning', 
            text:'products removed from cart'
         }
      }, () => {
         setTimeout(() => {
            this.setState({
              alert: {status: false,color:'', text:''}
            })
         }, 1500);
      })
   }

   darkModeHandler = () => {
      if(this.state.darkMode === 'light') {
         this.setState({ darkMode: 'dark' }, () => {
            window.localStorage.setItem('DarkMode', 'dark');
         })
      } else {
         this.setState({ darkMode: 'light' }, () => {
            window.localStorage.setItem('DarkMode', 'light');
         })
      }
   }

   inputSearchHandler = (event) => {
      const inputValue = event.target.value;

      this.setState({
         inputSearchValue: inputValue
      }, () => {
         let foundProducts = this.state.products.filter((item) => {
            return (
               item.title.indexOf(this.state.inputSearchValue) !== -1
            )
         })

         let notFoundProducts = this.state.products.filter((item) => {
            return (
               item.title.indexOf(this.state.inputSearchValue) == -1
            )
         })

         this.setState({
            products: foundProducts
         }, () => {
            this.state.products = foundProducts.concat(notFoundProducts)
         })
      })
   }

   orderHandler = () => { 
      const data = {
         Products: this.state.selectedPros,
         Total: this.state.totalPrice,
         Customer: {
            name: 'Behnam Bahrami',
            email: 'test2023@gmail.com'
         }
      }

      if(this.state.selectedPros.length < 1) {
         this.setState({
            alert: {status: true, color:'danger', text:'Cart is Empty.'}
         }, () => {
            setTimeout(() => {
               this.setState({
                  alert: {status: false, color:'', text:''},
               })
            }, 1500);
         })
      } else {
         axios.post('http://localhost:8000/Shopping', data)
         .then((response) => {
            this.setState({ loading: true }, () => {
               setTimeout(() => {
                  this.setState({ posted: true })
               }, 1500);
            })
         }).then((error) => {
            console.log(error);
         })
      }

   }


   render() {
      return (
         <Layout 
         prs={this.state.products} 
         sideshow={() => this.setState({ sidebar: true })}
         vis={this.state.sidebar}
         closeSide={() => this.setState({ sidebar: false })}
         addProduct={this.addProductHandler}
         selItems={this.state.selectedPros}
         proCount={this.state.selectedPros.length}
         removeCartItem={this.removeProductHandler}
         incAmount={this.incAmountHandler}
         decAmount={this.decAmountHandler}
         totalPrice={this.state.totalPrice}
         clearCart={this.clearCartHandler}
         darkModeHandle={this.darkModeHandler}
         darkLight={this.state.darkMode}
         alertStatus={this.state.alert.status}
         color={this.state.alert.color}
         alertText={this.state.alert.text}
         inputSearch={this.inputSearchHandler}
         orderPros={this.orderHandler}
         posted={this.state.posted}
         loading={this.state.loading}
         />
      )
   }
}

export default Shopping;