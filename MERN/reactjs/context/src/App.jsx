import Button from "./Button";
import Display from "./Display";

function App() {
  return (
    <div className="main">
      <Display />
      <div>
        <Button symbol={"+"} />
        <Button symbol={"-"} />
      </div>
    </div>
  );
}

export default App;
