import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Rating from 'react-rating';
const Product = (props) => {
    
    const {name,img,seller,price,stock,star}=props.product
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className='product'>
           <div> 
            <img src={img} alt=""/>
            </div>

        <div className='products-det'>
        <p className='text'>Product Name: <span className='child-txt'> {name}</span></p>
         <h5 className='text'>Brand: <span className='child-txt'> {seller}</span></h5>
         <h6 className='text'>price: <span className='child-txt'>${price}</span> </h6>
         <small className='text'>Item in Stock: <span className='child-txt'> {stock}</span></small>
         <br />
         <br />
         <Rating className='starr'
         initialRating={star}
          emptySymbol="far fa-star"
          fullSymbol="fas fa-star"
          />
         <br />
         <br />
         <button onClick={ ()=> props.handleAddToCart(props.product)} className='btn'>{element}Add to Cart</button>

        
        </div>

        </div>
    );
};

export default Product;