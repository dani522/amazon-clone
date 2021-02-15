import React from 'react'
import "./Checkout.css"
import Subtotal from "./Subtotal"
const Checkout = () => {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt="" className="checkout__ad"
                />
                <h3>Hello</h3>
                <h2 className="checkout__title">Your shoping Basket</h2>
            </div> 
            <div className="checkout__right">
               < Subtotal />

            </div >
        </div>
    )
}

export default Checkout
