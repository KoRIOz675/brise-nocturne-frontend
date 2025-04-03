import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex flex-row justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold hover:text-gray-300 transition duration-300"
        >
          <img
            src="/path/to/your/logo.png" // Remplacez par le chemin correct
            alt="Logo Entreprise"
            className="h-8"
          />
          Brise Nocturne
        </Link>

        {/* Liens de Navigation */}
        <div className="space-x-6">
          <Link
            to="/rooms"
            className="hover:text-gray-300 transition duration-300"
          >
            Réservation
          </Link>
          <Link
            to="/contact"
            className="hover:text-gray-300 transition duration-300"
          >
            Contact
          </Link>
          <Link
            to="/profile"
            className="hover:text-gray-300 transition duration-300"
          >
            Profil
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
