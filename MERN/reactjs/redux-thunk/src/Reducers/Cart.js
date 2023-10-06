const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const lsToState = createAsyncThunk(
    "cart/lsToState",
    () => {
        const lsCart = localStorage.getItem("cart");
        if (lsCart != undefined || lsCart != null) {
            return JSON.parse(lsCart);
        } else {
            return []
        }
    }
)

const initialState = {
    cart: []
}

const cartSlice = createSlice(
    {
        name: "cart",
        initialState,
        reducers: {
            incCart: (state, action) => {
                const pId = action.payload.pId;
                const currentCart = state.cart;
                const newCart = currentCart.map(
                    (cart) => {
                        if (cart.pId == pId) {
                            return {
                                pId,
                                qty: cart.qty + 1
                            }
                        } else {
                            return cart;
                        }
                    }
                )
                state.cart = newCart;
            },
            decCart: (state, action) => {
                const pId = action.payload.pId;
                const currentCart = state.cart;
                let newCart = currentCart.map(
                    (cart) => {
                        if (cart.pId == pId) {
                            return {
                                pId,
                                qty: cart.qty - 1
                            }
                        } else {
                            return cart;
                        }
                    }
                )
                newCart = newCart.filter(
                    (cart) => {
                        if (cart.qty == 0) return false;
                        else return true;
                    }
                )
                state.cart = newCart;
            },
            updateCart: (state, action) => {
                state.cart = action.payload.cart;
            },
            addToCart: (state, action) => {
                let flag = false; // the product does not exists in the cart already
                const pId = action.payload.pId;
                const currentCart = state.cart;
                const newCart = currentCart.map(
                    (item) => {
                        if (item.pId == pId) {
                            flag = true; // the product already exists
                            return {
                                pId,
                                qty: item.qty + 1
                            }
                        } else {
                            return item;
                        }
                    }
                )

                if (flag == false) {
                    const data = {
                        pId,
                        qty: 1
                    }
                    state.cart.push(data);
                } else {
                    state.cart = newCart;
                }

            },
            removeFromCart: (state, action) => {
                const pId = action.payload.pId;
                const currentCart = state.cart;
                let newCart = currentCart.filter(
                    (cart) => {
                        if (cart.pId == pId) return false;
                        else return true;
                    }
                )
                state.cart = newCart;
            },
            emptyCart: (state) => {
                state.cart = [];
                localStorage.removeItem("cart");
            }
        },
        extraReducers: (builder) => {
            builder.addCase(
                lsToState.fulfilled,
                (state, action) => {
                    state.cart = action.payload;
                }
            )
        }
    }
)
export const { addToCart, emptyCart, removeFromCart, incCart, decCart, updateCart } = cartSlice.actions;
export { lsToState };
export default cartSlice.reducer;