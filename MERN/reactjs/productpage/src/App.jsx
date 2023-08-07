import { createContext, useEffect, useState } from "react";
import Filter from "./Components/Filter";
import Listing from "./Components/Listing";
import axios from "axios";
import Header from "./Components/Header";
import Cart from "./Components/Cart";
const ProductContext = createContext();

function App() {
  const [toggle, setToggle] = useState(true);
  const [categories, setCategories] = useState([]);
  const [cart, setCart] = useState([1, 4, 7, 9]);
  const [products, setProducts] = useState([]);
  const [filterCat, setFilterCat] = useState(null);
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(0);
  const [priceFilter, setPriceFilter] = useState(false);

  const clearFilter = () => {
    setFilterCat(null);
    setPriceFilter(false);
    setFrom(0);
    setTo(0);
  }

  const removeFromCart = (id) => {
    const updatedCart = cart.filter(
      (d) => {
        if (d == id) return false;
        else return true;
      }
    )
    setCart(updatedCart);
  }


  const getProducts = () => {
    axios.get('https://fakestoreapi.com/products')
      .then(
        (success) => {
          setProducts(success.data);
        }
      ).catch(
        (error) => {
          console.log(error);
        }
      )
  }

  const getCategories = () => {
    axios.get('https://fakestoreapi.com/products/categories')
      .then(
        (success) => {
          setCategories(success.data);
        }
      ).catch(
        (error) => {
          console.log(error);
        }
      )
  }

  useEffect(
    () => {
      getCategories()
      getProducts()
    },
    []
  )

  function addToCart(prodId) {
    if (cart.indexOf(prodId) == -1) {
      setCart(
        [
          ...cart,
          prodId
        ]
      )
    }
  }

  return (
    <ProductContext.Provider value={
      {
        cart,
        addToCart,
        products,
        removeFromCart
      }
    }>
      <Header toggle={toggle} handler={setToggle} />
      {
        toggle == false
          ?
          <>
            <div className="max-w-[1200px] mx-auto p-2 grid grid-cols-4 gap-5">
              <Filter priceFilterHandler={setPriceFilter} categories={categories} from={{
                value: from,
                handler: setFrom
              }} to={{
                value: to,
                handler: setTo
              }} filterCat={filterCat} categoryHandler={setFilterCat} clearFilter={clearFilter} />
              <Listing price={
                {
                  status: priceFilter,
                  to: to,
                  from: from
                }
              } products={products} filterCat={filterCat} />
            </div>
          </>
          :
          <Cart />
      }
    </ProductContext.Provider>
  );
}

export default App;
export { ProductContext }