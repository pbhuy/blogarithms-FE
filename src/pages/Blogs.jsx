import List from '../components/List';

function Blogs() {
  return (
    <div>
      <div className="px-4 py-40 bg-black text-center text-white">
        <h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">Blog Page</h2>
      </div>
      {/* all blogs container */}
      <div className="max-w-7xl mx-auto">
        <List />
      </div>
    </div>
  );
}

export default Blogs;
