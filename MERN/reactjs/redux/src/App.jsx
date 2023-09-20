import Button from "./Button";
import { useSelector, useDispatch } from "react-redux";
import { inc, dec, changeByVal } from "./Reducers/CounterReducer";

function App() {
  const { count, price } = useSelector(store => store.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <Button type="Inc by 5" handler={() => dispatch(changeByVal({ number: 5 }))
      } />
      <Button type="+" handler={() => dispatch(inc())} />
      <h1>{count} - {price}</h1>
      <Button type="-" handler={() => dispatch(dec())} />
      <Button type="Inc by 2" handler={() => dispatch(changeByVal({ number: 5 }))} />
    </div>
  );
}

export default App;
