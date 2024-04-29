import { createBrowserRouter } from 'react-router-dom';
import SignIn from './signIn';
import App from '@/App';
import Home from './home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/signin',
        element: <SignIn />,
      },
      {
        path: '/signup',
        element: <div>Signup</div>,
      },
      {
        path: '/dashboard',
        element: <div>Dashboard</div>,
      },
      {
        path: '/profile',
        element: <div>Profile</div>,
      },
    ],
  },
]);

export default router;
