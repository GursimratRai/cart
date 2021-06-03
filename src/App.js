import React from 'react';
import './App.css';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component{
    constructor(){
      super();
      this.state={
          products:[{
              title:'Phone',
              price:19000,
              qty:1,
              img:'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBob25lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
              id:1
          },
          {
              title:'laptop',
              price:30000,
              qty:1,
              img:'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ3fHxsYXB0b3B8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
              id:2
          },
          {
              title:'watch',
              price:1000,
              qty:1,
              img:'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2F0Y2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
              id:3
          }]

      }
  }

  handleIncreaseQuantity = (product)=>{

      const {products} = this.state;
      const index = products.indexOf(product);

      products[index].qty+=1;
      this.setState({
          products:products
      })
  }

  handleDecreaseQuantity = (product)=>{

      if(product.qty==0){
          return;
      }
      
      const {products} = this.state;
      const index = products.indexOf(product);
      
      products[index].qty-=1;
      this.setState({
          products:products
      })
  }

  handleDeleteProduct = (id) => {
    const {products} = this.state;
    const items = products.filter((item) => item.id!=id );
    this.setState({
        products:items
    });
  }

  getCartCount = () => {
    const { products } = this.state;

    let count = 0;

    products.forEach(product => {
       count+=product.qty;      
    });

    return count;
  }

  getCartTotal = () => {
    const { products } = this.state;

    let cartTotal = 0; 
    
    products.map((product)=>{
      cartTotal = cartTotal + (product.qty * product.price);
    })

    return cartTotal;
  }

  render(){
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count = {this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity = {this.handleIncreaseQuantity}
          onDecreaseQuantity = {this.handleDecreaseQuantity}
          onDeleteProduct = {this.handleDeleteProduct}
        />
        <div style={{fontSize:'2rem'}} > Total : { this.getCartTotal() } </div>
      </div>
    );
  }
}

export default App;
