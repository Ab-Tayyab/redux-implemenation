import { ADD_TO_CART, REMOVE_FROM_CART } from "./action.js";

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // Check if the product already exists in the cart
      const existingProduct = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (existingProduct) {
        // If it exists, increase the quantity
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        // If it doesn't exist, add the product to the cart
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      }

    case REMOVE_FROM_CART:
      // Find the product in the cart
      const productToRemove = state.cartItems.find(
        (item) => item.id === action.payload
      );

      if (productToRemove && productToRemove.quantity > 1) {
        // If quantity is more than 1, decrease the quantity
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        };
      } else {
        // If quantity is 1 or less, remove the item from the cart
        return {
          ...state,
          cartItems: state.cartItems.filter(
            (item) => item.id !== action.payload
          ),
        };
      }

    default:
      return state;
  }
};

export default cartReducer;
