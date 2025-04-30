import { useState } from 'react';

function Registration() {
  const [formData, setFormData] = useState({ name: '', email: '', course: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registered Student:', formData);
    alert('Registration Successful!');
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-6xl">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Student Registration</h1>
      <p className="text-gray-700 text-lg mb-4">
        Registering students is the first step in managing their academic journey. Please provide accurate information to ensure a smooth process.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block font-semibold mb-2">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block font-semibold mb-2">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block font-semibold mb-2">Course:</label>
          <input
            type="text"
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Registration;