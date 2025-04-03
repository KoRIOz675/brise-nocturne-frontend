import React, { useState, useEffect } from "react";
import "./App.css"; // Assurez-vous que ce fichier CSS existe ou supprimez/modifiez l'import

// Définir le type du composant fonctionnel (bonne pratique en TS)
const App: React.FC = () => {
  // Typer explicitement l'état 'message' comme une chaîne de caractères
  const [message, setMessage] = useState<string>(
    "Chargement du message depuis le backend..."
  );

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        // L'URL de l'API (sera interceptée par le proxy Vite)
        const response = await fetch("/api/hello");

        // Vérifier si la réponse HTTP est ok (status 200-299)
        if (!response.ok) {
          // Construire un message d'erreur plus informatif
          throw new Error(`Erreur HTTP ! Statut: ${response.status}`);
        }

        // Lire le corps de la réponse comme du texte brut
        const text = await response.text();
        setMessage(text);
      } catch (error: unknown) {
        // Typer l'erreur comme 'unknown' est plus sûr que 'any'
        console.error("Erreur lors de la récupération du message:", error);

        // Vérifier si c'est une instance d'Error pour accéder à .message
        if (error instanceof Error) {
          setMessage(
            `Erreur de communication avec le backend: ${error.message}`
          );
        } else {
          // Gérer d'autres types d'erreurs si nécessaire
          setMessage("Erreur de communication inconnue avec le backend.");
        }
      }
    };

    // Appeler la fonction pour récupérer le message au montage du composant
    fetchMessage();
  }, []); // Le tableau de dépendances vide signifie que cet effet ne s'exécute qu'une fois

  return (
    <div className="App">
      <h1>Frontend React (TypeScript)</h1>
      <p>{message}</p>
      {/* Vous pouvez ajouter des classes Tailwind ici si vous l'avez configuré */}
      {/* <p className="text-xl text-blue-600">{message}</p> */}
    </div>
  );
};

export default App;
