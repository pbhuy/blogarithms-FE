import { createBrowserRouter } from 'react-router-dom';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Layout from './components/Layout.jsx';
import Blogs from './pages/Blogs.jsx';
import Contact from './pages/Contact.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/blogs',
        element: <Blogs />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);
