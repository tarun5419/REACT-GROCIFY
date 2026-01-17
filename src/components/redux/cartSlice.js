import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existing = state.items.find(p => p.id === item.id);

      if (existing) {
        if(existing.qty < 4){
          existing.qty += 1;
        }
      } else {
        state.items.push({ ...item, qty: 1 });
      }
    },
    decreamentItem: (state, action) => {
      const item = action.payload;  // item = 7 state.items = [1,2,3,4,5,6,7,8,9]
      const existing = state.items.find(p => p.id === item.id);

      if (existing && existing.qty > 0) {
          existing.qty -= 1;
      } else {
        state.items = state.items.filter(prod => item.id !== prod.id);
        // state.items = state.items.filter(prod => prod !== 7); // 1 === 1 true, 1 === 2 false
                                    // [1,2,3,4,5,6,8,9]        // 1 !== 1 false, 1 !== 2 true
      }
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },

    clearCart: (state) => {
      state.items = [];
    }
  }
});

export const { addToCart, removeFromCart, clearCart,decreamentItem } = cartSlice.actions;
export default cartSlice.reducer;