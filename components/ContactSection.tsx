"use client" // this is a client component
import { useState, useEffect, ChangeEvent, FormEvent } from 'react';

const useClient = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
};

const ContactSection = () => {
  const isClient = useClient();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add code to handle form submission here, like sending data to your backend server or email service.
    console.log(formData);
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  if (!isClient) {
    return null;
  }
  return (
    <section id="contact" className="bg-purple-100 py-10 mt-2">
      <div className="container mx-auto px-4">
        <h1 className="text-center font-bold text-4xl mb-8 text-purple-600">Contactez-moi</h1>
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Informations de contact</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Nom: Mohamed Sami</li>
              <li>Email: MohamedSami@gmail.com</li>
            </ul>
          </div>
          <div className="md:w-1/2 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Envoyez-moi un message</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-800 font-semibold">Nom:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:border-purple-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-800 font-semibold">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:border-purple-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-800 font-semibold">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg py-4 px-4 text-gray-700 focus:outline-none focus:border-purple-500"
                />
              </div>
              <button type="submit" className="bg-purple-500 text-white py-2 px-6 rounded-lg hover:bg-purple-600">Envoyer</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
