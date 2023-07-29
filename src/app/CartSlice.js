// import { createSlice } from "@reduxjs/toolkit";
// import { toast } from "react-hot-toast";
// const initialState = {
//   cartState: false,
//   cartItems: localStorage.getItem("cart")
//     ? JSON.parse(localStorage.getItem("cart"))
//     : [], // like database
// };
// const CartSlice = createSlice({
//   initialState,
//   name: "cart",
//   reducers: {
//     setOpenCart: (state, action) => {
//       state.cartState = action.payload.cartState;
//     },
//     setCloseCart: (state, action) => {
//       state.cartState = action.payload.cartState;
//     },
//     setAddItemtoCard: (state, action) => {
//       const itemIndex = state.cartItems.findIndex(
//         (item) => item.id === action.payload.id
//       );
//       if (itemIndex >= 0) {
//         state.cartItems[itemIndex].cartQuanity += 1;
//         toast.success(`Item QTY Increased`);
//       } else {
//         const temp = { ...action.payload, cartQuanity: 1 };
//         state.cartItems.push(temp);
//         toast.success(`${action.payload.title} Added to Cart`);
//       }
//       localStorage.setItem("cart", JSON.stringify(state.cartItems));
//     },
//   },
// });
// export const { setOpenCart, setCloseCart, setAddItemtoCard } =
//   CartSlice.actions;
// export const selectCartState = (state) => state.cart.cartState;
// export default CartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

// Check if localStorage contains "cart" key and if its value is valid JSON
let cartFromLocalStorage;
try {
  cartFromLocalStorage = localStorage.getItem("cart");
  if (cartFromLocalStorage !== null) {
    JSON.parse(cartFromLocalStorage); // Check if it's valid JSON
  }
} catch (error) {
  console.error("Error parsing cart data from localStorage:", error);
  cartFromLocalStorage = null; // Set it to null to avoid further issues
}

// Use a fallback value of an empty array if cartFromLocalStorage is not valid JSON
const parsedCart = Array.isArray(JSON.parse(cartFromLocalStorage))
  ? JSON.parse(cartFromLocalStorage)
  : [];

const initialState = {
  cartState: false,
  cartItems: parsedCart,
};

const CartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    setOpenCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    setCloseCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    setAddItemtoCard: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.success(`Item QTY Increased`);
      } else {
        const temp = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(temp);
        toast.success(`${action.payload.title} Added to Cart`);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    setRemoveItemFromCart: (state, action) =>{
      const removeItem = state.cartItems.filter((item) => item.id !== action.payload.id);
      state.cartItems = removeItem;
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
      toast.success(`${action.payload.title} Removed From Cart`)
    }
  },
});

export const { setOpenCart, setCloseCart, setAddItemtoCard, setRemoveItemFromCart } =
  CartSlice.actions;
export const selectCartState = (state) => state.cart.cartState;
export const selectCartItems = (state) => state.cart.cartItems;
export default CartSlice.reducer;
