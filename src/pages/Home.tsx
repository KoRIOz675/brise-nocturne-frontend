import React from "react";

const ImageSection: React.FC = () => {
  const mainImageURL = ""; // Main Image url

  return (
    <section
      className="relative bg-cover bg-center h-[60vh] w-full text-white flex items-center justify-center"
      style={{ backgroundImage: `url(${mainImageURL})` }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 text-center md:p-50">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 ">
          Vivez une nouvelle expérience pour vos jeux de rôle
        </h1>
        <p className="text-lg md:text-xl mb-6"></p>
      </div>
    </section>
  );
};

const PresentationSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-8">
      <div className="container mx-auto text-center max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
          Venez vivre une expérience unique de jeu de rôle dans un cadre
          immersif.
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Que vous soyez un joueur chevronné ou un novice, nous avons tout ce
          qu'il vous faut pour passer un bon moment. Nos salles sont conçues
          pour stimuler votre imagination et vous plonger dans des univers
          fantastiques.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Nos salles sont adaptés pour les plus grands univers de jeux de rôle,
          allant de la <b>Fantasy</b> au <b>Cyberpunk</b>, en passant par l'
          <b>Horreur</b> et le <b>Post-Apocalyptique</b>.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Allant de 4 à 8 personnes, nos salles sont adaptés pour accueillir
          joueurs comme maitre du jeu. Pour les joueurs, dés et piste de dés
          sont a votre disposition. Pour les maitres du jeu, vous aurez accès à
          un écran, un systeme d'enceinte et un jeu de lumière LED RGB pour vous
          aider à plonger vos joueurs dans l'univers de votre choix.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Attention, pour pouvoir accedez a l'écran, vous devez posseder un
          ordinateur portable avec un port USB-C. Nous ne fournissons pas
          d'ordinateur.
        </p>
      </div>
    </section>
  );
};

const CardSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16 px-8">
      <div className="container mx-auto text-center max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
          Réservez votre aventure dès maintenant !
        </h2>
        <div className="flex flex-col items-center justify-center md:flex-row md:items-stretch md:justify-center pt-20 pb-10">
          <div className="bg-amber-700 relative flex flex-col text-center max-w-xs w-full rounded-md shadow-md mt-12 pt-[65px] pb-[30px] px-[25px] m-5">
            <div
              className="absolute -top-[45px] left-1/2 -translate-x-1/2  w-[90px] h-[90px] rounded-full bg-amber-600 text-white flex items-center 
              justify-center text-5xl font-bold shadow-sm"
            >
              1
            </div>
            <div className="flex flex-col items-center flex-grow">
              <h3 className="text-3xl font-bold leading-tight mb-5 text-white">
                Réservation
                <br /> de la salle
              </h3>
              <p className="text-lg mb-8 text-white">
                ## € la réservation - 4h
              </p>
              <p className="text-lg mb-8 text-white">
                Réservez la salle de votre choix pour un créneau de 4 heures.
              </p>
              <p className="text-lg mb-8 text-white">
                Accès à la salle de jeu.
              </p>
              <p className="text-lg mb-8 text-white">
                (Prestation MJ non-incluse)
              </p>
              <button className="bg-white text-amber-800 px-6 py-3 rounded-lg shadow-md hover:bg-amber-400 transition duration-300 mt-auto">
                Plus d'infos
              </button>
            </div>
          </div>
          <div className="bg-amber-700 relative flex flex-col text-center max-w-xs w-full rounded-md shadow-md mt-12 pt-[65px] pb-[30px] px-[25px] m-5">
            <div
              className="absolute -top-[45px] left-1/2 -translate-x-1/2  w-[90px] h-[90px] rounded-full bg-amber-600 text-white flex items-center 
              justify-center text-5xl font-bold shadow-sm"
            >
              2
            </div>
            <div className="flex flex-col items-center flex-grow">
              <h3 className="text-3xl font-bold leading-tight mb-5 text-white">
                Initiation
                <br /> JDR
              </h3>
              <p className="text-lg mb-8 text-white">## € par personne - 4h</p>
              <p className="text-lg mb-8 text-white">
                Vous aveez toujours voulu essayer le jeu de rôle ?
                <br /> Nous vous proposons une initiation au jeu de rôle dans
                l'univers de Donjons & Dragons.
              </p>
              <p className="text-lg mb-8 text-white">(Prestation MJ incluse)</p>
              <button className="bg-white text-amber-800 px-6 py-3 rounded-lg shadow-md hover:bg-amber-400 transition duration-300 mt-auto">
                Plus d'infos
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <ImageSection />
        <PresentationSection />
        <CardSection />
      </main>
    </div>
  );
};

export default HomePage;
