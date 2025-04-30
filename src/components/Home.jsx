function Home() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-6xl">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Welcome to the Student Management System</h1>
      <p className="text-gray-700 text-lg mb-4">
        This platform is designed to streamline the management of student information and provide an intuitive interface for administrators and users.
      </p>
      <ul className="list-disc list-inside text-gray-700 text-lg mb-4">
        <li>Register new students with ease.</li>
        <li>Access contact information quickly.</li>
        <li>Learn more about the system and its features.</li>
      </ul>
      <p className="text-gray-700 text-lg">
        Use the navigation bar above to explore the features of the system. Whether you're registering a new student or learning more about us, we've got you covered!
      </p>
    </div>
  );
}

export default Home;