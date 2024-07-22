import { useEffect, useState } from 'react';
import Card from './Card';
import Pagination from './Pagination';
import Category from './Category';

function List() {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const pageSize = 12;
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchBlogs() {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 3000));
      let url = `http://localhost:8080/api/blog?page=${currentPage}&size=${pageSize}`;
      if (selectedCategory) url += `&term=${selectedCategory}`;
      try {
        const res = await fetch(url);
        const data = await res.json();
        setTotalPages(data.pagination.totalPages);
        setBlogs(data.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchBlogs();
  }, [currentPage, pageSize, selectedCategory]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setActiveCategory(category);
    setCurrentPage(1);
  };

  return (
    <div>
      {/* categories */}
      <div>
        <Category
          onSelectedCategory={handleCategoryChange}
          selectedCategory={selectedCategory}
          activeCategory={activeCategory}
        />
      </div>
      {/* blog cards */}
      <div>
        {loading ? (
          <div className="flex items-center justify-center mx-60 my-60">
            <div className="loader"></div>
          </div>
        ) : (
          <Card blogs={blogs} />
        )}
      </div>

      {/* pagination */}
      <div>
        <Pagination
          onPageChange={handlePageChange}
          currentPage={currentPage}
          pageSize={pageSize}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
}

export default List;
