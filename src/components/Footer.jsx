import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa6';

function Footer() {
  return (
    <div className="bg-gray-900">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4">
        <div className="grid mb-8 lg:grid-cols-6">
          <div className="grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4">
            {/* section 1 */}
            <div>
              <p className="font-medium tracking-wide text-gray-300">Category</p>
              <ul>
                <li>
                  <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">
                    News
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">
                    World
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">
                    Games
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">
                    References
                  </a>
                </li>
              </ul>
            </div>
            {/* section 2 */}
            <div>
              <p className="font-medium tracking-wide text-gray-300">Category</p>
              <ul>
                <li>
                  <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">
                    News
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">
                    World
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">
                    Games
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">
                    References
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">
                    References
                  </a>
                </li>
              </ul>
            </div>
            {/* section 3 */}
            <div>
              <p className="font-medium tracking-wide text-gray-300">Category</p>
              <ul>
                <li>
                  <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">
                    News
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">
                    World
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">
                    Games
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">
                    References
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">
                    References
                  </a>
                </li>
              </ul>
            </div>
            {/* section 4 */}
            <div>
              <p className="font-medium tracking-wide text-gray-300">Category</p>
              <ul>
                <li>
                  <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">
                    News
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">
                    World
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">
                    Games
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">
                    References
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">
                    References
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* subscription */}
          <div className="md:max-w-md lg:col-span-2 lg:mt-0 mt-5">
            <p className="font-medium tracking-wide text-gray-300">Subcribe for updates</p>
            <form className="mt-4 flex flex-col md:flex-row">
              <input
                type="email"
                name="email"
                id="email"
                className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white 
                border border-gray-300 rounded shadow-sm aspect-auto md:mr-2 md:mb-0 focus:border-purple-400 focus:outline-none
                focus:shadow-out"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide 
                transition duration-200 rounded shadow-md hover:bg-orange-500 focus:outline-none border text-white"
              >
                Subcribe
              </button>
            </form>
            <p className="mt-4 text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis illo consectetur sint quasi corporis unde
              quas iure eos sapiente consequatur consequuntur laborum, soluta totam animi accusantium voluptatum
              veritatis ratione? Voluptate.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row">
          <p className="text-sm text-gray-500">&copy; Copyright 2024 | All right reserved.</p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <a href="" className="text-gray-500 transition-all duration-300 hover:text-orange-500">
              <FaFacebook className="h-6 w-6" />
            </a>
            <a href="" className="text-gray-500 transition-all duration-300 hover:text-orange-500">
              <FaGithub className="h-6 w-6" />
            </a>
            <a href="" className="text-gray-500 transition-all duration-300 hover:text-orange-500">
              <FaInstagram className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
