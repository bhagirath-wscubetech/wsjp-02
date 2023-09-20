import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

const Cart = createSlice(
    {
        name: "cart",
        initialState,
        reducers: {
            addToCart: (state) => {
                
            },
            removeFromCart: (state) => {
                
            }
        }
    }
)

export const { addToCart, removeFromCart } = Cart.actions;
export default Cart.reducer;