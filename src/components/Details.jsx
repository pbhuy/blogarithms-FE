import { FaUser } from 'react-icons/fa';
import { FaClock } from 'react-icons/fa6';
import { useLoaderData } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

function Details() {
  const res = useLoaderData();
  const blog = res.data;
  console.log('res', res.data);
  return (
    <div>
      <div className="py-40 bg-black text-center text-white px-4">
        <h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">Single Page Blog</h2>
      </div>

      {/* blog details */}
      <div className="max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12">
        <div className="lg:w-3/4 mx-auto">
          <div>
            <img className="w-full mx-auto rounded" src={blog.image} alt={blog.id} />
          </div>
          <h2 className="text-3xl font-bold mt-8 mb-4 text-blue-500 cursor-pointer">{blog.title}</h2>
          <p className="mb-3 text-gray-600">
            <FaUser className="inline-flex items-center mr-2" /> {blog.author} | {blog.published_date}
          </p>
          <p className="mb-3 text-gray-600">
            <FaClock className="inline-flex items-center mr-2" /> {blog.reading_time}
          </p>
          <p className="text-base text-gray-500 mb-6">{blog.content}</p>
          <div className="text-base text-gray-500">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At velit, esse eveniet alias sapiente nobis hic!
              Voluptas, rem dignissimos fuga autem aut veritatis accusantium porro adipisci, quasi atque, deleniti
              molestiae.
            </p>{' '}
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At velit, esse eveniet alias sapiente nobis hic!
              Voluptas, rem dignissimos fuga autem aut veritatis accusantium porro adipisci, quasi atque, deleniti
              molestiae.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At velit, esse eveniet alias sapiente nobis hic!
              Voluptas, rem dignissimos fuga autem aut veritatis accusantium porro adipisci, quasi atque, deleniti
              molestiae.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default Details;
