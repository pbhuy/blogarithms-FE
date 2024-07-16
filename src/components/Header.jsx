import { useState } from 'react';
import { FaBars, FaFacebook, FaGithub, FaInstagram, FaXmark } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const nav = [
    { path: '/', link: 'Home' },
    { path: '/blogs', link: 'Blogs' },
    { path: '/about', link: 'About' },
    { path: '/contact', link: 'Contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black text-white fixed top-0 left-0 right-0">
      <nav className="py-4 px-4 max-w-7xl mx-auto flex items-center justify-between">
        {/* logo name */}
        <a href="/" className="text-xl font-bold text-white">
          Blog<span className="text-orange-500">arithms</span>
        </a>

        {/* navigation items */}
        <ul className="md:flex gap-12 text-lg hidden">
          {nav.map((item, index) => {
            return (
              <li className="text-white" key={index}>
                <NavLink
                  className={({ isActive, isPending }) => (isActive ? 'active' : isPending ? 'pending' : '')}
                  to={item.path}
                >
                  {item.link}
                </NavLink>
              </li>
            );
          })}
        </ul>

        {/* social media icon link & button */}
        <div className="lg:flex hidden items-center gap-4 text-white">
          <a className="hover:text-orange-500" href="">
            <FaFacebook />
          </a>
          <a className="hover:text-orange-500" href="">
            <FaGithub />
          </a>
          <a className="hover:text-orange-500" href="">
            <FaInstagram />
          </a>
          <button className="text-white bg-orange-400 rounded-md px-6 py-2 font-medium hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in">
            Login
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="cursor-pointer">
            {isMenuOpen ? <FaXmark className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
          </button>
        </div>
      </nav>
      {/* menu items for mobile view */}
      <div>
        <ul
          className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${isMenuOpen ? 'fixed top-0 left-0 w-full transition-all ease-out duration-150' : 'hidden'}`}
        >
          {nav.map((item, index) => {
            return (
              <li className="text-black" key={index}>
                <NavLink onClick={toggleMenu} to={item.path}>
                  {item.link}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}

export default Header;
