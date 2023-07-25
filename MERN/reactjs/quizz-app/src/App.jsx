import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Listing from "./Pages/Listing";
import Add from "./Pages/Add";
import Header from "./Components/Header";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
  },
  {
    path: "/listing",
    element: <Listing />,
  },
  {
    path: "/create",
    element: <Add />,
  },
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
