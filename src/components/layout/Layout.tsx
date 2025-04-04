import React, { ReactNode } from "react";
import Header from "./Header"; // Importe le composant frère
import Footer from "./Footer"; // Importe le composant frère

interface LayoutProps {
  children: ReactNode; // Pour accepter le contenu de la page
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-700">
      <Header />
      <main className="flex-grow container mx-auto px-4">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
