import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component{
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
    render () {
        const {products} =this.state;
        console.log(products);
        return (
           <div className="cart">
               {products.map((product)=>{
                   return (
                       <CartItem 
                          product={product}
                          key={product.id}
                        //   func ={()=> {console.log('function')}}   we can pass the function as attribute to child Component
                        //   isLoggeIn = {false}                      we can pass the boolean 
                        //   jsx = {<h1>Test</h1>}                    we can pass the jsx too
                        //   compo = {<CartItem />}                   we can pass the component to from the parent to child component too
                        />
                   );
               })}

           </div>
        ); 
    }
}

export default Cart;