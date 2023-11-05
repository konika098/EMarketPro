import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Root/Root';
import Home from './Layout/Home/Home';
import Error from './Layout/Error/Error';
import Login from './Layout/Contact/Login';
import Register from './Layout/Contact/Register';
import AddJobs from './Layout/AddJob/AddJobs';
import MyPost from './Layout/MyPost/MyPost';
import MyBid from './Layout/MyBid/MyBid';
import BidReq from './Layout/BidReq/BidReq';
import ContactMe from './Layout/Contact/ContactMe';
import AuthProvider from './Component/ProviderFile/AuthProvider';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/addjob",
        element:<AddJobs/>
      },
      {
        path:"/mypost",
        element:<MyPost/>
      },
      {
        path:'/mybid',
        element:<MyBid/>
      },
      {
        path:'/bidreq',
        element:<BidReq/>
      },
      
      {
        path:"/login",
        element:<Login/>
      },
     {
      path:"/register",
      element:<Register/>
     },
     {
      path:"/contactme",
      element:<ContactMe/>
     }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
  <RouterProvider router={router} />
</AuthProvider>,
)
