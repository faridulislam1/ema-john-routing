import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { clearLocalShoppingCart, getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewIteam from '../ReviewIteam/ReviewIteam';
import happyImage from '../../images/giphy.gif';

const Review = () => {
    const [cart,setCart]=useState([]);
    const[orderPlaced,setOrderPlaced]=useState(false);
    const haldlePlaceOrder=() =>{
        setCart([]);
        setOrderPlaced(true);
        clearLocalShoppingCart();
      }

    const removeProduct=(productKey)=>{
         const newCart=cart.filter(pd=>pd.key!==productKey)  ;
         setCart(newCart);
         removeFromDatabaseCart(productKey)  ;  
    }
    useEffect(()=>{
        const savedCart=getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        
        const cartProducts=productKeys.map(key=>{
            const product=fakeData.find(pd=>pd.key===key);
            product.quantity=savedCart[key];
            return product;

        }
            
           ); 
        setCart(cartProducts);
    },[])
    let thankyou;
    if(orderPlaced){
        thankyou=<img src={happyImage} alt=""/> 
    }
    return (
        <div className="twin-cointainer">
            <div className="product-cointainer">
           
            {
                    cart.map(pd=><ReviewIteam 
                    key={pd.key}
                    removeProduct={removeProduct}
                    product={pd}></ReviewIteam>)
            }
            {thankyou}
        </div>
        <div className="cart-container">
            <Cart cart={cart}>
                
              <button onClick={haldlePlaceOrder} className="main-button">Place Order</button>
            </Cart>
        </div>
        </div>
    );
};

export default Review;