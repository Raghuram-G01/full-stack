import { users } from '../data/users';
import { courses } from '../data/courses';
import { FiUsers, FiBook, FiUserCheck, FiUserX } from 'react-icons/fi';

const AdminDashboard = () => {
  const totalUsers = users.length;
  const totalCourses = courses.length;
  const students = users.filter(u => u.role === 'student').length;
  const teachers = users.filter(u => u.role === 'teacher').length;

  return (
    <div className="animate-fadeIn">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Admin Dashboard
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Manage users and monitor platform activity
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Total Users</p>
              <p className="text-3xl font-bold mt-1">{totalUsers}</p>
            </div>
            <FiUsers className="text-4xl opacity-80" />
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">Total Courses</p>
              <p className="text-3xl font-bold mt-1">{totalCourses}</p>
            </div>
            <FiBook className="text-4xl opacity-80" />
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm">Students</p>
              <p className="text-3xl font-bold mt-1">{students}</p>
            </div>
            <FiUserCheck className="text-4xl opacity-80" />
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-sm">Teachers</p>
              <p className="text-3xl font-bold mt-1">{teachers}</p>
            </div>
            <FiUserX className="text-4xl opacity-80" />
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
          Platform Overview
        </h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div>
              <p className="font-medium text-gray-900 dark:text-white">User Registrations</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Last 30 days</p>
            </div>
            <span className="text-2xl font-bold text-primary">{totalUsers}</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div>
              <p className="font-medium text-gray-900 dark:text-white">Active Courses</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Currently available</p>
            </div>
            <span className="text-2xl font-bold text-green-600">{totalCourses}</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div>
              <p className="font-medium text-gray-900 dark:text-white">Total Enrollments</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">All time</p>
            </div>
            <span className="text-2xl font-bold text-purple-600">
              {courses.reduce((sum, c) => sum + c.students, 0)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
