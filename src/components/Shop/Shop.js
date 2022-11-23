
import React, { useEffect } from 'react';
import fakeData from '../../fakeData';
import{ useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { NavLink } from 'react-router-dom';


const Shop = () => {

      const first10 = fakeData.slice(0,40);
      const [products, setProduct]=useState(first10);
      const[cart,setCart]=useState([]);

      useEffect(()=>{
        const saveCart=getDatabaseCart();
        const productkeys=Object.keys(saveCart);
        const previouscart=productkeys.map(existingkey=>{
          const product=fakeData.find(pd=>pd.key===existingkey);
        product.quantity=saveCart[existingkey];
        return product;
        })
        setCart(previouscart);
      },[])
      const handleAddProduct = (product)=>{ 
        const toBeAddedKey= product.key;
        const sameProduct = cart.find(pd=>pd.key===toBeAddedKey);
        let count = 1;
        let newCart;
        if(sameProduct){
          count = sameProduct.quantity +1;
          sameProduct.quantity=count;
          const others=cart.filter(pd=>pd.key !==toBeAddedKey);
          newCart=[...others,sameProduct];
        }
        else{
          product.quantity=1;
          newCart=[...cart,product];
        }
         setCart(newCart);
         
         addToDatabaseCart(product.key,count);
      }

    return (
        <div className="twin-cointainer">
           <div className="product-cointainer">
          
            {
              products.map(pd=><Product 
                key={pd.key}
                ShowAddToCart={true}
                handleAddProduct={handleAddProduct}
                product={pd}>
                    
                </Product>)
            }
           </div>
           <div className="card-cointainer">
            <Cart cart={cart}></Cart>
            <NavLink to="/review">
            <button className="review">Review Page</button>

            </NavLink>

           </div> 
         
        
        </div>
    );
};

export default Shop;