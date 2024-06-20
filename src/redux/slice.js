// counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    product: [],
    total:0,
    address:{}
  },
  reducers: {
    addItem: (state,action) => {
      var total = 0
        for (let i = 0; i < action.payload.length; i++) {
            const element = action.payload[i];
            total += element.sellingPrice * element.count
        }
      state.product = action.payload;
      state.total = total
    },
    removeItem: (state,action) => {
        var total = 0
        for (let i = 0; i < action.payload.length; i++) {
            const element = action.payload[i];
            total += element.sellingPrice * element.count
        }
      state.product = action.payload;
      state.total = total
    },
    addNewAddress: (state,action) => {
        state.address= action.payload
    },
  },
});

export const { addItem, removeItem,addNewAddress } = counterSlice.actions;
export default counterSlice.reducer;