import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./pages/Home";
import ProductPage from "./pages/Products";
import Root from "./pages/Root";
import Error from "./pages/Error";
import ProductDetails from "./pages/ProductDetails";

// const routeDefinations = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<HomePage/>} />
//     <Route path='/product' element={<ProductPage/>}/>
//   </Route>
// )
// const router = createBrowserRouter(routeDefinations)
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error/>,
    children: [
      { path: "", element: <HomePage /> },
      { path: "product", element: <ProductPage /> },
      {path: 'product/:productId', element: <ProductDetails/>}
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
