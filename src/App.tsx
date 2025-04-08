import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages, Components and Styles
import Layout from "./components/layout/Layout"; // Correction de la casse
import HomePage from "./pages/Home";
import BookPage from "./pages/Book";
import ContactPage from "./pages/Contact";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Décommentez les routes ci-dessous si les pages correspondantes sont prêtes */}
          <Route path="/Book" element={<BookPage />} />
          <Route path="/Contact" element={<ContactPage />} />
          {/* <Route path="/profile" element={<ProfilePage />} /> */}
          {/* Ajoutez vos autres routes ici */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
