import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage.tsx';
import { useEffect } from 'react';
import store from './store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
]);

function App() {
  useEffect(() => {
    store.bloodTypes.fetchBloodTypes();
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
