import { createBrowserRouter } from 'react-router-dom';
import HomePage from '@pages/home';
import { ROUTER_PATHS } from '@shared/config';
import PageLayout from '@shared/ui/PageLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PageLayout />,
    children: [
      {
        path: ROUTER_PATHS.home,
        element: <HomePage />,
      },
    ],
  },
]);
