

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Home from './component/share/home/Home';
import Hero from './Hero/Hero';
import About from './component/about/About';
import Contact from './component/contact/Contact';
import Blogs from './component/blogs/Blogs';
import What from './component/what-are/What';
import Shop from './component/shop/Shop';
import Login from './component-login/login/Login';
import Sign from './component-login/sign/Sign';

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
        path: "/shop",
        element: <Shop></Shop>,
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
