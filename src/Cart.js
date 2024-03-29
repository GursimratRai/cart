import React from 'react';
import CartItem from './CartItem';

const Cart = (props) =>{
    console.log('props',props);
    const {products} = props;
    console.log(products);
    return (
        <div className="cart">
            {products.map((product)=>{
                return (
                    <CartItem 
                        product={product}
                        key={product.id}
                        onIncreaseQuantity = {props.onIncreaseQuantity}
                        onDecreaseQuantity = {props.onDecreaseQuantity}
                        onDeleteProduct = {props.onDeleteProduct}
                    />
                );
            })}

        </div>
    ); 
}

export default Cart;