import React from 'react';

const Cart = (props) => {
  const {cart} =props
//   local
  let totalQuantity = 0
  //
  let total = 0
  for(const product of cart){
    //   local
    if(!product.quantity){
       product.quantity=1 
    }
      total = total + product.price * product.quantity
      totalQuantity = totalQuantity + product.quantity
  }
  const shipping = total > 0 ? 15:0
  const tax = (total+shipping)*0.10
  const withOutTax = total+shipping
const grandTotal = total +shipping+tax
    return (
        
        <div>
        <h2 className='order'>Order List</h2>
   <hr />
   
   <h6>Items Ordered:{totalQuantity}</h6>
{/*    
   <p>Items:</p> */}
   <p className='tet'>Shipping Cost:  <span className='child-txt'> {shipping.toFixed(2)}</span></p>


   <p className='tet'>Without Tax: <span className='child-txt'>{withOutTax.toFixed(2)} </span></p>

   <p className='tet'>Tax : <span className='child-txt'>{tax.toFixed(2)}</span></p>

   <p className='tet'>Total:  <span className='child-txt'>{grandTotal.toFixed(2)}</span></p>

   <button className='btn'>Place Order</button>
   </div>
    );
};

export default Cart;