import { useEffect, useState } from "react";
import Filter from "./Components/Filter";
import Listing from "./Components/Listing";
import axios from "axios";

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filterCat, setFilterCat] = useState(null);


  const clearFilter = () => {
    setFilterCat(null);
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
      <Filter categories={categories} filterCat={filterCat} categoryHandler={setFilterCat} clearFilter={clearFilter}/>
      <Listing products={products} filterCat={filterCat} />
    </div>
  );
}

export default App;
