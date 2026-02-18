import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { courses } from '../data/courses';
import CourseCard from '../components/CourseCard';
import Toast from '../components/Toast';
import { FiBook, FiAward, FiTrendingUp } from 'react-icons/fi';

const StudentDashboard = () => {
  const { user } = useAuth();
  const [enrolledCourses, setEnrolledCourses] = useState(user?.enrolledCourses || []);
  const [toast, setToast] = useState(null);

  const availableCourses = courses.filter(c => !enrolledCourses.includes(c.id));
  const myCourses = courses.filter(c => enrolledCourses.includes(c.id));

  const handleEnroll = (courseId) => {
    if (!enrolledCourses.includes(courseId)) {
      setEnrolledCourses([...enrolledCourses, courseId]);
      setToast({ message: 'Successfully enrolled in course!', type: 'success' });
    }
  };

  return (
    <div className="animate-fadeIn">
      {toast && <Toast {...toast} onClose={() => setToast(null)} />}
      
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Welcome back, {user?.name}!
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Continue your learning journey
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Enrolled Courses</p>
              <p className="text-3xl font-bold mt-1">{enrolledCourses.length}</p>
            </div>
            <FiBook className="text-4xl opacity-80" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">Completed</p>
              <p className="text-3xl font-bold mt-1">0</p>
            </div>
            <FiAward className="text-4xl opacity-80" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm">In Progress</p>
              <p className="text-3xl font-bold mt-1">{enrolledCourses.length}</p>
            </div>
            <FiTrendingUp className="text-4xl opacity-80" />
          </div>
        </div>
      </div>

      {/* My Courses */}
      {myCourses.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            My Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {myCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      )}

      {/* Available Courses */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
          Available Courses
        </h2>
        {availableCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableCourses.map(course => (
              <CourseCard
                key={course.id}
                course={course}
                showEnroll
                onEnroll={handleEnroll}
              />
            ))}
          </div>
        ) : (
          <p className="text-gray-600 dark:text-gray-400">
            You're enrolled in all available courses!
          </p>
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;
