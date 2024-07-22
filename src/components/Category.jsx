function Category({ onSelectedCategory, activeCategory }) {
  const categories = ['Startups', 'Security', 'AI', 'Apps', 'Tech'];
  return (
    <div className="px-4 mb-8 lg:space-x-16 flex flex-wrap items-center border-b-2 py-5 text-gray-900 font-semibold">
      <button onClick={() => onSelectedCategory(null)} className={`lg:ml-12 ${activeCategory ? '' : 'activeCategory'}`}>
        All
      </button>
      {categories.map((category, index) => {
        return (
          <button
            onClick={() => onSelectedCategory(category)}
            className={`mr-2 space-x-16 ${activeCategory === category ? 'activeCategory' : ''}`}
            key={index}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default Category;
