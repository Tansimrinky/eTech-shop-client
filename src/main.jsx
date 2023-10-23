import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layout/Root';
import ErrorPage from './Pages/ErrorPage';
import Home from './Pages/Home/Home';
import AuthProvider from '../Provider/AuthProvider';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import AddProduct from './Pages/AddProduct/AddProduct';
import BrandsProducts from './Pages/BrandsProducts/BrandsProducts';
import Brands from './Components/Brands/Brands';
import Details from './Pages/Details/Details';
import DetailsCard from './Components/DetailsCard/DetailsCard';
import MyCart from './Pages/MyCart/MyCart';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/Brands.json')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      
      {
        path: '/addproduct',
        element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      }
      ,{
        path: '/brands',
        element: <Brands></Brands>,
        loader: () => fetch('/Brands.json')
      },
      {
        path: '/brands/:brands_name',
        element: <BrandsProducts></BrandsProducts>,
        loader: () => fetch('http://localhost:5000/products')
      },
      {
        path: '/details/:_id',
        element: <Details></Details>,
        loader: () => fetch('http://localhost:5000/products')

      },
      {
        path: '/details/:_id',
        element: <DetailsCard></DetailsCard>,
        loader: () => fetch('http://localhost:5000/products')

      },
      {
        path: '/mycart',
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/mycart')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
