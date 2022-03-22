import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

        const [products, setProducts] = useState([])
        const [cart,setCart]=useState([])
        const [displayProducts, setDisplayProducts]= useState([])


        useEffect( ()=>{
          fetch('./products.JSON')
          .then(res => res.json())
          .then(data =>{
           
            setProducts(data)
            setDisplayProducts(data)

          })
        },[])
// local
useEffect(()=>{
if(products.length){
  const savedCart = getStoredCart()
  const storedCart =[]
  for (const key in savedCart)
 {
  const addedToProduct = products.find(product =>product.key===key)
  if(addedToProduct){
    const quantity = savedCart[key]
    addedToProduct.quantity=quantity
    storedCart.push (addedToProduct)
   
  }
 
}
setCart(storedCart)
}

},[products])

   const handleAddToCart=(product)=>{
    const newCart = [...cart,product]
    setCart(newCart)
    // local storage id set 
    addToDb(product.key)
   }
// search
  const handleSearch = event=>{
 
    const searchText =event.target.value
    // getting search value 
    const matchedProducts = products.filter(product =>product.name.toLowerCase().includes(searchText.toLowerCase()))
    // showing process
    setDisplayProducts(matchedProducts)
    console.log(matchedProducts.length)

   }
        
    return (
      // search
      <>
      <div className='search-container' >
<input type="text" onChange={handleSearch} placeholder='Search Product' />
      </div>

      <div className='shop'>
      <div className='product-container'>
    {
         displayProducts.map(product => <Product
         key ={product.key}
           product={product} 
           handleAddToCart={handleAddToCart}
           ></Product>)
    }
      </div>
      
      <div className='cart'>
          <Cart  cart={cart}></Cart>
      </div>
  </div>
  </>
    );
};

export default Shop;