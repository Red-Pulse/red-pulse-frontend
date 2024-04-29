import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage.tsx';
import { useEffect } from 'react';
import store from './store';
import ProfilePage from './pages/ProfilePage/ProfilePage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
  },
]);

function App() {
  useEffect(() => {
    store.bloodTypes.fetchBloodTypes();
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
