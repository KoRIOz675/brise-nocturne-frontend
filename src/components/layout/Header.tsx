import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <nav className="bg-red-950 text-white py-4 px-8 flex flex-col justify-between items-center shadow-md">
      <div className="flex items-center mb-4">
        <Link to="/">
          <img src="/favicon.svg" className="h-8 w-8 mr-2" alt="Logo" />
        </Link>
      </div>
      <ul className="flex space-x-4">
        <li className="hover:text-red-300 transition duration-300">
          <Link to="/">Accueil</Link>
        </li>
        <li className="hover:text-red-300 transition duration-300">
          <Link to="/rooms">Salles</Link>
        </li>
        <li className="hover:text-red-300 transition duration-300">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
