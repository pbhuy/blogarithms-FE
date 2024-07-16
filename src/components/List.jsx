import { useEffect, useState } from 'react';
import blogList from '../data/blogs.json';
import Card from './Card';

function List() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(blogList);
  }, []);
  return (
    <div>
      {/* categories */}
      <div>Categories</div>
      {/* blog cards */}
      <div>
        <Card blogs={blogs} />
      </div>
      {/* pagination */}
      <div>Pagination</div>
    </div>
  );
}

export default List;
