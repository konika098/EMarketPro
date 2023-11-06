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
import PrivateRoute from './Component/PrivateRoute/PrivateRoute'
import Job from './Component/JobInfo/Job'


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
        element:<PrivateRoute><AddJobs/></PrivateRoute>
      },
      {
        path:"/mypost",
        element:<PrivateRoute><MyPost/></PrivateRoute>,
        loader:()=>fetch(`http://localhost:5000/PostJob`)
      },
      {
        path:'/mybid',
        element:<PrivateRoute><MyBid/></PrivateRoute>
      },
      {
        path:'/bidreq',
        element:<PrivateRoute><BidReq/></PrivateRoute>
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
     },
     {
      path:'/job/:id',
      element:<Job/>,
      loader:({params})=>fetch(`http://localhost:5000/PostJob/${params.id}`)
     }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
  <RouterProvider router={router} />
</AuthProvider>,
)
