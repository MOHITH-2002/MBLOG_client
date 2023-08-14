import React from 'react';
// import { Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Write from "./pages/Write";
import Single from "./pages/single";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Login from "./pages/login";
import "./styles.scss"


const router = createBrowserRouter([
  {
    path: "/",
    element:
      <div>
    <Navbar/>
    <Home/>
    <Footer/>
      </div>
   
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/post/:id",///single post
    element: <div>
    <Navbar/>
    <Single/>
    <Footer/>
    </div>

  },
  {
    path: "/write",
    element:<div>
    <Navbar/>
     <Write/>
     <Footer/>

    </div>
  },

  
  
]);

function App() {
  return (
    <div className='app'>
    <div className='container'>
     <RouterProvider router={router} />
    </div>
    </div>
  );
}

export default App;
