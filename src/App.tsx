import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from '@layouts/MainLayout/MainLayout.tsx';
import { Loading } from '@components/Loading/Loading.tsx';
import { PageRouter } from '@enums/page-router.enum.ts';
import { ErrorElement } from '@components/ErrorElement/ErrorElement.tsx';
import { NotFoundPage } from '@pages/NotFound/NotFoundPage.tsx';
import { HomePage } from '@pages/Home/HomePage.tsx';
import { PicturePage } from '@pages/Picture/PicturePage.tsx';
import { getData } from '@utils/getData.ts';

const routers = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: PageRouter.Home,
        element: <HomePage />,
        errorElement: <ErrorElement />,
      },
      {
        path: PageRouter.Image,
        element: <PicturePage />,
        errorElement: <ErrorElement />,
        loader: ({ params }) => {
          return getData(`image/${params.id}`, {
            method: 'GET',
          });
        },
      },
    ],
  },

  {
    path: PageRouter.Everything,
    element: <NotFoundPage />,
    errorElement: <ErrorElement />,
  },
]);
export const App = () => <RouterProvider router={routers} fallbackElement={<Loading />} />;
