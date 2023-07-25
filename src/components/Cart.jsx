import React from "react"
import CartCount from "./cart/CartCount"
import CartEmpty from "./cart/CartEmpty"
import CardItem from "./cart/CardItem"

const Cart = () => {
  return (
    <>
        <div className={`fixed top-0 right-0 left-0 bottom-0 blur-effect-theme w-full h-full opacity-100 z-[250]`}>
            <div className={`blur-effect-theme h-screen max-w-xl w-full absolute right-0`}>
                <CartCount />
                <CartEmpty />
                <CardItem />
            </div>
        </div>
    </>
  )
}

export default Cart