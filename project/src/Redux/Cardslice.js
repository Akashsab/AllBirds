import React from 'react'
import {createSlice} from '@reduxjs/toolkit';

const storeditems=localStorage.getItem('cartItems')

const initialState={
    cartitems:storeditems?JSON.parse(storeditems):[],
}

const Cardslice = createSlice (
    {
        name:'cart',
        initialState,
        reducers:{

            addTocart:(state,action)=>{
                const newItem=action.payload
                
                const existitem=state.cartitems.find(item=>item.id===newItem.id)
                if(existitem)
                {
                    existitem.quantity+=newItem.quantity
                }
                else{
                    state.cartitems.push(
                        newItem
                    )
                }
                localStorage.setItem('cartItems',JSON.stringify(state.cartitems))
            },
            deleteFromCart:(state,action)=>
            {
                state.cartitems=state.cartitems.filter(Items=>Items.id!==action.payload.id);
                localStorage.setItem("cartItems",JSON.stringify(state.cartitems));

            },
            updateQuantity:(state,action)=>
            {
                const {id,quantity}=action.payload
                const itemToUpdate=state.cartitems.find(item=>item.id===id)
                if(itemToUpdate)
                {
                    itemToUpdate.quantity=quantity;
                    localStorage.setItem("cartItems",JSON.stringify(state.cartitems));
                }
            }
        }
    }
)



export default Cardslice.reducer;
export const{addTocart,deleteFromCart,updateQuantity}=Cardslice.actions;