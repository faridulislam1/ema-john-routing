import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './ProductDetail.css'


const ProductDetail = () => {
    const{productKey}=useParams();
    const product =fakeData.find(pd=>pd.key===productKey);
    console.log(product);
    return (
        <div className="pddetail">
            <h1>Your Product detail </h1>
            <Product ShowAddToCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDetail;