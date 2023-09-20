import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProucts } from "./Reducers/Product";
import { getCategoies } from "./Reducers/Category";
function App() {
  const { product } = useSelector(store => store.product);
  const { category } = useSelector(store => store.category);
  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(getProucts());
      dispatch(getCategoies());
    },
    []
  )

  console.log(product);
  console.log(category);

  return (
    <div>
    </div>
  );
}

export default App;
