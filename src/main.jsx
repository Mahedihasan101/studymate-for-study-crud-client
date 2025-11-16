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
import CreatePartnerProfile from './Components/CreatePartnerProdile.jsx';
import MyConnections from './Components/MyConnections.jsx';
import UpdateProfile from './Components/UpdateProfile.jsx';
import NotFound404 from './Components/NotRound404.jsx';

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
        path: '/profile',
        element: <UserProfile />
      },
      {
        path: '/find-partners',
        element: <FindPartner />
      },
      {
        path: '/create-partner-profile',
        element: <CreatePartnerProfile />,
      },

      {
        path: '/partners-details/:id',
        element: <PartnerProfile />
      },
      {
        path: '/my-connections',
        element: <MyConnections />
      },
      {
        path: '/update-profile/:id',
        element: <UpdateProfile />,
        loader: async ({ params }) => {
          const res = await fetch(`http://localhost:5000/partners/${params.id}`);
          const data = await res.json(); 
          return { result: data }; 
        }
      },
      {
        path:'*',
        element:<NotFound404/>
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
