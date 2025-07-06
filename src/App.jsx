

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Home from './component/share/home/Home';
import Hero from './Hero/Hero';
import About from './component/about/About';
import Contact from './component/contact/Contact';
import Blogs from './component/blogs/Blogs';
import What from './component/what-are/What';

import Login from './component-login/login/Login';
import Sign from './component-login/sign/Sign';
import Buy from './component/shop/Buy/Buy';
import Bundles from './component/shop/Bundles';

import Product from './component/shop/Product/Product';

function App() {
  const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Hero></Hero>,
      },
       {
        path: "/about",
        element: <About></About>,
      },
        {
        path: "/product",
        element: <Product></Product>,
      },
      
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/what",
        element: <What></What>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/sign",
        element: <Sign></Sign>,
      },
      {
        path: "/buy",
        element: <Buy></Buy>,
      },
      {
        path: "/bundles",
        element: <Bundles></Bundles>,
      },
     
    ],
  },
]);

  return (
    <div>
          <RouterProvider router={router} />


    </div>
  )
}

export default App
