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
    <div className="container">
      <h1>Student Registration</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Course:
          <input type="text" name="course" value={formData.course} onChange={handleChange} required />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Registration;