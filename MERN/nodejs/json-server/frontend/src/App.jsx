
import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Read from "./Pages/Read";
import Create from "./Pages/Create";

const routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <Read />
    },
    {
      path: "/create",
      element: <Create />
    }
  ]
)

function App() {
  const routes = createBrowserRouter(
    [
      {
        path: "/",
        element: <Read/>
      },
      {
        path: "/create",
        element: <Create />
      }
    ]
  )


  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
