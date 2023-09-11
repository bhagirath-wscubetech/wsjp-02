import { Button } from 'react-bootstrap';
import AdminIndex from './Pages/Admin/Index';
import CategoryAdd from "./Pages/Admin/Category/Add";
import CategoryView from "./Pages/Admin/Category/View";
import CategoryEdit from "./Pages/Admin/Category/Edit";
import ProductAdd from "./Pages/Admin/Product/Add";
import ProductView from "./Pages/Admin/Product/View";
import ColorAdd from "./Pages/Admin/Color/Add";
import ColorView from "./Pages/Admin/Color/View";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dasboard from './Pages/Admin/Dashboard';
import Home from './Pages/Home';
import WebsiteMain from './Pages/WebsiteMain';
import Store from './Pages/Store';
import RegisterAdmin from './Pages/Admin/RegisterAdmin';
function App() {

  const routes = createBrowserRouter(
    [
      {
        path: '/',
        element: <WebsiteMain />,
        children: [
          {
            path: "",
            element: <Home />
          },
          {
            path: "/store",
            element: <Store />
          }
        ]
      },
      {
        path: "/admin/login",
        element: <h1>Admin Login</h1>
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
            path: "category/edit/:id",
            element: <CategoryEdit />
          },
          {
            path: "color",
            element: <ColorView />
          },
          {
            path: "color/add",
            element: <ColorAdd />
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
            path: "register-admin",
            element: <RegisterAdmin />
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
