import { Link } from 'react-router-dom';
import { FiFileText, FiClock } from 'react-icons/fi';

const StudentDashboard = () => {
  const assessments = JSON.parse(localStorage.getItem('assessments') || '[]');

  return (
    <div className="animate-fadeIn">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
        Student Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Available Assessments</p>
              <p className="text-3xl font-bold mt-1">{assessments.length}</p>
            </div>
            <FiFileText className="text-4xl opacity-80" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">Completed</p>
              <p className="text-3xl font-bold mt-1">0</p>
            </div>
            <FiClock className="text-4xl opacity-80" />
          </div>
        </div>
      </div>

      <Link to="/student/assessments" className="text-blue-600 hover:underline text-lg">
        View All Assessments →
      </Link>
    </div>
  );
};

export default StudentDashboard;
