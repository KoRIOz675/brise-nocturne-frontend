import React from "react";
import { Link } from "react-router-dom";

const ImageSection: React.FC = () => {
  const mainImageURL = ""; // Main Image url

  return (
    <section
      className="relative bg-cover bg-center h-[60vh] text-white flex items-center justify-center"
      style={{ backgroundImage: `url(${mainImageURL})` }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative z-10 text-center p-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Votre Prochaine Aventure Commence Ici
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Louez nos salles thématiques pour une immersion totale dans vos jeux
          de rôle.
        </p>
        <Link
          to="/rooms"
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          Découvrir nos Salles
        </Link>
      </div>
    </section>
  );
};

// --- Composant Section Présentation ---
const PresentationSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-8">
      <div className="container mx-auto text-center max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
          Qui Sommes-Nous ?
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Bienvenue chez Brise Nocturne, votre nouvel espace dédié aux jeux de
          rôle sur table à [Votre Ville/Région] ! Passionnés par l'univers du
          JDR, nous avons créé un lieu unique où maîtres de jeu et joueurs
          peuvent se retrouver dans des salles thématiques conçues pour une
          immersion optimale.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Que vous soyez vétérans ou débutants, que vous prépariez une campagne
          épique ou une simple partie one-shot, nos espaces sont équipés pour
          répondre à vos besoins. Réservez facilement en ligne et préparez-vous
          à lancer les dés !
        </p>
      </div>
    </section>
  );
};

// --- Composant Principal de la Page d'Accueil ---
const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <ImageSection />
        <PresentationSection />
      </main>
    </div>
  );
};

export default HomePage;
