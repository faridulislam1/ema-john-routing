import React from 'react';

const ReviewIteam = (props) => {
    console.log(props);
    const {name,quantity,key,price}=props.product;
    const ReviewIteamStyle={
        borderBottom:'1px solid lightgray',
        marginBottom:'4px',
        paddingBottom:'5px',
        marginLeft:'200px'

    }
    return (
        <div style={ReviewIteamStyle}className="review-item">
            <h1 style={{ marginLeft:'-9px',fontSize:'18px'}}className="product-name">{name}</h1>
            <h5>Quantity: {quantity}</h5>
            <p><small>${price}</small></p>
            <br/>
            <button className="main-button"
             onClick={ () =>props.removeProduct(key)}
            
            >Remove</button>
        </div>
    );
};

export default ReviewIteam;