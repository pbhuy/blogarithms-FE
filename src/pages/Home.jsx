import List from '../components/List';

import Banner from '../components/Banner';

function Home() {
  return (
    <div>
      <Banner />
      <div className="max-w-7xl mx-auto">
        <List />
      </div>
    </div>
  );
}

export default Home;
