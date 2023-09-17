
import axios from 'axios'
import { useState, useEffect } from 'react'
import CartItem from './CartItem'

export default function CartContent({ state, addItem, removeItem }) {
  
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

  const subtotal = state.reduce((total, item) => total + item.price * item.qty, 0)
  const totalItems = state.reduce((total, item) => total + item.qty, 0)

  const handleCheckout = async (e) => {
    e.preventDefault()
    setIsCreatingCheckoutSession(true)
    const { data } = await axios.post('/api/checkout',
    {
      priceId: 'priceId'
    },
    {
      headers: {
        "Content-Type": "application/json",
      }
    }
    )
    window.location.assign(data)
  }

  return (
    <section className="h-100 gradient-custom">
      <div className="container py-5">
        <div className="row d-flex justify-content-center my-4">
          <div className="col-md-8">
            <div className="card mb-4">
              <div className="card-header py-3">
                <h5 className="mb-0">Item List</h5>
              </div>
              <div className="card-body">
                {state.map((item) => (
                  <CartItem key={item.id} item={item} addItem={addItem} removeItem={removeItem} />
                ))}
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-header py-3 bg-light">
                <h5 className="mb-0">Order Summary</h5>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Products ({totalItems})<span>${Math.round(subtotal)}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>Total amount</strong>
                    </div>
                    <span>
                      <strong>${Math.round(subtotal)}</strong>
                    </span>
                  </li>
                </ul>
                <button disabled={isCreatingCheckoutSession} onClick={handleCheckout}>
                  {isCreatingCheckoutSession ? 'Creating Checkout...' : 'Comprar agora'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}