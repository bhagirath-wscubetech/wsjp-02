
import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Read from "./Pages/Read";
import Create from "./Pages/Create";
import Edit from "./Pages/Edit";

const routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <Read />
    },
    {
      path: "/create",
      element: <Create />
    },
    {
      path: "/edit/:index",
      element: <Edit />
    }
  ]
)

function App() {

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
