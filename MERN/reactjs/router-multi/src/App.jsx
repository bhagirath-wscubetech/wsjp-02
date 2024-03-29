import { Button } from 'react-bootstrap';
import AdminIndex from './Pages/Admin/Index';
import CategoryAdd from "./Pages/Admin/Category/Add";
import CategoryView from "./Pages/Admin/Category/View";
import ProductAdd from "./Pages/Admin/Product/Add";
import ProductView from "./Pages/Admin/Product/View";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dasboard from './Pages/Admin/Dashboard';
function App() {

  const routes = createBrowserRouter(
    [
      {
        path: '/',
        element: <h1>Website page</h1>
      },
      {
        path: "/admin",
        element: <AdminIndex />,
        children: [
          {
            path: "",
            element: <Dasboard />
          },
          {
            path: "category",
            element: <CategoryView />
          },
          {
            path: "category/add",
            element: <CategoryAdd />
          },
          {
            path: "product",
            element: <ProductView />
          },
          {
            path: "product/add",
            element: <ProductAdd />
          },
          {
            path: '*',
            element: (
              <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%"
              }}>
                <img src="https://i.pinimg.com/originals/0e/c0/db/0ec0dbf1e9a008acb9955d3246970e15.gif" alt="" />
              </div>
            )
          },
        ]
      },
      {
        path: '/*',
        element: <h1>404</h1>
      },
    ]
  )

  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
