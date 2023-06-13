import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
   createBrowserRouter,
   RouterProvider,
} from "react-router-dom";


import Home from "./components/Home"
import TopRated from './components/TopRated';
import UpComing from './components/UpComing';



const router = createBrowserRouter([
   {
      path: "/",
      element: <Home />,
   },
   {
      path: "/top_rated",
      element: <TopRated />,
   },
   {
      path: "/upcoming",
      element: <UpComing />,
   },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>,
)
