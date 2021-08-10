import React, { useState } from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'

// extra imports
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const CheckoutPage = () => {
  const [status,setStatus] = useState(false);
  const { cart } = useCartContext()
  const notify = () =>{
   toast("Order Placed");
   setStatus(true);
  }
  return (
    <main>
      <PageHero title='checkout' />
      <Wrapper className='page'>
        {cart.length < 1 ? (
          <div className='empty'>
            <h2>your cart is empty</h2>
            <Link to='/products' className='btn'>
              fill it
            </Link>
          </div>
        ) : (
          <div>
          <button onClick={notify}>{status ? "Order Placed" : "Place Order"}</button>
        <ToastContainer />
        </div>
        )}
      </Wrapper>
    </main>
  )
}
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .empty {
    text-align: center;
  }
  button {
    padding:1rem;
    font-size:20px;
    cursor:pointer;background: var(--clr-primary-10);
    border:none;
    outline:none
  }
`
export default CheckoutPage
