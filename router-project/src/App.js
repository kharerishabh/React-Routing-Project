import {createBrowserRouter, RouterProvider, Route, createRoutesFromElements} from 'react-router-dom';
import HomePage from './pages/Home';
import ProductPage from './pages/Products';

const routeDefinations = createRoutesFromElements(
  <Route>
    <Route path='/' element={<HomePage/>} />
    <Route path='/product' element={<ProductPage/>}/>
  </Route>
)
const router = createBrowserRouter(routeDefinations)
// const router = createBrowserRouter([
//   {path: '/', element: <HomePage/>},
//   {path: '/product', element: <ProductPage/>}
// ])
function App() {
  return (<RouterProvider router={router}/>);
}

export default App;
