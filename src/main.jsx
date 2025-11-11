import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from './Layout/MainLayout.jsx';
import Home from './Pages/Home/Home.jsx';
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';
import AuthProvider from './Contexts/AuthContext/AuthProvider.jsx';
import UserProfile from './Components/UserProfile.jsx';
import FindPartner from './Components/FindPartners.jsx';
import PartnerProfile from './Components/PartnerProfile.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path:'/profile',
        element:<UserProfile/>
      },
      {
        path:'/find-partners',
        element:<FindPartner/>
      },
      {
        path:'/partners-details/:id',
        element:<PartnerProfile/>
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />,
    </AuthProvider>
  </StrictMode>,
)
