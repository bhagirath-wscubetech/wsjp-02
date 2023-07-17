import { useEffect, useState } from "react";
import Filter from "./Components/Filter";
import Listing from "./Components/Listing";
import axios from "axios";

function App() {
  const [categories, setCategories] = useState([]);
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

  return (
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
  );
}

export default App;
