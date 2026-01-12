import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Each item: {id, name, price, quantity, ...fruitData}
  },
  reducers: {
    // Add an item to cart
    addToCart(state, action) {
      const item = state.items.find(i => i.id === action.payload.id);
      if (item) {
        // If item exists, increment quantity
        item.quantity += action.payload.quantity || 1;
      } else {
        // Else add new item with quantity
        state.items.push({ ...action.payload, quantity: action.payload.quantity || 1 });
      }
    },

    // Remove item completely
    removeFromCart(state, action) {
      state.items = state.items.filter(i => i.id !== action.payload);
    },

    // Update quantity of a specific item
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const item = state.items.find(i => i.id === id);
      if (item) {
        item.quantity = quantity < 1 ? 1 : quantity; // Minimum 1
      }
    },

    // Clear the entire cart
    clearCart(state) {
      state.items = [];
    },
  },
});

// ✅ Export actions
export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;

// ✅ Export reducer
export default cartSlice.reducer;
