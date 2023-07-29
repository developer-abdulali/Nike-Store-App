// import React from "react";
// import CartCount from "./cart/CartCount";
// import CartEmpty from "./cart/CartEmpty";
// import CardItem from "./cart/CardItem";
// import { useDispatch, useSelector } from "react-redux";
// import { selectCartItems, selectCartState, setCloseCart } from "../app/CartSlice.js";

// const Cart = () => {
//   const dispatch = useDispatch();
//   const ifCartState = useSelector(selectCartState);
//   const cartItems = useSelector(selectCartItems)
//   // console.log(cartItems)

//   const onCartToggle = () => {
//     dispatch(
//       setCloseCart({
//         cartState: false,
//       })
//     );
//   };
//   return (
//     <>
//       <div
//         className={`fixed top-0 right-0 left-0 bottom-0 blur-effect-theme w-full h-full opacity-100 z-[250] ${
//           ifCartState
//             ? "opacity-100 visible translate-x-0"
//             : "opacity-0 invisible translate-x-8"
//         }`}
//       >
//         <div
//           className={`blur-effect-theme h-screen max-w-xl w-full absolute right-0`}
//         >
//           <CartCount onCartToggle={onCartToggle} />
//           {/* {cartItems.length === 0 ? <CartEmpty /> : <cartItems />} */}
//           {cartItems?.length === 0 ? <CartEmpty /> : <cartItems />}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Cart;

import React from "react";
import CartCount from "./cart/CartCount";
import CartEmpty from "./cart/CartEmpty";
import CartItem from "./cart/CartItem";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartState,
  setCloseCart,
} from "../app/CartSlice.js";

const Cart = () => {
  const dispatch = useDispatch();
  const ifCartState = useSelector(selectCartState);
  const cartItems = useSelector(selectCartItems);

  const onCartToggle = () => {
    dispatch(
      setCloseCart({
        cartState: false,
      })
    );
  };

  return (
    <>
      <div
        className={`fixed top-0 right-0 left-0 bottom-0 blur-effect-theme w-full h-full opacity-100 z-[250] ${
          ifCartState
            ? "opacity-100 visible translate-x-0"
            : "opacity-0 invisible translate-x-8"
        }`}
      >
        <div
          className={`blur-effect-theme h-screen max-w-xl w-full absolute right-0`}
        >
          <CartCount onCartToggle={onCartToggle} />
          {cartItems.length === 0 ? (
            <CartEmpty />
          ) : (
            cartItems.map((item, i) => <CartItem key={i} item={item} />)
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;

// ((item) => <CardItem key={item.id} item={item} />)
