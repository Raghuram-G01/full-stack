import { Link } from 'react-router-dom';
import { FiFileText, FiUsers, FiCheckCircle } from 'react-icons/fi';

const FacultyDashboard = () => {
  const assessments = JSON.parse(localStorage.getItem('assessments') || '[]');
  const submissions = JSON.parse(localStorage.getItem('submissions') || '[]');

  return (
    <div className="animate-fadeIn">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
        Faculty Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-indigo-100 text-sm">Total Assessments</p>
              <p className="text-3xl font-bold mt-1">{assessments.length}</p>
            </div>
            <FiFileText className="text-4xl opacity-80" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">Total Submissions</p>
              <p className="text-3xl font-bold mt-1">{submissions.length}</p>
            </div>
            <FiCheckCircle className="text-4xl opacity-80" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-sm">Students Participated</p>
              <p className="text-3xl font-bold mt-1">{new Set(submissions.map(s => s.studentName)).size}</p>
            </div>
            <FiUsers className="text-4xl opacity-80" />
          </div>
        </div>
      </div>

      <div className="mb-6">
        <Link to="/faculty/create" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 inline-block">
          Create New Assessment
        </Link>
      </div>

      <Link to="/faculty/submissions" className="text-blue-600 dark:text-blue-400 hover:underline">
        View All Submissions →
      </Link>
    </div>
  );
};

export default FacultyDashboard;
