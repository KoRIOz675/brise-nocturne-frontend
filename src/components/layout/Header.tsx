import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <nav className="bg-slate-900 text-white py-4 px-8 flex flex-col justify-between items-center shadow-md md:flex-row md:justify-around">
      <div className="flex items-center mb-4">
        <Link to="/" className="flex items-center text-3xl font-bold ">
          <img src="/favicon.svg" className="h-20 w-20 mr-2" alt="Logo" />
        </Link>
      </div>
      <ul className="flex space-x-10 text-2xl">
        <li className="hover:text-red-500 transition duration-300">
          <Link to="/">Accueil</Link>
        </li>
        <li className="hover:text-red-500 transition duration-300">
          <Link to="/rooms">Salles</Link>
        </li>
        <li className="hover:text-red-500 transition duration-300">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
