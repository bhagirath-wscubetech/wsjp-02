import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProucts } from "./Reducers/Product";
import { getCategoies } from "./Reducers/Category";
import Product from "./Product";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Cart from "./Cart";
import Checkout from "./Checkout";
import { lsToState } from "./Reducers/Cart";
import { lsToUserState } from "./Reducers/User";
import axios from "axios";
function App() {
  const dispatch = useDispatch();
  const { cart } = useSelector(store => store.cart);
  const { user } = useSelector(store => store.user);

  useEffect(
    () => {
      dispatch(getProucts());
      dispatch(getCategoies());
      dispatch(lsToState());
      dispatch(lsToUserState());
    },
    []
  )

  useEffect(
    () => {
      if (user != null) {
        axios.post(
          `http://localhost:5000/user/add-to-cart/${user._id}`,
          cart
        ).then(
          (success) => {
            console.log(success);
          }
        ).catch(
          (err) => console.log(err)
        )
      }
    },
    [cart]
  )

  const routes = createBrowserRouter(
    [
      {
        path: "/",
        element: <Main />,
        children: [
          {
            path: "/:slug?",
            element: <Product name="testing" />
          },
          {
            path: "cart",
            element: <Cart />
          },
          {
            path: "checkout",
            element: <Checkout />
          }
        ]
      }
    ]
  )

  return (
    <RouterProvider router={routes} />
  );
}

export default App;
