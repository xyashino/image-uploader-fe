import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from '@layouts/MainLayout.tsx';
import { Loading } from '@components/Loading/Loading.tsx';
import { PageRouter } from '@enums/page-router.enum.ts';
import { ErrorElement } from '@components/ErrorElement/ErrorElement.tsx';

const routers = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: PageRouter.Home,
        element: <div>Main</div>,
      },
    ],
  },
]);
export const App = () => <RouterProvider router={routers} fallbackElement={<Loading />} />;
