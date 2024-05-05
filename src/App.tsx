import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage.tsx';
import { useEffect } from 'react';
import store from './store';
import ProfilePage from './pages/ProfilePage/ProfilePage.tsx';
import ClinicPage from './pages/ClinicPage/ClinicPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
  },

  {
    path: '/clinics/:id',
    element: <ClinicPage />,
  },
]);

function App() {
  useEffect(() => {
    store.bloodTypes.fetchBloodTypes();
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
