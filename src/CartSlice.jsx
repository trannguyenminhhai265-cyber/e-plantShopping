import { createSlice } from '@reduxjs/toolkit';

// Redux slice that manages the shopping cart.
// Each cart item: { name, image, description, cost, quantity }
export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    // Add a plant to the cart, or increase its quantity if it is already there.
    addItem: (state, action) => {
      const { name, image, description, cost } = action.payload;
      const existingItem = state.items.find((item) => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ name, image, description, cost, quantity: 1 });
      }
    },
    // Remove a plant from the cart by name.
    removeItem: (state, action) => {
      const name = typeof action.payload === 'string' ? action.payload : action.payload.name;
      state.items = state.items.filter((item) => item.name !== name);
    },
    // Set the quantity of a plant in the cart; a quantity of 0 or less removes it.
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find((item) => item.name === name);
      if (itemToUpdate) {
        if (quantity <= 0) {
          state.items = state.items.filter((item) => item.name !== name);
        } else {
          itemToUpdate.quantity = quantity;
        }
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Selectors
export const selectCartItems = (state) => state.cart.items;
export const selectTotalQuantity = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);

export default CartSlice.reducer;
