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
              img:'',
              id:1
          },
          {
              title:'laptop',
              price:30000,
              qty:1,
              img:'',
              id:2
          },
          {
              title:'watch',
              price:1000,
              qty:1,
              img:'',
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
      </div>
    );
  }
}

export default App;
