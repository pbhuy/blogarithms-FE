import { useEffect, useState } from 'react';

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
        <h3 className="text-2xl font-semibold px-4">Latest Blogs</h3>
      </div>
    </div>
  );
}

export default Sidebar;
