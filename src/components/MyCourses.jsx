import { useState, useEffect } from 'react';

function MyCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const storedCourses = JSON.parse(localStorage.getItem('courses')) || [];
    setCourses(storedCourses);
  }, []);

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-6xl">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">My Courses</h1>
      {courses.length > 0 ? (
        <ul className="list-disc list-inside text-gray-700 text-lg">
          {courses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-700 text-lg">You have not registered for any courses yet.</p>
      )}
    </div>
  );
}

export default MyCourses;