import { FaUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

function Card({ blogs }) {
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
      {blogs.map((blog) => (
        <Link to={`/blog/${blog.id}`} key={blog.id} className="p-5 shadow-lg rounded cursor-pointer">
          <div>
            <img className="w-full" src={blog.image} alt={blog.id} />
          </div>
          <h3 className="mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer">{blog.title}</h3>
          <p className="mb-2 text-gray-600">
            <FaUser className="mr-2 inline-flex items-center" />
            {blog.author}
          </p>
          <p className="text-sm text-gray-500">Published: {blog.published_date}</p>
        </Link>
      ))}
    </div>
  );
}

export default Card;
