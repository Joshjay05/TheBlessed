// src/components/RSVPForm.jsx

import { useState } from "react";

const RSVPForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attending: "",
    mealPreference: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("RSVP Submitted", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded-md">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full mt-1 p-2 border rounded"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full mt-1 p-2 border rounded"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="attending" className="block text-gray-700">
          Will you be attending?
        </label>
        <select
          id="attending"
          name="attending"
          className="w-full mt-1 p-2 border rounded"
          value={formData.attending}
          onChange={handleChange}
          required
        >
          <option value="">Select...</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="mealPreference" className="block text-gray-700">
          Meal Preference
        </label>
        <select
          id="mealPreference"
          name="mealPreference"
          className="w-full mt-1 p-2 border rounded"
          value={formData.mealPreference}
          onChange={handleChange}
          required
        >
          <option value="">Select...</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="non-vegetarian">Non-Vegetarian</option>
        </select>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Submit RSVP
      </button>
    </form>
  );
};

export default RSVPForm;
