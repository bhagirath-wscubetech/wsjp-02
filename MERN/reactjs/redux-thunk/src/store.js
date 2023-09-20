import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./Reducers/Product";
import CategoryReducer from "./Reducers/Category";
const store = configureStore(
    {
        reducer: {
            product: ProductReducer,
            category: CategoryReducer
        }
    }
)

export default store;