import React from "react";
// import { Link } from "react-router-dom";

import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-8 px-8">
      <div className="container mx-auto flex flex-col justify-between items-center  md:flex-row ">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p>
            © {new Date().getFullYear()} Brise Nocturne. Tous droits réservés.
          </p>
          <hr className="text-2xl font-bold mb-2 mt-2" />
          <div className="flex flex-col items-center justify-center m-2 space-x-4 md:flex-row">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42009.73534713781!2d2.3298048!3d48.8466067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671d39ebb8601%3A0xd99b7bf65c716272!2sLe%20Bon%20March%C3%A9%20Rive%20Gauche!5e0!3m2!1sfr!2sfr!4v1743946683745!5m2!1sfr!2sfr"
              width="300"
              height="100"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="text-xl mr-2">
              <div>Auberge de la Brise Nocturne</div>
              <div>123 Rue de ###</div>
              <div>##### Ville, France</div>
            </div>
          </div>
        </div>

        <div className="flex space-x-6">
          <a
            href="https://facebook.com" // Edit with final URL
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition duration-300"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://twitter.com" // Edit with final URL
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition duration-300"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://instagram.com" // Edit with final URL
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition duration-300"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
