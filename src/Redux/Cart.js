import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        product:[],
       
      
    },
    reducers:{
addProduct:(state,action) => {
   
           state.product.push(action.payload);
       
   
},
removeItem:(state,action) =>{
    const filteredItems = state.product.filter((cartItem) => cartItem.id!==action.payload)
     state.product = filteredItems
},
removeProducts:(state,action) => {
    state.product = []
},
    updateQuantity:(state,action) => {
        const itemIndex = state.product.find(cartItem => cartItem.id ===action.payload.id);
        if(state.product[itemIndex])
        {
          state.product[itemIndex].quantity = action.payload.quantity
        }
    },
    
}
});

export const {addProduct,removeItem,updateQuantity,removeProducts} = cartSlice.actions;
export  default cartSlice.reducer;