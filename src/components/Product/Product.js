import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


import './Product.css';
import { Link} from 'react-router-dom';

const Product = (props) => {
     //console.log(props)
    const { img, name, seller, price, stock,key } = props.product;

    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="product-name"><h4><Link to={"/product/"+ key}> {name} </Link></h4>
                <p className="pa"><small>by:{seller}</small></p>
                <p className="pa">${price}</p>
                <p className="pa"><small>Only {stock} left in stock -order soon</small></p>

                {props.ShowAddToCart && <button className="main-button"
                   onClick={() =>props.handleAddProduct(props.product)}
                ><FontAwesomeIcon icon={faShoppingCart} />Add to cart</button>}
            </div>
            </div>
    );
};

export default Product;