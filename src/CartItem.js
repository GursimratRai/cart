import React from 'react';

class CartItem extends React.Component{
    constructor(){
        super();
        this.state={
            title:'Phone',
            price:900,
            qty:1,
            img:''
        }
        //used to bind the function 
        // this.increseQuantity = this.increseQuantity.bind(this);
    }
    // Another way to bind the function is by using arrow functions
    increseQuantity = () => {
       console.log(this.state);
    }
    render(){
        //Object destructuring
        const {price,title,qty} = this.state;
        return (
            <div className="cart-item">
                <div className = "left-block">
                <img style={styles.image}/>
                </div>
                <div className = "right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}}>{price}</div>
                    <div style={{color:'#777'}}>QTY:{qty}</div>
                    <div className = 'cart-item-actions'>
                        <img 
                            alt='increase'
                            className="action-icons" 
                            onClick = {this.increseQuantity}
                            src="https://image.flaticon.com/icons/svg/992/992651.svg"
                         />
                        <img 
                            alt='decrease' 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/1665/1665612.svg"
                        />
                        <img 
                            alt='delete' 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/1214/1214428.svg"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image:{
        height:110,
        width:110,
        borderRadius:4,
        backgroundColor:'#ccc'
    }
}

export default CartItem;