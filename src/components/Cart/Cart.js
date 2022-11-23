import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart=props.cart;
    //console.log(cart);
    const total=cart.reduce((total,product)=> total+product.price*product.quantity,0)

    let shipping=0;
    if(total>35){
        shipping=0;
    }
    else if(total>15){
        shipping=4.99;
    }
    else if(total>0){
        shipping=12.99;
    }

    const tax=(total/10).toFixed(2);
    const fullTotal=(total+shipping+Number(tax)).toFixed(2);

    const formatNumber =num=>{
        const precision=num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h3>Order Summary</h3>
            <p>Items Order:{cart.length}</p>
            <p>Product Price:{formatNumber(total)}</p>
            <p>Shipping Cost:{shipping}</p>
            <p>Tax +Vat:{tax}</p>
            <p>Total Price:{fullTotal}</p>
            {
                props.children
            }
            
            
        </div>
    );
};

export default Cart;