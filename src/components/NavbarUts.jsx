import { Link } from "react-router-dom";

function NavbarUts() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-black bg-opacity-60 backdrop-blur-sm text-white fixed w-full z-50">
      <div className="text-2xl font-bold">D'BENTO</div>
      <ul className="hidden md:flex space-x-6 ml-auto">
        <li>
          <Link to="/" className="cursor-pointer hover:text-yellow-400 transition">
            HOME
          </Link>
        </li>
        <li>
          <Link to="/menu" className="cursor-pointer hover:text-yellow-400 transition">
            MENU
          </Link>
        </li>
        <li>
          <Link to="/contact" className="cursor-pointer hover:text-yellow-400 transition">
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavbarUts;
