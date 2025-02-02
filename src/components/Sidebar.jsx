import { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

import axiosClient from '../apis/axios';

function Sidebar() {
  const [latestBlog, setLatestBlog] = useState([]);
  const getLatestBlog = async () => {
    const res = await axiosClient.get('/blog');
    setLatestBlog(res.data);
  };
  useEffect(() => {
    getLatestBlog();
  }, []);
  return (
    <div>
      <div>
        <h3 className="text-2xl font-semibold px-4 py-4">Latest Blogs</h3>
        <div>
          {latestBlog.slice(0, 5).map((blog) => (
            <div key={blog.id} className="mb-5 border-b-2 border-spacing-2 px-4">
              <h4 className="font-medium mb-2">{blog.title}</h4>
              <Link to="/" className="text-base pb-2 hover:text-orange-500 inline-flex items-center py-1">
                Read more <FaArrowRight className="mt-1 ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-semibold px-4 py-4 mt-20">Popular Blogs</h3>
        <div>
          {latestBlog.slice(6, 10).map((blog) => (
            <div key={blog.id} className="mb-5 border-b-2 border-spacing-2 px-4">
              <h4 className="font-medium mb-3">{blog.title}</h4>
              <Link to="/" className="text-base pb-2 hover:text-orange-500 inline-flex items-center py-1">
                Read more <FaArrowRight className="mt-1 ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
