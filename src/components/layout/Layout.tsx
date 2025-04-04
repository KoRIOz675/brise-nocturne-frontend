import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col bg-gray-700">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
