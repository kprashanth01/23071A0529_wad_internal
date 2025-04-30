function About() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-6xl">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">About Us</h1>
      <p className="text-gray-700 text-lg mb-4">
        The Student Management System is a platform designed to simplify the process of managing student information.
      </p>
      <p className="text-gray-700 text-lg mb-4">
        Our goal is to provide an intuitive and efficient way to handle student registrations, contact details, and other essential information. Built with React and styled using Tailwind CSS, this system is both modern and responsive.
      </p>
      <p className="text-gray-700 text-lg">
        In the future, we plan to introduce advanced features such as:
      </p>
      <ul className="list-disc list-inside text-gray-700 text-lg mb-4">
        <li>Automated report generation for student performance.</li>
        <li>Integration with learning management systems.</li>
        <li>Mobile app support for on-the-go access.</li>
      </ul>
      <p className="text-gray-700 text-lg">
        Thank you for choosing our platform. We are committed to improving the education experience for everyone involved.
      </p>
    </div>
  );
}

export default About;