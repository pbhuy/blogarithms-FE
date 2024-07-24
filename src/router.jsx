import { createBrowserRouter } from 'react-router-dom';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Layout from './components/Layout.jsx';
import Blogs from './pages/Blogs.jsx';
import Contact from './pages/Contact.jsx';
import Details from './components/Details.jsx';
import axiosClient from './apis/axios.js';
import NotFound from './pages/NotFound.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/blog',
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
      {
        path: '/blog/:id',
        element: <Details />,
        loader: async ({ params }) => await axiosClient.get(`/blog/${params.id}`),
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
