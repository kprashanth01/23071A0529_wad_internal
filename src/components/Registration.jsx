import { useState } from 'react';

function Registration() {
  const [course, setCourse] = useState('');
  const [courses, setCourses] = useState(
    JSON.parse(localStorage.getItem('courses')) || []
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedCourses = [...courses, course];
    setCourses(updatedCourses);
    localStorage.setItem('courses', JSON.stringify(updatedCourses));
    setCourse('');
    alert('Course Registered Successfully!');
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-6xl">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Course Registration</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block font-semibold mb-2">Course Name:</label>
          <input
            type="text"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700"
        >
          Register Course
        </button>
      </form>
    </div>
  );
}

export default Registration;