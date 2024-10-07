import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Yahan pe form submission ka logic add karna hai
    console.log('Form submitted:', formData);
    // Form ko reset karo
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <div className="bg-black min-h-screen text-white py-[5rem]">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-8 text-center">Contact Us</h1>
        
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 text-gray-900 rounded"
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 text-gray-900 rounded"
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="phone" className="block text-lg mb-2">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 text-gray-900 rounded"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-3 py-2 text-gray-900 rounded"
              required
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="bg-white text-gray-900 py-2 px-6 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;