import { findByLabelText } from '@testing-library/dom';
import React from 'react'

const Navbar = (props) => {
    return(
        <div style={styles.nav}>
            <div style={styles.cartName}>Cart</div>
            <div style={styles.cartIconContainer}>
                <img style={styles.cartIcon} src="https://image.flaticon.com/icons/svg/2121/2121815.svg" alt='cart Icon' />
                <span style={styles.cartCount}>{ props.count }</span>
            </div>
        </div>
    );

}

const styles = {
 
    nav:{
        height:70,
        background:'#4267b2',
        display: 'flex' ,
        justifyContent:'space-between',
        alignItems:'center'
    },
    cartName:{
        color:'white',
        fontSize:'2rem',
        paddingLeft:10
    },
    cartIconContainer:{
        position:'relative',
    },
    cartIcon:{
        height:30,
        marginRight:20
    },
    cartCount:{
        background:'yellow',
        borderRadius:'50%',
        padding:'4px 8px',
        position: 'absolute',
        right:7,
        top:-12
    }
}
export default Navbar;