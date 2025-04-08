import React from "react";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactInfo: React.FC = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-center mt-8 mb-4">Contact</h1>
        <p className="text-lg text-center mb-8">
          Vous avez des questions ? N'hésitez pas à nous contacter !
        </p>
      </div>
    </section>
  );
};

const ContactForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [submitting, setSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setError(null);
    setSuccess(false);

    const formData: FormData = { name, email, subject, message };

    if (!name || !email || !subject || !message) {
      setError("Veuillez remplir tous les champs.");
      setSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        let errorMessage = `Erreur HTTP: ${response.status}`;
        try {
          const errorData = await response.json();
          errorMessage = errorData.message || errorMessage;
        } catch (e) {
          console.error("Erreur lors de la lecture de la réponse JSON:", e);
        }
        throw new Error(errorMessage);
      }

      setSuccess(true);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err: unknown) {
      console.error("Erreur lors de l'envoi du formulaire:", err);
      if (err instanceof Error) {
        setError(err.message || "Une erreur est survenue lors de l'envoi.");
      } else {
        setError("Une erreur inconnue est survenue lors de l'envoi.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="bg-gray-100 py-12 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-xl shadow-gray-300 px-8 pt-6 pb-8 mb-4 rounded-2xl"
        >
          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              {error}
            </div>
          )}
          {success && (
            <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
              Message envoyé avec succès ! Nous vous répondrons bientôt.
            </div>
          )}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Nom <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              placeholder="Votre nom"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={submitting}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="Votre email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={submitting}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="subject"
            >
              Sujet <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Sujet de votre message"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              disabled={submitting}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              placeholder="Votre message"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline min-h-60"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={submitting}
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className={`font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                submitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-700 text-white"
              }`}
              disabled={submitting}
            >
              {submitting ? "Envoi en cours..." : "Envoyer"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

const ContactPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <ContactInfo />
        <ContactForm />
      </main>
    </div>
  );
};
export default ContactPage;
