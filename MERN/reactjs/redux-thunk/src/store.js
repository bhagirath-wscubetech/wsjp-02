import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./Reducers/Product";
import CategoryReducer from "./Reducers/Category";
import CartReducer from "./Reducers/Cart";
import UserReducer from "./Reducers/User";
const store = configureStore(
    {
        reducer: {
            product: ProductReducer,
            category: CategoryReducer,
            cart: CartReducer,
            user: UserReducer
        }
    }
)

export default store;